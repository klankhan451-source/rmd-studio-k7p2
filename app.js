/*
 * ============================================================
 *  Songlap Ramadan Planner Generator — main app
 * ============================================================
 *  LICENSING CONFIG
 *  Each buyer has a UNIQUE code, registered to their name by
 *  the license server (Google Apps Script + Google Sheet).
 *  The app sends { name, code } to LICENSE_API_URL and unlocks
 *  only when the server says ok.
 *  >> After deploying the Apps Script web app, paste its URL
 *     in place of the placeholder below. That is the ONLY
 *     change needed to go live. <<
 * ============================================================
 */
const LICENSE_API_URL = "https://script.google.com/macros/s/AKfycbw40eGBjB6tmql60JiHNr30lO2-zPx-qg_Muo1zOlEBzjDYis_GlXIXSvJZNxsrd679BA/exec";

/* ---------- License response handling (pure, unit-tested) ---------- */

var LICENSE_ERROR_MESSAGES = {
  invalid_code: 'This code was not found. Please check the code from your purchase.',
  code_registered_to_another_name: 'This code is already registered to another buyer. If this is your code, please contact support.',
  missing_fields: 'Please enter both your name and your code.',
  network: 'Could not verify your code. Please check your internet connection and try again.'
};

function licenseErrorMessage(errorCode) {
  return LICENSE_ERROR_MESSAGES[errorCode] || LICENSE_ERROR_MESSAGES.network;
}

/* Turn a parsed license-server response into an app decision. */
function interpretLicenseResponse(data) {
  if (!data || typeof data !== 'object') {
    return { action: 'error', message: licenseErrorMessage('network') };
  }
  if (data.ok === true) {
    return { action: 'unlock', test: data.test === true };
  }
  return { action: 'error', message: licenseErrorMessage(data.error) };
}

/* Allow the Node test suite to exercise the pure logic above. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LICENSE_API_URL: LICENSE_API_URL,
    LICENSE_ERROR_MESSAGES: LICENSE_ERROR_MESSAGES,
    licenseErrorMessage: licenseErrorMessage,
    interpretLicenseResponse: interpretLicenseResponse
  };
}

(function () {
  'use strict';

  /* ---------- License gate ---------- */

  var NAME_KEY = 'ramadan_license_name';
  var CODE_KEY = 'ramadan_license_code';
  var THEME_KEY = 'ramadan_cover_theme';
  var appStarted = false;
  /* the currently chosen cover design id (one of RP.COVER_DESIGNS);
     initApp restores it from localStorage (with migration) */
  var currentTheme = 'midnight-lantern';

  function unlock() {
    document.getElementById('lock-screen').hidden = true;
    document.getElementById('app').hidden = false;
    if (!appStarted) { appStarted = true; initApp(); }
  }

  function showLicenseBar(name, code) {
    document.getElementById('license-name').textContent = name;
    document.getElementById('license-code').textContent = code;
    document.getElementById('license-bar').hidden = false;
  }

  function storedLicense() {
    try {
      var name = localStorage.getItem(NAME_KEY);
      var code = localStorage.getItem(CODE_KEY);
      if (name && code) return { name: name, code: code };
    } catch (e) { /* private mode */ }
    return null;
  }

  function initGate() {
    var saved = storedLicense();
    if (saved) { showLicenseBar(saved.name, saved.code); unlock(); return; }

    var form = document.getElementById('lock-form');
    var nameInput = document.getElementById('lock-name');
    var codeInput = document.getElementById('lock-input');
    var button = document.getElementById('lock-submit');
    var errorEl = document.getElementById('lock-error');

    function showError(message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }

    function setChecking(checking) {
      button.disabled = checking;
      nameInput.disabled = checking;
      codeInput.disabled = checking;
      button.textContent = checking ? 'Checking…' : 'Unlock';
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = nameInput.value.trim().replace(/\s+/g, ' ');
      var code = codeInput.value.trim().toUpperCase();
      if (!name || !code) { showError(licenseErrorMessage('missing_fields')); return; }
      errorEl.hidden = true;
      setChecking(true);
      // text/plain keeps this a "simple request" (no CORS preflight),
      // which is what the Apps Script web app expects.
      fetch(LICENSE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name: name, code: code })
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        var result = interpretLicenseResponse(data);
        setChecking(false);
        if (result.action === 'unlock') {
          try {
            localStorage.setItem(NAME_KEY, name);
            localStorage.setItem(CODE_KEY, code);
          } catch (e) { /* ignore */ }
          showLicenseBar(name, code);
          unlock();
        } else {
          showError(result.message);
        }
      }).catch(function () {
        setChecking(false);
        showError(licenseErrorMessage('network'));
      });
    });
  }

  /* ---------- App ---------- */

  function $(id) { return document.getElementById(id); }

  function readSpec() {
    return {
      startDate: $('pl-start').value || RP.DEFAULT_START,
      lang: $('pl-lang').value,
      numerals: $('pl-numerals').value,
      paper: $('pl-paper').value,
      coverTheme: currentTheme,
      includeKids: $('pl-kids').checked,
      name: $('pl-name').value
    };
  }

  function build() {
    var spec = readSpec();
    var status = $('pl-status');
    status.textContent = 'Building your planner…';
    $('pl-build').disabled = true;
    setTimeout(function () {
      try {
        var total = BookBuilder.renderBook(spec);
        $('pl-print').disabled = false;
        status.textContent = 'Planner ready: ' + total + ' pages (' +
          BookBuilder.SIZES[spec.paper].label + '). Scroll down to preview, ' +
          'then click Download / Print PDF. In the print dialog choose ' +
          'Save as PDF and set margins to None — the page size is set automatically.';
        $('pl-output').innerHTML = '<p class="placeholder">✅ Planner generated — the preview is below the tool. ' +
          'Click <strong>Download / Print PDF</strong> to save it.</p>';
      } catch (err) {
        status.textContent = 'Something went wrong while building the planner: ' + err.message;
      } finally {
        $('pl-build').disabled = false;
      }
    }, 30);
  }

  /* Render one true-size cover sheet (816x1056 = a Letter sheet
     at 96dpi) for a design, exactly as book.js assembles page 1 —
     used for the picker's miniature covers and the live preview.
     The sheet is scaled down by CSS transform (fitMiniSheets). */
  function coverSheetHTML(designId, name, lang) {
    var spec = RP.normalizeSpec({
      startDate: RP.DEFAULT_START, lang: lang || 'en', numerals: 'west',
      paper: 'letter', coverTheme: designId, includeKids: true, name: name || ''
    });
    var ctx = Render.mkCtx(spec);
    return '<div class="book-page cover-page cover-theme-' + spec.coverTheme + '" dir="' + ctx.dir + '"' +
      ' style="width:816px;height:1056px;padding:57.6px;margin:0;box-shadow:none;">' +
      '<div class="page-body">' + Render.pageHTML({ type: 'cover', name: spec.name }, ctx) + '</div></div>';
  }

  /* Scale every .mini-sheet in the document to its viewport. */
  function fitMiniSheets() {
    var sheets = document.querySelectorAll('.mini-sheet');
    for (var i = 0; i < sheets.length; i++) {
      var vp = sheets[i].parentElement;
      if (!vp || !vp.clientWidth) continue;
      sheets[i].style.transform = 'scale(' + (vp.clientWidth / 816) + ')';
    }
  }

  function updateCoverPreview() {
    var sheet = $('pl-cover-sheet');
    if (!sheet || typeof Render === 'undefined') return;
    var name = $('pl-name') ? $('pl-name').value : '';
    var lang = $('pl-lang') ? $('pl-lang').value : 'en';
    sheet.innerHTML = coverSheetHTML(currentTheme, name, lang);
    var d = RP.coverDesign(currentTheme);
    var nameEl = $('pl-cover-name');
    if (nameEl && d) nameEl.textContent = d.name + ' — this is page 1 of your planner.';
    fitMiniSheets();
  }

  function initApp() {
    BookBuilder.init(build);
    /* cover design picker: every design card carries a REAL
       miniature cover (the true page-1 markup, scaled down), the
       buyer's saved choice is restored (migrating 4-design-era
       palette ids to that palette's lantern design), changes are
       remembered, and the stage shows a live cover preview */
    var picker = $('pl-theme');
    if (picker && typeof RP !== 'undefined' && RP.COVER_DESIGNS) {
      var savedTheme = null;
      try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* private mode */ }
      currentTheme = RP.migrateCoverTheme(savedTheme || currentTheme);
      if (savedTheme && savedTheme !== currentTheme) {
        try { localStorage.setItem(THEME_KEY, currentTheme); } catch (e) { /* ignore */ }
      }
      var titleEl = $('pl-theme-title');
      if (titleEl) {
        titleEl.textContent = 'Cover design — tap a design to choose it (' +
          RP.COVER_DESIGNS.length + ' designs)';
      }
      picker.innerHTML = RP.COVER_DESIGNS.map(function (d) {
        return '<button type="button" class="design-card" role="option" data-design="' + d.id + '" aria-label="' + d.name + '">' +
          '<span class="mini-viewport"><span class="mini-sheet">' +
          coverSheetHTML(d.id, '', 'en') +
          '</span></span>' +
          '<span class="design-name">' + d.name + '</span></button>';
      }).join('');
      var nameEl = $('pl-theme-name');
      function markSelected() {
        var cards = picker.querySelectorAll('.design-card');
        for (var i = 0; i < cards.length; i++) {
          var on = cards[i].getAttribute('data-design') === currentTheme;
          cards[i].classList.toggle('selected', on);
          cards[i].setAttribute('aria-selected', on ? 'true' : 'false');
        }
        var d = RP.coverDesign(currentTheme);
        if (nameEl && d) {
          nameEl.textContent = 'Selected cover: ' + d.name + ' — it will be page 1 of your planner.';
        }
      }
      picker.addEventListener('click', function (ev) {
        var card = ev.target && ev.target.closest ? ev.target.closest('.design-card') : null;
        if (!card) return;
        currentTheme = RP.migrateCoverTheme(card.getAttribute('data-design'));
        try { localStorage.setItem(THEME_KEY, currentTheme); } catch (e) { /* ignore */ }
        markSelected();
        updateCoverPreview();
      });
      markSelected();
      updateCoverPreview();
      /* the live preview follows the name + language settings */
      $('pl-name').addEventListener('input', updateCoverPreview);
      $('pl-lang').addEventListener('change', updateCoverPreview);
      var fitTimer = null;
      window.addEventListener('resize', function () {
        clearTimeout(fitTimer);
        fitTimer = setTimeout(fitMiniSheets, 120);
      });
    }
    /* changing the start date or language re-labels the hint */
    $('pl-start').addEventListener('change', function () {
      var v = $('pl-start').value;
      $('pl-start-note').textContent = v
        ? 'Day 1 of Ramadan = ' + v + '. Every page date is worked out from this day.'
        : '';
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGate);
    } else {
      initGate();
    }
  }
})();
