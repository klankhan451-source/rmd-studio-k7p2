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
  var COLORING_KEY = 'ramadan_coloring_count';
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
      coloringCount: $('pl-coloring-count') ? parseInt($('pl-coloring-count').value, 10) : NaN,
      name: $('pl-name').value,
      subtitle: $('pl-subtitle') ? $('pl-subtitle').value : '',
      titleFont: $('pl-titlefont') ? $('pl-titlefont').value : 'serif',
      inkSaver: $('pl-inksaver') ? $('pl-inksaver').checked : false,
      extras: {
        duaCards: $('pl-extra-duacards') ? $('pl-extra-duacards').checked : false,
        bookmarks: $('pl-extra-bookmarks') ? $('pl-extra-bookmarks').checked : false,
        notes: $('pl-extra-notes') ? $('pl-extra-notes').checked : false,
        quranDuas: $('pl-extra-quranduas') ? $('pl-extra-quranduas').checked : false,
        surahTracker: $('pl-extra-surahtracker') ? $('pl-extra-surahtracker').checked : false,
        prepChecklist: $('pl-extra-prep') ? $('pl-extra-prep').checked : false,
        readingPlan: $('pl-extra-readplan') ? $('pl-extra-readplan').checked : false
      }
    };
  }

  /* Live page count under the extras toggles: the default book
     is 56 pages (44 without the Kids' Pack); each extra adds its
     pages, and the count follows every toggle immediately. The
     header "What you get" pill shows the same live number. */
  function updatePageCount() {
    var el = $('pl-pagecount');
    if (!el || typeof RP === 'undefined') return;
    var spec = readSpec();
    var count = RP.pageCount(spec);
    el.textContent = 'Your planner: ' + count + ' pages' +
      (spec.includeKids ? ' (Kids’ Pack included)' : '') + '.';
    var pill = $('pl-pill-pages');
    if (pill) pill.textContent = '📖 ' + count + ' pages';
  }

  function build() {
    var spec = readSpec();
    var status = $('pl-status');
    status.textContent = 'Building your planner…';
    $('pl-build').disabled = true;
    setTimeout(function () {
      try {
        var total = BookBuilder.renderBook(spec);
        fitBookPreview();
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
  function coverSheetHTML(designId, name, lang, extra) {
    extra = extra || {};
    var spec = RP.normalizeSpec({
      startDate: RP.DEFAULT_START, lang: lang || 'en', numerals: 'west',
      paper: 'letter', coverTheme: designId, includeKids: true, name: name || '',
      subtitle: extra.subtitle || '', titleFont: extra.titleFont || 'serif',
      inkSaver: extra.inkSaver === true
    });
    var ctx = Render.mkCtx(spec);
    return '<div class="book-page cover-page cover-theme-' + spec.coverTheme +
      ' cover-font-' + spec.titleFont + (spec.inkSaver ? ' ink-saver' : '') + '" dir="' + ctx.dir + '"' +
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

  /* Fit the generated book preview to the screen (2026-11-17).
     book.js renders every sheet at its true size (816px wide for
     Letter, ~794px for A4) — on a phone that is more than twice
     the screen width, so the owner saw the preview "big, and I
     can't zoom it out" (sideways scrolling inside #book-preview).
     Screen only: when the preview box is narrower than a sheet,
     zoom every sheet by the same measured factor so a whole page
     fits the width. CSS zoom takes part in layout (unlike a
     transform scale), so heights and gaps shrink with the pages —
     no overlap, no dead space. On a wide-enough screen the zoom
     is simply removed and pages show at natural size, exactly as
     before. Print safety is triple-locked: this fit only ever
     runs on screen, 'beforeprint' clears it (clearBookPreviewFit)
     and 'afterprint' refits, and styles.css @media print forces
     zoom: 1 !important — the printed book is always true size. */
  function fitBookPreview() {
    var preview = $('book-preview');
    if (!preview || preview.hidden) return;
    var pages = preview.querySelectorAll('.book-page');
    if (!pages.length) return;
    /* every sheet in one book shares the paper width, so measure
       the first sheet with any fit zoom temporarily removed
       (offsetWidth is reported post-zoom in zoom-aware browsers) */
    var first = pages[0];
    var prevZoom = first.style.zoom;
    first.style.zoom = '';
    var natural = first.offsetWidth;
    first.style.zoom = prevZoom;
    if (!natural) return;
    var cs = window.getComputedStyle ? getComputedStyle(preview) : null;
    var padX = cs ? (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0) : 0;
    var avail = preview.clientWidth - padX;
    var factor = avail > 0 && avail < natural ? avail / natural : 0;
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.zoom = factor ? String(factor) : '';
    }
  }

  /* Remove the screen fit (used before printing). */
  function clearBookPreviewFit() {
    var preview = $('book-preview');
    if (!preview) return;
    var pages = preview.querySelectorAll('.book-page');
    for (var i = 0; i < pages.length; i++) pages[i].style.zoom = '';
  }

  function updateCoverPreview() {
    var sheet = $('pl-cover-sheet');
    if (!sheet || typeof Render === 'undefined') return;
    var name = $('pl-name') ? $('pl-name').value : '';
    var lang = $('pl-lang') ? $('pl-lang').value : 'en';
    sheet.innerHTML = coverSheetHTML(currentTheme, name, lang, {
      subtitle: $('pl-subtitle') ? $('pl-subtitle').value : '',
      titleFont: $('pl-titlefont') ? $('pl-titlefont').value : 'serif',
      inkSaver: $('pl-inksaver') ? $('pl-inksaver').checked : false
    });
    var d = RP.coverDesign(currentTheme);
    var nameEl = $('pl-cover-name');
    if (nameEl && d) nameEl.textContent = d.name + ' — this is page 1 of your planner.';
    fitMiniSheets();
  }

  function initApp() {
    BookBuilder.init(build);
    /* ---------- Learn tab (2026-11-17) ----------
       Two tabs: Create (the settings + preview, as always) and
       Learn — five teaching cards about what the book contains
       and how to use it. The Learn card 1 picture is a REAL Day-1
       daily page rendered by the book's own renderer into a
       mini-sheet, scaled by the same fitMiniSheets machinery as
       the cover picker. The tab is screen-only: it lives inside
       #app, which print hides entirely. */
    var learnSheet = $('learn-daily-sheet');
    if (learnSheet && typeof Render !== 'undefined' && typeof RPDATA !== 'undefined') {
      var lspec = RP.normalizeSpec({
        startDate: RP.DEFAULT_START, lang: 'en', numerals: 'west',
        paper: 'letter', includeKids: true, name: ''
      });
      var lctx = Render.mkCtx(lspec);
      learnSheet.innerHTML =
        '<div class="book-page" dir="ltr" style="width:816px;height:1056px;padding:57.6px;margin:0;box-shadow:none;">' +
        '<div class="page-body">' + Render.pageHTML({
          type: 'daily', day: 1,
          date: RP.dateForDay(RP.DEFAULT_START, 1), dua: RPDATA.DUAS[0]
        }, lctx) + '</div></div>';
    }
    var btnCreate = $('tab-btn-create'), btnLearn = $('tab-btn-learn');
    var tabCreate = $('tab-create'), tabLearn = $('tab-learn');
    function showTab(learn) {
      if (!tabCreate || !tabLearn) return;
      tabCreate.hidden = learn;
      tabLearn.hidden = !learn;
      if (btnCreate) {
        btnCreate.classList.toggle('active', !learn);
        btnCreate.setAttribute('aria-selected', learn ? 'false' : 'true');
      }
      if (btnLearn) {
        btnLearn.classList.toggle('active', learn);
        btnLearn.setAttribute('aria-selected', learn ? 'true' : 'false');
      }
      /* the Learn miniature can only be measured once visible */
      if (learn) fitMiniSheets();
      window.scrollTo(0, 0);
    }
    if (btnCreate && btnLearn) {
      btnCreate.addEventListener('click', function () { showTab(false); });
      btnLearn.addEventListener('click', function () { showTab(true); });
    }
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
          '<div class="mini-viewport"><div class="mini-sheet">' +
          coverSheetHTML(d.id, '', 'en') +
          '</div></div>' +
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
      /* Refit once webfonts land (a late font swap can trigger a
         relayout after the first fit) and whenever a viewport
         itself changes size (rotation, the panel reflowing to one
         column) — ResizeObserver where the browser has one. The
         observer also fires once on observe(), giving every sheet
         a second fit after first layout. Guarded: without RO the
         resize listener above still covers viewport changes. */
      if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
        document.fonts.ready.then(function () { fitMiniSheets(); });
      }
      if (typeof ResizeObserver !== 'undefined') {
        var miniRO = new ResizeObserver(function () { fitMiniSheets(); });
        var miniVps = document.querySelectorAll('.mini-viewport, .cover-preview-viewport');
        for (var vi = 0; vi < miniVps.length; vi++) miniRO.observe(miniVps[vi]);
      }
    }
    /* book preview fit (2026-11-17): refit the generated sheets
       whenever the viewport changes (window resize, phone
       rotation), and keep printing at true size — 'beforeprint'
       clears the screen zoom, 'afterprint' refits the preview.
       styles.css @media print also forces zoom: 1 !important, so
       the printed book cannot inherit the screen fit even if a
       print event is missed. */
    var bookFitTimer = null;
    function refitBookSoon() {
      clearTimeout(bookFitTimer);
      bookFitTimer = setTimeout(fitBookPreview, 120);
    }
    window.addEventListener('resize', refitBookSoon);
    window.addEventListener('orientationchange', refitBookSoon);
    window.addEventListener('beforeprint', clearBookPreviewFit);
    window.addEventListener('afterprint', fitBookPreview);
    /* cover text + print options follow the live preview; the
       live page count follows the kids pack + extras toggles */
    if ($('pl-subtitle')) $('pl-subtitle').addEventListener('input', updateCoverPreview);
    if ($('pl-titlefont')) $('pl-titlefont').addEventListener('change', updateCoverPreview);
    if ($('pl-inksaver')) $('pl-inksaver').addEventListener('change', updateCoverPreview);
    ['pl-kids', 'pl-inksaver', 'pl-extra-duacards', 'pl-extra-bookmarks', 'pl-extra-notes',
     'pl-extra-quranduas', 'pl-extra-surahtracker', 'pl-extra-prep', 'pl-extra-readplan',
     'pl-coloring-count']
      .forEach(function (id) {
        var el = $(id);
        if (el) el.addEventListener('change', updatePageCount);
      });
    /* the colouring-page count is remembered like the cover
       design: restore the buyer's saved choice, keep it saved */
    var coloringSel = $('pl-coloring-count');
    if (coloringSel && typeof RP !== 'undefined') {
      var savedColoring = null;
      try { savedColoring = localStorage.getItem(COLORING_KEY); } catch (e) { /* private mode */ }
      if (savedColoring !== null) {
        coloringSel.value = String(RP.normalizeColoringCount(savedColoring));
      }
      coloringSel.addEventListener('change', function () {
        try { localStorage.setItem(COLORING_KEY, coloringSel.value); } catch (e) { /* ignore */ }
      });
    }
    updatePageCount();
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
