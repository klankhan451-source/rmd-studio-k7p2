/*
 * Songlap Ramadan Planner Generator — book assembly + printing.
 * Assembles the full planner (fixed-size sheets, one page per
 * sheet) into #book-preview, which is what the browser prints.
 * @page size follows the chosen paper (A4 or US Letter), margins 0;
 * each .book-page carries its own padding.
 */
(function (global) {
  'use strict';

  var RP = (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
    ? require('./generators.js') : global.RP;
  var Render = (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
    ? require('./render.js') : global.Render;

  var SIZES = {
    'letter': { w: 8.5, h: 11, unit: 'in', cssSize: '8.5in 11in', label: 'US Letter (8.5 × 11 in)', pad: 0.6 },
    'a4': { w: 210, h: 297, unit: 'mm', cssSize: '210mm 297mm', label: 'A4 (210 × 297 mm)', pad: 15 }
  };

  function $(id) { return document.getElementById(id); }

  function setPageSize(size) {
    var old = document.getElementById('page-style');
    if (old) old.remove();
    var st = document.createElement('style');
    st.id = 'page-style';
    st.textContent = '@page { size: ' + size.cssSize + '; margin: 0; }';
    document.head.appendChild(st);
  }

  function pageStyle(size) {
    return 'width:' + size.w + size.unit + ';height:' + size.h + size.unit +
      ';padding:' + size.pad + size.unit + ';';
  }

  /* Render the whole planner into #book-preview.
     Returns the total sheet count. */
  function renderBook(specIn) {
    var spec = RP.normalizeSpec(specIn);
    var size = SIZES[spec.paper] || SIZES.letter;
    setPageSize(size);
    var ps = pageStyle(size);
    var ctx = Render.mkCtx(spec);
    var pages = RP.buildPages(spec);
    var total = pages.length;

    var out = pages.map(function (page, idx) {
      var cls = 'book-page' +
        (page.type === 'cover' || page.type === 'kidsdivider' || page.type === 'backcover' ? ' cover-page' : '') +
        /* the chosen cover design colours page 1 only (styles.css
           cover-theme-* variables); the kids divider shares the
           cover-page layout class but keeps the default design */
        (page.type === 'cover' ? ' cover-theme-' + spec.coverTheme : '') +
        /* cover title font choice (2026-11-17): styles.css swaps
           the .cover-title-main face per class */
        (page.type === 'cover' ? ' cover-font-' + spec.titleFont : '') +
        /* ink-saver printing (2026-11-17): styles.css lightens
           the cover + interior accents under this class */
        (spec.inkSaver ? ' ink-saver' : '') +
        /* interior theming (2026-11-17): the chosen design's
           palette also stamps every inside page, so styles.css can
           flow its accent into page titles, dua cards, table
           header bands and the footer rule (colours only — the
           layout is unchanged) */
        (page.type !== 'cover' ? ' book-theme-' + ctx.coverDesign.palette : '') +
        (page.type === 'certificate' ? ' cert-page' : '');
      var footer = '<p class="page-footer">' +
        Render.esc(Render.S(ctx, 'footerBrand')) + ' · ' +
        Render.esc(Render.S(ctx, 'pageOf', { n: Render.N(ctx, idx + 1) })) +
        ' / ' + Render.N(ctx, total) + '</p>';
      /* the covers carry their own branding instead of a footer */
      if (page.type === 'cover' || page.type === 'backcover') footer = '';
      return '<div class="' + cls + '" dir="' + ctx.dir + '" style="' + ps + '">' +
        '<div class="page-body">' + Render.pageHTML(page, ctx) + '</div>' +
        footer + '</div>';
    });

    var preview = $('book-preview');
    preview.innerHTML = out.join('');
    preview.hidden = false;
    return total;
  }

  function init(onBuild) {
    var buildBtn = $('pl-build');
    if (buildBtn) buildBtn.addEventListener('click', function () { onBuild(); });
    var printBtn = $('pl-print');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  }

  var api = { SIZES: SIZES, renderBook: renderBook, init: init, _pageStyle: pageStyle };
  global.BookBuilder = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
