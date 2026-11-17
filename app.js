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

  /* Tiny ornament marks for the picker cards (screen only,
     drawn in the palette's deco colour via currentColor). */
  function ornamentMark(ornament) {
    if (ornament === 'mosque') {
      return '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M12 2.5 C13.8 5 15.5 6 15.5 9 L8.5 9 C8.5 6 10.2 5 12 2.5 Z" fill="currentColor"/>' +
        '<rect x="6" y="9" width="12" height="8" fill="currentColor"/>' +
        '<rect x="2.6" y="7" width="1.8" height="10" fill="currentColor"/>' +
        '<rect x="19.6" y="7" width="1.8" height="10" fill="currentColor"/>' +
        '<rect x="4" y="17.6" width="16" height="1.4" fill="currentColor"/></svg>';
    }
    if (ornament === 'star') {
      return '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">' +
        '<polygon points="12,1.5 14.5,6 19.4,4.6 18,9.5 22.5,12 18,14.5 19.4,19.4 14.5,18 12,22.5 9.5,18 4.6,19.4 6,14.5 1.5,12 6,9.5 4.6,4.6 9.5,6" fill="currentColor"/></svg>';
    }
    /* lantern: crescent + star + hanging fanoos */
    return '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M7 2.8 A6.2 6.2 0 1 0 7 15.2 A7.7 7.7 0 0 1 7 2.8 Z" fill="currentColor"/>' +
      '<polygon points="12.8,3.6 13.4,5.4 15.3,5.4 13.8,6.5 14.3,8.3 12.8,7.2 11.3,8.3 11.8,6.5 10.3,5.4 12.2,5.4" fill="currentColor"/>' +
      '<path d="M18.4 5.6 L19.6 5.6 L19.6 7.6 L21.2 9.4 L21.2 17.2 L16.8 17.2 L16.8 9.4 Z M17.6 18.2 L20.4 18.2 L19 20.6 Z" fill="currentColor"/></svg>';
  }

  function initApp() {
    BookBuilder.init(build);
    /* cover design picker: build the 30 design cards, restore the
       buyer's saved choice (migrating 4-design-era palette ids to
       that palette's lantern design) and remember changes */
    var picker = $('pl-theme');
    if (picker && typeof RP !== 'undefined' && RP.COVER_DESIGNS) {
      var savedTheme = null;
      try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* private mode */ }
      currentTheme = RP.migrateCoverTheme(savedTheme || currentTheme);
      if (savedTheme && savedTheme !== currentTheme) {
        try { localStorage.setItem(THEME_KEY, currentTheme); } catch (e) { /* ignore */ }
      }
      picker.innerHTML = RP.COVER_DESIGNS.map(function (d) {
        var p = RP.COVER_PALETTES[d.palette];
        return '<button type="button" class="design-card" role="option" data-design="' + d.id + '" aria-label="' + d.name + '">' +
          '<span class="design-swatch" style="background:' + p.grad + ';color:' + p.deco + '">' +
          ornamentMark(d.ornament) + '</span>' +
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
      });
      markSelected();
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
