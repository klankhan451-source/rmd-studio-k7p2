/*
 * Songlap Ramadan Planner Generator — HTML/SVG renderers.
 * Pure string builders used by book.js for both the on-screen
 * preview and print (identical output). Language modes:
 *   'ar' — Arabic only, dir=rtl pages
 *   'en' — English only, dir=ltr pages
 *   'bi' — bilingual: Arabic label + smaller English label
 * Dua texts are always shown in their original Arabic (they are
 * quotations); the English meaning appears in 'en' and 'bi' modes.
 * All artwork is objects only — no people, no faces.
 */
(function (global) {
  'use strict';

  var DATA = (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
    ? require('./data.js') : global.RPDATA;
  var RP = (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
    ? require('./generators.js') : global.RP;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- context + labels ---------- */

  function mkCtx(spec) {
    spec = spec || {};
    var designId = RP.migrateCoverTheme(spec.coverTheme);
    return {
      lang: spec.lang, numerals: spec.numerals, name: spec.name || '',
      dir: spec.lang === 'en' ? 'ltr' : 'rtl',
      coverTheme: designId,
      coverDesign: RP.coverDesign(designId)
    };
  }

  function N(ctx, v) { return RP.num(v, ctx.numerals); }

  function fill(tpl, vars) {
    return String(tpl).replace(/\{(\w+)\}/g, function (_, k) {
      return vars && vars[k] != null ? vars[k] : _;
    });
  }

  /* Label in the active language mode. */
  function L(ctx, key, vars) {
    var s = DATA.STRINGS[key];
    if (!s) return key;
    var en = fill(s.en, vars), ar = fill(s.ar, vars);
    if (ctx.lang === 'en') return esc(en);
    if (ctx.lang === 'ar') return esc(ar);
    if (ar === en) return esc(en); // language-neutral text (e.g. the brand) prints once
    return '<span class="l-ar">' + esc(ar) + '</span> <span class="l-en">' + esc(en) + '</span>';
  }

  /* Bilingual DISPLAY lines (cover, kids divider, certificate): the
   * Arabic and English stacked as separate lines, each in its own
   * direction — the same pattern as the deed cards (.card-ar/.card-en).
   * A single mixed-direction line is fragile in print engines: the
   * line can spill off the sheet and ending punctuation (!, .) can
   * jump to the wrong side. Stacked lines cannot do either. */
  function LStack(ctx, key, vars) {
    var s = DATA.STRINGS[key];
    if (!s) return key;
    var en = fill(s.en, vars), ar = fill(s.ar, vars);
    if (ctx.lang === 'en') return esc(en);
    if (ctx.lang === 'ar') return esc(ar);
    if (ar === en) return esc(en);
    return '<span class="bi-ar" dir="rtl" lang="ar">' + esc(ar) + '</span>' +
      '<span class="bi-en" dir="ltr">' + esc(en) + '</span>';
  }

  /* One-language string (for tests + places that must not stack). */
  function S(ctx, key, vars) {
    var s = DATA.STRINGS[key];
    if (!s) return key;
    return fill(ctx.lang === 'ar' ? s.ar : s.en, vars);
  }

  function cb(cls) { return '<span class="cb' + (cls ? ' ' + cls : '') + '"></span>'; }
  function wline() { return '<span class="wline"></span>'; }
  function ruled() { return '<div class="ruled"></div>'; }

  function blkTitle(ctx, key) {
    return '<h3 class="blk-title">' + L(ctx, key) + '</h3>';
  }

  function pageHead(ctx, titleHtml, subHtml) {
    return '<div class="pg-head"><h2 class="pg-title">' + titleHtml + '</h2>' +
      (subHtml ? '<div class="pg-sub">' + subHtml + '</div>' : '') + '</div>';
  }

  /* ---------- decorative + colouring SVG (objects only) ---------- */

  function starPoints(cx, cy, rO, rI) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var r = i % 2 === 0 ? rO : rI;
      var a = -Math.PI / 2 + i * Math.PI / 5;
      pts.push((Math.round((cx + r * Math.cos(a)) * 10) / 10) + ',' +
        (Math.round((cy + r * Math.sin(a)) * 10) / 10));
    }
    return pts.join(' ');
  }

  /* Crescent path: outer arc (left) + inner arc back. */
  function crescentD(cx, cy, R) {
    var r2 = Math.round(R * 1.24 * 10) / 10;
    return 'M ' + cx + ' ' + (cy - R) +
      ' A ' + R + ' ' + R + ' 0 1 0 ' + cx + ' ' + (cy + R) +
      ' A ' + r2 + ' ' + r2 + ' 0 0 1 ' + cx + ' ' + (cy - R) + ' Z';
  }

  function starSVG(cx, cy, r, attrs) {
    return '<polygon points="' + starPoints(cx, cy, r, r * 0.45) + '" ' + attrs + '/>';
  }

  /* Eight-pointed star (Rub el Hizb style): 16 vertices alternating
     outer / inner radius every 22.5 degrees. */
  function star8Points(cx, cy, rO, rI) {
    var pts = [];
    for (var i = 0; i < 16; i++) {
      var r = i % 2 === 0 ? rO : rI;
      var a = -Math.PI / 2 + i * Math.PI / 8;
      pts.push((Math.round((cx + r * Math.cos(a)) * 10) / 10) + ',' +
        (Math.round((cy + r * Math.sin(a)) * 10) / 10));
    }
    return pts.join(' ');
  }

  function star8SVG(cx, cy, r, attrs) {
    return '<polygon points="' + star8Points(cx, cy, r, r * 0.62) + '" ' + attrs + '/>';
  }

  /* Cover artwork is drawn in the palette's deco colour, baked
     into the markup by decoSVG / coverPatternSVG (print engines
     do not reliably recolour SVG presentation attributes from
     CSS, so the colour cannot ride on a CSS rule alone). */
  function paint(s, color) {
    return color && color !== '#ffd166' ? s.split('#ffd166').join(color) : s;
  }

  /* ---------- Foil gradients (cover upgrade 2026-11-17) ----------
   * Multi-tone metallic gradients for the cover artwork, in the
   * palette's metal family. IMPORTANT print-pipeline fact, probe-
   * verified against WeasyPrint 70 (the PDF pipeline used for the
   * sample/retail books): objectBoundingBox gradients render
   * NOTHING there, while gradientUnits="userSpaceOnUse" gradients
   * (linear + radial), pattern fills and clip paths all render
   * correctly — so every gradient below is userSpaceOnUse, which
   * browsers also support. HTML title text cannot take an SVG
   * gradient and CSS background-clip:text renders the title
   * INVISIBLE in WeasyPrint, so titles use a rich solid foil tone
   * (the --cover-title variables) instead. */
  function foilStops(deco) {
    switch (deco) {
      case '#d7deeb': return [[0, '#ffffff'], [0.45, '#d7deeb'], [0.78, '#93a3bd'], [1, '#eef2f8']]; // silver
      case '#dfa32e': return [[0, '#f3cd8a'], [0.45, '#dfa32e'], [0.78, '#a8741a'], [1, '#f3cd8a']]; // bronze
      case '#d99a5c': return [[0, '#f6cfae'], [0.45, '#d99a5c'], [0.78, '#b06f3f'], [1, '#f6cfae']]; // rose gold
      case '#f0c35c': return [[0, '#f9e29a'], [0.45, '#f0c35c'], [0.78, '#b8860b'], [1, '#f9e29a']]; // pale gold
      default: return [[0, '#f6e27a'], [0.45, '#d4af37'], [0.78, '#aa8a2e'], [1, '#f6e27a']];        // gold
    }
  }

  function foilDefs(uid, deco, x2, y2) {
    var stops = foilStops(deco).map(function (st) {
      return '<stop offset="' + st[0] + '" stop-color="' + st[1] + '"/>';
    }).join('');
    return '<defs><linearGradient id="foil-' + uid + '" gradientUnits="userSpaceOnUse" ' +
      'x1="0" y1="0" x2="' + x2 + '" y2="' + y2 + '">' + stops + '</linearGradient></defs>';
  }

  /* Repaint a #ffd166-baked SVG so its flat fills/strokes become
     the foil gradient defined by foilDefs for this uid. */
  function foilPaint(s, uid) {
    return s.split('fill="#ffd166"').join('fill="url(#foil-' + uid + ')"')
      .split('stroke="#ffd166"').join('stroke="url(#foil-' + uid + ')"');
  }

  /* Cover ornament: mosque silhouette — central dome with a small
     crescent finial, two minarets, an arched door, corner stars. */
  function mosqueSVG() {
    var s = '<svg class="deco-svg ornament-mosque" viewBox="0 0 400 300" aria-hidden="true">';
    var F = 'fill="#ffd166"';
    /* finial crescent above the dome */
    s += '<path d="' + crescentD(200, 34, 15) + '" ' + F + '/>';
    s += '<line x1="200" y1="52" x2="200" y2="72" stroke="#ffd166" stroke-width="4"/>';
    /* main dome + building */
    s += '<path d="M138 208 C138 148 172 138 200 100 C228 138 262 148 262 208 Z" ' + F + '/>';
    s += '<rect x="138" y="208" width="124" height="58" ' + F + '/>';
    /* minarets */
    [102, 298].forEach(function (cx) {
      s += '<path d="M' + (cx - 14) + ' 138 C' + (cx - 14) + ' 116 ' + (cx - 6) + ' 110 ' +
        cx + ' 94 C' + (cx + 6) + ' 110 ' + (cx + 14) + ' 116 ' + (cx + 14) + ' 138 Z" ' + F + '/>';
      s += '<rect x="' + (cx - 17) + '" y="176" width="34" height="9" ' + F + '/>';
      s += '<rect x="' + (cx - 10) + '" y="138" width="20" height="128" ' + F + '/>';
    });
    /* ground line + corner stars */
    s += '<rect x="66" y="266" width="268" height="5" ' + F + '/>';
    s += starSVG(58, 62, 13, F);
    s += starSVG(342, 62, 13, F);
    s += starSVG(52, 232, 9, 'fill="#ffd166" opacity="0.75"');
    s += starSVG(348, 232, 9, 'fill="#ffd166" opacity="0.75"');
    return s + '</svg>';
  }

  /* Cover ornament: eight-pointed star medallion inside a thin
     ring, with a smaller star outline at its heart and corner
     stars. */
  function starMedallionSVG() {
    var s = '<svg class="deco-svg ornament-star" viewBox="0 0 400 300" aria-hidden="true">';
    var F = 'fill="#ffd166"';
    s += '<circle cx="200" cy="150" r="112" fill="none" stroke="#ffd166" stroke-width="3"/>';
    s += '<circle cx="200" cy="150" r="103" fill="none" stroke="#ffd166" stroke-width="1.5" opacity="0.7"/>';
    s += '<polygon points="' + star8Points(200, 150, 92, 92 * 0.62) + '" ' + F + '/>';
    s += '<polygon points="' + star8Points(200, 150, 52, 52 * 0.62) + '" fill="none" stroke="#ffd166" stroke-width="4"/>';
    s += '<circle cx="200" cy="150" r="9" ' + F + '/>';
    s += starSVG(52, 48, 12, F);
    s += starSVG(348, 48, 12, F);
    s += starSVG(52, 252, 12, F);
    s += starSVG(348, 252, 12, F);
    return s + '</svg>';
  }

  /* The raw ornament SVGs, baked in the original gold #ffd166.
     decoSVG flat-paints them (divider / Eid / certificate);
     foilOrnamentSVG gradient-paints them (the book cover). */
  function rawOrnamentSVG(ornament) {
    if (ornament === 'mosque') return mosqueSVG();
    if (ornament === 'star') return starMedallionSVG();
    var s = '<svg class="deco-svg ornament-lantern" viewBox="0 0 400 300" aria-hidden="true">';
    s += '<path d="' + crescentD(130, 130, 95) + '" fill="#ffd166"/>';
    s += starSVG(215, 70, 20, 'fill="#ffd166"');
    s += starSVG(60, 235, 12, 'fill="#ffd166" opacity="0.75"');
    s += starSVG(320, 225, 14, 'fill="#ffd166" opacity="0.75"');
    /* lantern hanging at right */
    s += '<g stroke="#ffd166" stroke-width="5" fill="none" stroke-linejoin="round">';
    s += '<line x1="290" y1="18" x2="290" y2="52"/>';
    s += '<circle cx="290" cy="62" r="9"/>';
    s += '<path d="M262 78 L318 78 L306 104 L274 104 Z"/>';
    s += '<path d="M268 104 L312 104 L312 196 L268 196 Z"/>';
    s += '<line x1="290" y1="104" x2="290" y2="196"/>';
    s += '<line x1="268" y1="150" x2="312" y2="150"/>';
    s += '<path d="M274 196 L306 196 L290 226 Z"/>';
    s += '</g>';
    s += '<circle cx="290" cy="150" r="13" fill="#ffd166"/>';
    return s + '</svg>';
  }

  /* The original cover ornament: crescent + fanoos lantern + stars.
     Also the divider / Eid / certificate ornament (no argument). */
  function decoSVG(ornament, color) {
    return paint(rawOrnamentSVG(ornament), color);
  }

  /* The cover version of an ornament: same drawing, but the flat
     deco colour becomes the palette's multi-tone foil gradient.
     uid (the design id) keeps gradient ids unique when several
     covers share one document (the settings picker thumbnails). */
  function foilOrnamentSVG(ornament, deco, uid) {
    var s = rawOrnamentSVG(ornament);
    s = s.replace(/(<svg[^>]*>)/, '$1' + foilDefs(uid, deco, 400, 300));
    return foilPaint(s, uid);
  }

  /* Subtle geometric pattern layer for the cover: a lattice of
     small eight-pointed star outlines + dots in the palette's
     deco colour, faded by styles.css (.cover-pattern opacity).
     Absolutely positioned by CSS, so it never affects the printed
     layout. viewBox matches a Letter sheet at 96dpi; 'slice'
     crops it gracefully on A4. */
  function coverPatternSVG(color) {
    var s = '<svg class="cover-pattern-svg" viewBox="0 0 816 1056" preserveAspectRatio="xMidYMid slice" aria-hidden="true">';
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 7; col++) {
        var cx = 68 + col * 120 + (row % 2 ? 60 : 0);
        var cy = 68 + row * 120;
        if (cx > 800) continue;
        s += '<polygon points="' + star8Points(cx, cy, 17, 17 * 0.62) +
          '" fill="none" stroke="#ffd166" stroke-width="1.6"/>';
        s += '<circle cx="' + (cx + 60) + '" cy="' + (cy + 60) + '" r="2.6" fill="#ffd166"/>';
      }
    }
    return paint(s + '</svg>', color);
  }

  /* ---------- Hero scene covers (added 2026-11-17) ----------
   * Full-composition cover scenes in an 816x1056 viewBox (a US
   * Letter sheet at 96dpi; 'slice' crops gracefully on A4, like
   * the pattern layer). All gradients are userSpaceOnUse (see
   * the foil note above). Seeded randomness keeps every buyer's
   * copy of a design identical. Objects only — no people. */

  function lcg(seed) {
    var s = seed >>> 0;
    return function () {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
  }

  /* Four-point sparkle (diamond star) polygon points. */
  function sparklePoints(cx, cy, r) {
    var pts = [];
    for (var i = 0; i < 8; i++) {
      var rad = i % 2 === 0 ? r : r * 0.24;
      var a = -Math.PI / 2 + i * Math.PI / 4;
      pts.push((Math.round((cx + rad * Math.cos(a)) * 10) / 10) + ',' +
        (Math.round((cy + rad * Math.sin(a)) * 10) / 10));
    }
    return pts.join(' ');
  }

  function starFieldSVG(rand, count, w, yMax, colors) {
    var cols = colors || ['#ffd166', '#fff3c4', '#ffffff'];
    var s = '';
    for (var i = 0; i < count; i++) {
      var x = +(rand() * w).toFixed(1), y = +(rand() * yMax).toFixed(1);
      var c = cols[Math.floor(rand() * cols.length)];
      var o = (0.3 + rand() * 0.65).toFixed(2);
      if (i % 11 === 5) {
        s += '<polygon points="' + sparklePoints(x, y, 7 + rand() * 6) + '" fill="' + c + '" opacity="' + o + '"/>';
      } else {
        s += '<circle cx="' + x + '" cy="' + y + '" r="' + (0.9 + rand() * 1.9).toFixed(1) +
          '" fill="' + c + '" opacity="' + o + '"/>';
      }
    }
    return s;
  }

  /* A fanoos lantern drawn around a local origin at its centre
     (glow disc included by hangingLantern). */
  function lanternLocal(uid) {
    var G = 'url(#foil-' + uid + ')';
    var s = '<g stroke="' + G + '" stroke-width="5" fill="none" stroke-linejoin="round">';
    s += '<circle cx="0" cy="-88" r="9"/>';
    s += '<path d="M-28 -72 L28 -72 L16 -46 L-16 -46 Z"/>';
    s += '<path d="M-22 -46 L22 -46 L22 46 L-22 46 Z"/>';
    s += '<line x1="0" y1="-46" x2="0" y2="46"/>';
    s += '<line x1="-22" y1="0" x2="22" y2="0"/>';
    s += '<path d="M-16 46 L16 46 L0 76 Z"/></g>';
    s += '<circle cx="0" cy="0" r="13" fill="' + G + '"/>';
    return s;
  }

  function hangingLantern(x, topY, chainLen, scale, uid) {
    var cy = topY + chainLen + 97;
    return '<line x1="' + x + '" y1="' + topY + '" x2="' + x + '" y2="' + (topY + chainLen) +
      '" stroke="url(#foil-' + uid + ')" stroke-width="3"/>' +
      '<circle cx="' + x + '" cy="' + cy + '" r="' + Math.round(100 * scale) +
      '" fill="url(#foil-' + uid + ')" opacity="0.15"/>' +
      '<g transform="translate(' + x + ',' + cy + ') scale(' + scale + ')">' + lanternLocal(uid) + '</g>';
  }

  /* Mosque skyline band sitting on the bottom edge (yBase) of an
     816-wide canvas: buildings, domes, two minarets, lit windows. */
  function skylineSVG(yBase, silhouette, windowColor, seed) {
    var rand = lcg(seed);
    var s = '';
    var x = -6;
    var minarets = [120, 668];
    var mi = 0;
    while (x < 822) {
      if (mi < minarets.length && x + 60 > minarets[mi]) {
        var mx = minarets[mi];
        s += '<rect x="' + (mx - 7) + '" y="' + (yBase - 218) + '" width="14" height="218" fill="' + silhouette + '"/>';
        s += '<path d="M' + (mx - 13) + ' ' + (yBase - 218) + ' C' + (mx - 13) + ' ' + (yBase - 244) + ' ' +
          (mx - 5) + ' ' + (yBase - 248) + ' ' + mx + ' ' + (yBase - 266) + ' C' + (mx + 5) + ' ' +
          (yBase - 248) + ' ' + (mx + 13) + ' ' + (yBase - 244) + ' ' + (mx + 13) + ' ' + (yBase - 218) +
          ' Z" fill="' + silhouette + '"/>';
        s += '<rect x="' + (mx - 12) + '" y="' + (yBase - 178) + '" width="24" height="6" fill="' + silhouette + '"/>';
        s += '<rect x="' + (mx - 2.5) + '" y="' + (yBase - 205) + '" width="5" height="9" fill="' + windowColor + '"/>';
        mi++;
      }
      var bw = 44 + Math.floor(rand() * 62);
      var bh = 58 + Math.floor(rand() * 88);
      var top = yBase - bh;
      s += '<rect x="' + x + '" y="' + top + '" width="' + bw + '" height="' + bh + '" fill="' + silhouette + '"/>';
      if (rand() < 0.55) {
        var dcx = x + bw / 2, dr = Math.min(bw * 0.36, 30);
        s += '<path d="M' + (dcx - dr) + ' ' + top + ' C' + (dcx - dr) + ' ' + (top - dr * 1.05) + ' ' +
          (dcx - dr * 0.34) + ' ' + (top - dr * 1.15) + ' ' + dcx + ' ' + (top - dr * 1.62) + ' C' +
          (dcx + dr * 0.34) + ' ' + (top - dr * 1.15) + ' ' + (dcx + dr) + ' ' + (top - dr * 1.05) + ' ' +
          (dcx + dr) + ' ' + top + ' Z" fill="' + silhouette + '"/>';
        s += '<line x1="' + dcx + '" y1="' + (top - dr * 1.62) + '" x2="' + dcx + '" y2="' +
          (top - dr * 1.62 - 9) + '" stroke="' + silhouette + '" stroke-width="3"/>';
      }
      var cols = Math.max(1, Math.floor(bw / 17));
      var rows = Math.max(1, Math.floor(bh / 21));
      for (var cx2 = 0; cx2 < cols; cx2++) {
        for (var ry = 0; ry < rows; ry++) {
          if (rand() < 0.42) {
            s += '<rect x="' + (x + 7 + cx2 * 17) + '" y="' + (top + 9 + ry * 21) +
              '" width="5.5" height="8.5" fill="' + windowColor + '" opacity="0.9"/>';
          }
        }
      }
      x += bw + 3 + Math.floor(rand() * 8);
    }
    return s;
  }

  function sceneOpen() {
    return '<svg class="cover-scene-svg" viewBox="0 0 816 1056" preserveAspectRatio="xMidYMid slice" aria-hidden="true">';
  }

  function skyGradDef(uid, stops) {
    return '<defs><linearGradient id="sky-' + uid + '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1056">' +
      stops.map(function (st) { return '<stop offset="' + st[0] + '" stop-color="' + st[1] + '"/>'; }).join('') +
      '</linearGradient></defs>';
  }

  function sceneNightskySVG(uid, deco) {
    var s = sceneOpen();
    s += skyGradDef(uid, [[0, '#040818'], [0.55, '#0d1f4b'], [1, '#1d3468']]);
    /* gold foil is forced here: the navy palette's own deco is
       silver (right for the classic navy covers), but this hero
       scene is specified with a GOLD crescent */
    s += foilDefs(uid, '#ffd166', 816, 1056);
    s += '<rect x="0" y="0" width="816" height="1056" fill="url(#sky-' + uid + ')"/>';
    s += starFieldSVG(lcg(1234567), 110, 816, 700);
    s += '<path d="' + crescentD(262, 288, 168) + '" fill="url(#foil-' + uid + ')" opacity="0.14"/>';
    s += '<path d="' + crescentD(258, 292, 148) + '" fill="url(#foil-' + uid + ')"/>';
    s += '<polygon points="' + sparklePoints(452, 178, 26) + '" fill="url(#foil-' + uid + ')"/>';
    s += '<polygon points="' + sparklePoints(560, 300, 15) + '" fill="url(#foil-' + uid + ')" opacity="0.8"/>';
    s += skylineSVG(1056, '#03060f', '#ffd166', 777);
    return s + '</svg>';
  }

  /* Pointed (mihrab) arch outline, insettable. */
  function archPath(inset) {
    var x0 = 118 + inset, x1 = 698 - inset, apex = 96 + inset * 0.6, base = 992;
    return 'M' + x0 + ' ' + base + ' L' + x0 + ' 430 C' + x0 + ' 268 ' + (268 + inset) + ' 168 408 ' + apex +
      ' C' + (548 - inset) + ' 168 ' + x1 + ' 268 ' + x1 + ' 430 L' + x1 + ' ' + base;
  }

  function sceneArchSVG(uid, deco, skylineColor) {
    var s = sceneOpen();
    s += foilDefs(uid, deco, 816, 1056);
    s += starFieldSVG(lcg(99), 26, 816, 300, ['#e9c766', '#fff3c4']);
    s += '<path d="' + archPath(0) + '" fill="none" stroke="url(#foil-' + uid + ')" stroke-width="5"/>';
    s += '<path d="' + archPath(20) + '" fill="none" stroke="url(#foil-' + uid + ')" stroke-width="1.8" opacity="0.85"/>';
    s += hangingLantern(262, 205, 30, 0.78, uid);
    s += hangingLantern(408, 120, 92, 0.95, uid);
    s += hangingLantern(554, 205, 30, 0.78, uid);
    s += '<g transform="translate(150,320) scale(0.63)">' + skylineSVG(1056, skylineColor, '#ffd166', 4242) + '</g>';
    return s + '</svg>';
  }

  function sceneArabesqueSVG(uid, deco) {
    var s = sceneOpen();
    s += skyGradDef(uid, [[0, '#03222b'], [1, '#0a5c63']]);
    s += '<defs><pattern id="arab-' + uid + '" width="54" height="54" patternUnits="userSpaceOnUse">' +
      '<polygon points="' + star8Points(27, 27, 15, 15 * 0.62) + '" fill="none" stroke="#04313a" stroke-width="2.2"/>' +
      '<circle cx="0" cy="0" r="2.4" fill="#04313a"/><circle cx="54" cy="0" r="2.4" fill="#04313a"/>' +
      '<circle cx="0" cy="54" r="2.4" fill="#04313a"/><circle cx="54" cy="54" r="2.4" fill="#04313a"/></pattern></defs>';
    s += foilDefs(uid, deco, 816, 1056);
    s += '<rect x="0" y="0" width="816" height="1056" fill="url(#sky-' + uid + ')"/>';
    s += starFieldSVG(lcg(31337), 40, 816, 420);
    s += '<path d="' + crescentD(348, 612, 318) + '" fill="url(#foil-' + uid + ')"/>';
    s += '<path d="' + crescentD(348, 612, 318) + '" fill="url(#arab-' + uid + ')" opacity="0.55"/>';
    /* festive swag across the top-right corner — kept flat and
       high (sparkles only, no hanging lantern shapes) so it never
       touches the title text below it (render-verified) */
    s += '<path d="M452 22 Q640 80 812 30" fill="none" stroke="url(#foil-' + uid + ')" stroke-width="2.5"/>';
    [[520, 46, 10], [600, 60, 13], [680, 58, 10], [752, 42, 12]].forEach(function (p) {
      s += '<polygon points="' + sparklePoints(p[0], p[1], p[2]) + '" fill="url(#foil-' + uid + ')"/>';
    });
    return s + '</svg>';
  }

  function sceneCalligraphySVG(uid) {
    var s = sceneOpen();
    s += skyGradDef(uid, [[0, '#040818'], [0.6, '#0a1735'], [1, '#16295c']]);
    s += foilDefs(uid, '#ffd166', 816, 1056);
    s += '<rect x="0" y="0" width="816" height="1056" fill="url(#sky-' + uid + ')"/>';
    s += starFieldSVG(lcg(2024), 46, 816, 1056);
    s += '<path d="' + crescentD(408, 148, 44) + '" fill="url(#foil-' + uid + ')"/>';
    s += '<polygon points="' + sparklePoints(480, 106, 14) + '" fill="url(#foil-' + uid + ')"/>';
    return s + '</svg>';
  }

  /* Concentric eight-point-star medallion (corner ornament). */
  function mandalaGroup(cx, cy, R, uid) {
    var G = 'url(#foil-' + uid + ')';
    var s = '<g fill="none" stroke="' + G + '">';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" stroke-width="2.5"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (R * 0.86) + '" stroke-width="1.2" opacity="0.8"/>';
    s += '<polygon points="' + star8Points(cx, cy, R * 0.8, R * 0.8 * 0.62) + '" stroke-width="2"/>';
    s += '<polygon points="' + star8Points(cx, cy, R * 0.58, R * 0.58 * 0.62) + '" fill="' + G + '" stroke="none" opacity="0.92"/>';
    s += '<polygon points="' + star8Points(cx, cy, R * 0.38, R * 0.38 * 0.62) + '" stroke-width="2.2"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (R * 0.13) + '" fill="' + G + '" stroke="none"/>';
    for (var i = 0; i < 16; i++) {
      var a = i * Math.PI / 8;
      s += '<circle cx="' + (cx + R * 0.93 * Math.cos(a)).toFixed(1) + '" cy="' +
        (cy + R * 0.93 * Math.sin(a)).toFixed(1) + '" r="' + (R * 0.022).toFixed(1) +
        '" fill="' + G + '" stroke="none"/>';
    }
    return s + '</g>';
  }

  function sceneMandalaSVG(uid, deco) {
    var s = sceneOpen();
    s += '<defs><linearGradient id="sky-' + uid + '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="816" y2="1056">' +
      '<stop offset="0" stop-color="#101012"/><stop offset="1" stop-color="#2e2e33"/></linearGradient></defs>';
    s += foilDefs(uid, deco, 816, 1056);
    s += '<rect x="0" y="0" width="816" height="1056" fill="url(#sky-' + uid + ')"/>';
    s += starFieldSVG(lcg(555), 30, 816, 1056, ['#f5c542', '#fff3c4']);
    s += mandalaGroup(816, 0, 330, uid);
    s += mandalaGroup(0, 1056, 300, uid);
    return s + '</svg>';
  }

  function scenePastelSkylineSVG(uid, deco) {
    var s = sceneOpen();
    s += skyGradDef(uid, [[0, '#fff8f1'], [0.55, '#fdeadd'], [1, '#f8d8cc']]);
    s += foilDefs(uid, deco, 816, 1056);
    s += '<rect x="0" y="0" width="816" height="1056" fill="url(#sky-' + uid + ')"/>';
    s += starFieldSVG(lcg(8080), 34, 816, 620, ['#d99a5c', '#e9b949', '#c98a6a']);
    s += '<path d="' + crescentD(250, 280, 150) + '" fill="url(#foil-' + uid + ')" opacity="0.16"/>';
    s += '<path d="' + crescentD(246, 284, 132) + '" fill="url(#foil-' + uid + ')"/>';
    s += '<polygon points="' + sparklePoints(432, 172, 22) + '" fill="url(#foil-' + uid + ')"/>';
    s += skylineSVG(1056, '#57293e', '#ffd166', 2027);
    return s + '</svg>';
  }

  function coverSceneSVG(design, deco) {
    var uid = design.id;
    switch (design.scene) {
      case 'nightsky': return sceneNightskySVG(uid, deco);
      case 'arch': return sceneArchSVG(uid, deco, design.id === 'scene-arch-ivory' ? '#7a5a34' : '#052e22');
      case 'arabesque': return sceneArabesqueSVG(uid, deco);
      case 'calligraphy': return sceneCalligraphySVG(uid);
      case 'mandala': return sceneMandalaSVG(uid, deco);
      case 'pastelskyline': return scenePastelSkylineSVG(uid, deco);
      case 'pastelarch': return sceneArchSVG(uid, deco, '#6b4a5a');
    }
    return '';
  }

  /* Kids' divider artwork: a big friendly crescent + chunky stars
     in bright colours (objects only, no faces). */
  function kidsDecoSVG() {
    var s = '<svg class="deco-svg ornament-kids" viewBox="0 0 400 300" aria-hidden="true">';
    s += '<path d="' + crescentD(148, 152, 108) + '" fill="#ffb703"/>';
    s += '<polygon points="' + starPoints(272, 104, 52, 52 * 0.48) + '" fill="#fb8500"/>';
    s += '<polygon points="' + starPoints(318, 218, 27, 27 * 0.48) + '" fill="#2a9d8f"/>';
    s += '<polygon points="' + starPoints(84, 52, 18, 18 * 0.48) + '" fill="#ef476f"/>';
    s += '<circle cx="330" cy="52" r="9" fill="#2a9d8f"/>';
    s += '<circle cx="66" cy="238" r="11" fill="#fb8500"/>';
    s += '<circle cx="352" cy="150" r="7" fill="#ef476f"/>';
    s += '<circle cx="120" cy="262" r="6" fill="#2a9d8f"/>';
    return s + '</svg>';
  }

  var SW = 'stroke="#14232b" stroke-width="7" fill="#ffffff" stroke-linejoin="round" stroke-linecap="round"';
  var SWN = 'stroke="#14232b" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"';

  var COLORING = {
    mosque: function () {
      var s = '<g ' + SWN + '>';
      s += '<line x1="40" y1="540" x2="560" y2="540"/>';
      /* main building */
      s += '<rect x="170" y="330" width="260" height="210"/>';
      /* dome */
      s += '<path d="M205 330 C205 250 255 235 300 175 C345 235 395 250 395 330 Z"/>';
      s += '<line x1="300" y1="175" x2="300" y2="140"/>';
      s += '<path d="' + crescentD(300, 122, 20) + '"/>';
      /* minarets */
      s += '<rect x="105" y="270" width="42" height="270"/>';
      s += '<rect x="453" y="270" width="42" height="270"/>';
      s += '<path d="M92 270 C92 225 112 218 126 190 C140 218 160 225 160 270 Z"/>';
      s += '<path d="M440 270 C440 225 460 218 474 190 C488 218 508 225 508 270 Z"/>';
      s += '<rect x="95" y="330" width="62" height="18"/>';
      s += '<rect x="443" y="330" width="62" height="18"/>';
      /* door + windows (arches) */
      s += '<path d="M268 540 L268 445 C268 415 332 415 332 445 L332 540 Z"/>';
      s += '<path d="M205 470 L205 420 C205 398 237 398 237 420 L237 470 Z"/>';
      s += '<path d="M363 470 L363 420 C363 398 395 398 395 420 L395 470 Z"/>';
      s += '</g>';
      s += starSVG(90, 90, 26, SW);
      s += starSVG(505, 80, 20, SW);
      return s;
    },
    crescent: function () {
      var s = '<path d="' + crescentD(265, 300, 205) + '" ' + SW + '/>';
      s += starSVG(415, 215, 62, SW);
      s += starSVG(140, 105, 22, SW);
      s += starSVG(480, 420, 26, SW);
      s += starSVG(120, 470, 18, SW);
      s += '<circle cx="455" cy="110" r="9" ' + SW + '/>';
      s += '<circle cx="95" cy="300" r="7" ' + SW + '/>';
      return s;
    },
    lantern: function () {
      var s = '<g ' + SWN + '>';
      s += '<line x1="300" y1="30" x2="300" y2="78"/>';
      s += '<circle cx="300" cy="96" r="17"/>';
      s += '<path d="M238 122 L362 122 L330 168 L270 168 Z"/>';
      s += '<rect x="252" y="168" width="96" height="24"/>';
      s += '<path d="M258 192 L342 192 L342 428 L258 428 Z"/>';
      s += '<line x1="300" y1="192" x2="300" y2="428"/>';
      s += '<line x1="258" y1="262" x2="342" y2="262"/>';
      s += '<line x1="258" y1="356" x2="342" y2="356"/>';
      s += '<rect x="252" y="428" width="96" height="24"/>';
      s += '<path d="M270 452 L330 452 L300 512 Z"/>';
      s += '<circle cx="300" cy="310" r="30"/>';
      s += '</g>';
      s += starSVG(120, 180, 26, SW);
      s += starSVG(478, 150, 20, SW);
      s += starSVG(478, 430, 26, SW);
      s += starSVG(118, 452, 18, SW);
      return s;
    },
    dates: function () {
      var s = '<g ' + SWN + '>';
      /* bowl */
      s += '<path d="M120 380 C120 470 200 525 300 525 C400 525 480 470 480 380 Z"/>';
      s += '<line x1="95" y1="380" x2="505" y2="380"/>';
      s += '<line x1="225" y1="548" x2="375" y2="548"/>';
      s += '<line x1="255" y1="525" x2="255" y2="548"/>';
      s += '<line x1="345" y1="525" x2="345" y2="548"/>';
      /* dates piled in the bowl */
      var dates = [[215, 330], [275, 312], [335, 312], [395, 330], [245, 268], [305, 252], [365, 268], [305, 330]];
      dates.forEach(function (d) {
        s += '<ellipse cx="' + d[0] + '" cy="' + d[1] + '" rx="30" ry="42"/>';
      });
      /* stems + leaf */
      s += '<path d="M305 215 C300 185 285 165 258 150"/>';
      s += '<path d="M258 150 C235 175 232 205 245 228 C268 205 272 178 258 150 Z"/>';
      s += '<path d="M305 215 C315 182 338 160 368 148 C372 180 358 208 332 224 C322 200 315 215 305 215 Z"/>';
      s += '</g>';
      s += starSVG(105, 110, 22, SW);
      s += starSVG(500, 120, 26, SW);
      return s;
    },
    mat: function () {
      var s = '<g ' + SWN + '>';
      s += '<rect x="150" y="70" width="300" height="470"/>';
      s += '<rect x="172" y="92" width="256" height="426"/>';
      /* mihrab arch */
      s += '<path d="M225 300 L225 215 C225 155 375 155 375 215 L375 300"/>';
      s += '<path d="' + crescentD(300, 235, 34) + '"/>';
      /* lower pattern band */
      s += '<line x1="172" y1="360" x2="428" y2="360"/>';
      s += '<line x1="172" y1="440" x2="428" y2="440"/>';
      s += '<rect x="262" y="382" width="76" height="36"/>';
      /* fringe */
      for (var x = 165; x <= 435; x += 27) {
        s += '<line x1="' + x + '" y1="540" x2="' + x + '" y2="572"/>';
        s += '<line x1="' + x + '" y1="70" x2="' + x + '" y2="42"/>';
      }
      s += '</g>';
      s += starSVG(300, 478, 20, SW);
      return s;
    },
    quran: function () {
      var s = '<g ' + SWN + '>';
      /* rehal stand: two crossed planks */
      s += '<path d="M205 330 L395 540 L350 540 L160 330 Z"/>';
      s += '<path d="M395 330 L205 540 L250 540 L440 330 Z"/>';
      s += '<line x1="215" y1="428" x2="385" y2="428"/>';
      /* open book resting on top */
      s += '<path d="M300 205 C255 175 195 168 140 182 L140 330 C195 316 255 323 300 353 C345 323 405 316 460 330 L460 182 C405 168 345 175 300 205 Z"/>';
      s += '<line x1="300" y1="205" x2="300" y2="353"/>';
      /* text lines on the pages */
      s += '<path d="M168 222 C205 210 248 214 278 232"/>';
      s += '<path d="M168 258 C205 246 248 250 278 268"/>';
      s += '<path d="M168 294 C205 282 248 286 278 304"/>';
      s += '<path d="M322 232 C352 214 395 210 432 222"/>';
      s += '<path d="M322 268 C352 250 395 246 432 258"/>';
      s += '<path d="M322 304 C352 286 395 282 432 294"/>';
      /* bookmark ribbon */
      s += '<path d="M408 330 L408 398 L424 378 L440 398 L440 322"/>';
      s += '</g>';
      s += '<path d="' + crescentD(300, 92, 30) + '" ' + SW + '/>';
      s += starSVG(110, 120, 20, SW);
      s += starSVG(492, 110, 24, SW);
      return s;
    }
  };

  function coloringSVG(id) {
    var inner = COLORING[id] ? COLORING[id]() : '';
    return '<svg class="coloring-svg" viewBox="0 0 600 600">' + inner + '</svg>';
  }

  /* ---------- page bodies ---------- */

  /* The buyer's name in a ruled "belongs to" band (retail-planner
     style): label, then the name — or a writing line when the
     name is blank — between two fine rules (styles.css). */
  function coverNameBand(ctx) {
    var h = '<div class="cover-name"><span class="cover-name-label">' + L(ctx, 'belongsTo') + '</span>';
    h += ctx.name
      ? '<span class="cover-name-value">' + esc(ctx.name) + '</span>'
      : '<span class="wline cover-name-line"></span>';
    return h + '</div>';
  }

  function sceneCoverBody(design, ctx) {
    var deco = RP.COVER_PALETTES[design.palette].deco;
    var h = '<div class="cover-scene">' + coverSceneSVG(design, deco) + '</div>';
    if (design.scene === 'calligraphy') h += '<div class="cover-frame"></div>';
    h += '<div class="cover-inner scene-inner scene-inner-' + design.scene + '">';
    if (design.scene === 'calligraphy') {
      h += '<div class="calligraphy-word" dir="rtl" lang="ar">رمضان</div>';
    }
    if (design.scene === 'mandala') {
      h += '<svg class="scene-crescent" viewBox="0 0 100 100" aria-hidden="true"><path d="' +
        crescentD(50, 50, 34) + '" fill="#d9a62e"/><polygon points="' +
        sparklePoints(76, 30, 10) + '" fill="#d9a62e"/></svg>';
    }
    h += '<h1 class="cover-title-main">' + L(ctx, 'coverTitle') + '</h1>';
    h += '<p class="cover-year">' + L(ctx, 'coverYear') + '</p>';
    h += coverNameBand(ctx);
    h += '<p class="cover-brand">' + L(ctx, 'brand') + '</p>';
    return h + '</div>';
  }

  function coverBody(page, ctx) {
    /* decorative overlays first (pattern + double-line frame) —
       CSS positions them absolutely inside the sheet and lifts
       .cover-inner above them; neither affects content flow.
       The artwork is drawn in the chosen palette's deco colour. */
    var design = ctx.coverDesign || RP.coverDesign(RP.DEFAULT_COVER_DESIGN);
    if (design.scene) return sceneCoverBody(design, ctx);
    var deco = RP.COVER_PALETTES[design.palette].deco;
    var h = '<div class="cover-pattern">' + coverPatternSVG(deco) + '</div>';
    h += '<div class="cover-frame"></div>';
    h += '<div class="cover-inner">';
    h += foilOrnamentSVG(design.ornament, deco, design.id);
    h += '<h1 class="cover-title-main">' + L(ctx, 'coverTitle') + '</h1>';
    h += '<p class="cover-year">' + L(ctx, 'coverYear') + '</p>';
    h += coverNameBand(ctx);
    h += '<p class="cover-brand">' + L(ctx, 'brand') + '</p>';
    return h + '</div>';
  }

  function overviewBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'overviewTitle'));
    h += '<div class="ov-grid">';
    for (var d = 1; d <= 30; d++) {
      var date = RP.dateForDay(page.startDate, d);
      h += '<div class="ov-card"><div class="ov-day">' + L(ctx, 'dayOfRamadan', { n: N(ctx, d) }) + '</div>' +
        '<div class="ov-date">' + esc(RP.formatDateShort(date, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals)) + '</div>' +
        '<div class="ov-checks">' +
        '<span class="ov-check">' + cb('sm') + L(ctx, 'fasted') + '</span>' +
        '<span class="ov-check">' + cb('sm') + L(ctx, 'prayers') + '</span>' +
        '<span class="ov-check">' + cb('sm') + L(ctx, 'quran') + '</span>' +
        '</div></div>';
    }
    return h + '</div>';
  }

  function duaBlock(ctx, dua, titleKey) {
    var h = '<section class="blk dua-blk">' + blkTitle(ctx, titleKey || 'duaOfDay');
    h += '<p class="dua-ar" dir="rtl" lang="ar">' + esc(dua.ar) + '</p>';
    if (ctx.lang !== 'ar') h += '<p class="dua-en" dir="ltr">' + esc(dua.en) + '</p>';
    h += '<p class="dua-src">' + esc(dua.src) + '</p></section>';
    return h;
  }

  var PRAYERS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'taraweeh'];

  function dailyBody(page, ctx) {
    var h = '<div class="pg-head daily-head"><h2 class="pg-title">' +
      L(ctx, 'dayOfRamadan', { n: N(ctx, page.day) }) + '</h2>' +
      '<div class="pg-sub">' + esc(RP.formatDate(page.date, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals)) + '</div></div>';

    h += '<div class="times-row">' +
      '<div class="field"><span class="flabel">' + L(ctx, 'suhoorEnds') + '</span>' + wline() + '</div>' +
      '<div class="field"><span class="flabel">' + L(ctx, 'iftarTime') + '</span>' + wline() + '</div></div>';

    h += '<section class="blk">' + blkTitle(ctx, 'prayerTracker') + '<div class="prayer-grid">';
    PRAYERS.forEach(function (p) {
      h += '<span class="pchip">' + cb() + L(ctx, p) + '</span>';
    });
    h += '</div></section>';

    h += '<div class="row2">' +
      '<section class="blk half">' + blkTitle(ctx, 'quranGoal') +
      '<div class="field"><span class="flabel">' + L(ctx, 'quranTarget') + '</span>' + wline() + '</div>' +
      '<div class="field"><span class="flabel">' + L(ctx, 'quranDone') + '</span>' + wline() + '</div></section>' +
      '<section class="blk half">' + blkTitle(ctx, 'water') +
      '<div class="water-row">';
    for (var g = 0; g < 8; g++) h += '<span class="glass"></span>';
    h += '</div><div class="water-cap">' + N(ctx, 8) + ' ' + L(ctx, 'glasses') + '</div></section></div>';

    h += duaBlock(ctx, page.dua);

    h += '<section class="blk">' + blkTitle(ctx, 'todo');
    for (var t = 0; t < 4; t++) h += '<div class="todo-line">' + cb('sm') + wline() + '</div>';
    h += '</section>';

    h += '<section class="blk">' + blkTitle(ctx, 'mealPlan');
    ['suhoor', 'iftar', 'snacks'].forEach(function (m) {
      h += '<div class="field meal-field"><span class="flabel">' + L(ctx, m) + '</span>' + wline() + '</div>';
    });
    h += '</section>';

    h += '<div class="field deed-field"><span class="flabel">' + L(ctx, 'goodDeedToday') + '</span>' + wline() + '</div>';
    h += '<div class="field"><span class="flabel">' + L(ctx, 'gratitude') + '</span>' + wline() + '</div>';

    h += '<section class="blk">' + blkTitle(ctx, 'notes') + ruled() + ruled() + '</section>';
    return h;
  }

  function weeklyBody(page, ctx) {
    var from = RP.dateForDay(page.startDate, page.fromDay);
    var to = RP.dateForDay(page.startDate, page.toDay);
    var sub = L(ctx, 'weekDays', { a: N(ctx, page.fromDay), b: N(ctx, page.toDay) }) + ' · ' +
      esc(RP.formatDateShort(from, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals)) + ' – ' +
      esc(RP.formatDateShort(to, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals));
    var h = pageHead(ctx, L(ctx, 'week', { n: N(ctx, page.week) }), sub);
    h += '<div class="week-rows">';
    for (var d = page.fromDay; d <= page.toDay; d++) {
      var date = RP.dateForDay(page.startDate, d);
      h += '<div class="week-row"><span class="week-day">' +
        L(ctx, 'dayOfRamadan', { n: N(ctx, d) }) + '<span class="week-date">' +
        esc(RP.formatDateShort(date, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals)) + '</span></span>' +
        '<span class="week-focus"><span class="flabel">' + L(ctx, 'focusLine') + '</span>' + wline() + '</span>' +
        '<span class="week-checks">' + cb('sm') + cb('sm') + cb('sm') + '</span></div>';
    }
    h += '</div>';
    h += '<section class="blk">' + blkTitle(ctx, 'weekGoals') + ruled() + ruled() + ruled() + '</section>';
    h += '<div class="field"><span class="flabel">' + L(ctx, 'gratitude') + '</span>' + wline() + '</div>';
    return h;
  }

  function khatmaBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'khatmaTitle'));
    h += '<p class="intro-line">' + L(ctx, 'khatmaIntro') + '</p>';
    h += '<div class="juz-grid">';
    for (var j = 1; j <= 30; j++) {
      h += '<span class="juz-chip">' + cb('sm') + L(ctx, 'juz') + ' ' + N(ctx, j) + '</span>';
    }
    h += '</div>';
    h += '<section class="blk">' + blkTitle(ctx, 'readingPlan') + '<div class="plan-cols">';
    [0, 15].forEach(function (base) {
      h += '<table class="plan-table"><thead><tr><th>' + L(ctx, 'day') + '</th><th>' +
        L(ctx, 'juz') + '</th><th>' + L(ctx, 'done') + '</th></tr></thead><tbody>';
      for (var d = base + 1; d <= base + 15; d++) {
        h += '<tr><td>' + N(ctx, d) + '</td><td>' + N(ctx, d) + '</td><td>' + cb('sm') + '</td></tr>';
      }
      h += '</tbody></table>';
    });
    /* The moon-sighting note moved here from the cover (cover
       upgrade 2026-11-17): the cover is artwork now; the note
       keeps its dashed styling on this early page instead. (The
       Overview — page 2 — is measurably full: its 30-card grid
       models within ~58px of the sheet, so the note cannot live
       there without spilling the grid onto a second sheet.) */
    return h + '</div></section>' +
      '<div class="moon-note book-note">' + LStack(ctx, 'moonNote') + '</div>';
  }

  function lastTenBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'lastTenTitle'));
    h += '<p class="intro-line">' + L(ctx, 'lastTenIntro') + '</p>';
    h += duaBlock(ctx, DATA.QADR_DUA, 'qadrDuaTitle');
    h += '<table class="nights-table"><thead><tr><th class="act-col"></th>';
    for (var n = 21; n <= 30; n++) h += '<th>' + N(ctx, n) + '</th>';
    h += '</tr></thead><tbody>';
    DATA.LAST_TEN_ACTS.forEach(function (act) {
      h += '<tr><td class="act-name">' +
        (ctx.lang === 'en' ? esc(act.en) : ctx.lang === 'ar' ? esc(act.ar)
          : '<span class="l-ar">' + esc(act.ar) + '</span> <span class="l-en">' + esc(act.en) + '</span>') + '</td>';
      for (var c = 21; c <= 30; c++) h += '<td class="night-cell">' + cb('sm') + '</td>';
      h += '</tr>';
    });
    h += '</tbody></table>';
    h += '<section class="blk">' + blkTitle(ctx, 'extraWorship') + ruled() + ruled() + '</section>';
    return h;
  }

  function deedsBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'deedsTitle'));
    h += '<p class="intro-line">' + L(ctx, 'deedsIntro') + '</p>';
    h += '<table class="deeds-table"><thead><tr><th class="deed-col"></th>';
    for (var d = 1; d <= 30; d++) h += '<th class="deed-day">' + N(ctx, d) + '</th>';
    h += '</tr></thead><tbody>';
    DATA.DEEDS.forEach(function (deed) {
      h += '<tr><td class="deed-name">' +
        (ctx.lang === 'en' ? esc(deed.en) : ctx.lang === 'ar' ? esc(deed.ar)
          : '<span class="l-ar">' + esc(deed.ar) + '</span> <span class="l-en">' + esc(deed.en) + '</span>') + '</td>';
      for (var c = 1; c <= 30; c++) h += '<td class="deed-cell"></td>';
      h += '</tr>';
    });
    return h + '</tbody></table>';
  }

  function mealsBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'mealsTitle'));
    h += '<table class="meals-table"><thead><tr><th class="m-day">' + L(ctx, 'day') + '</th><th>' +
      L(ctx, 'suhoor') + '</th><th>' + L(ctx, 'iftar') + '</th></tr></thead><tbody>';
    for (var d = 1; d <= 30; d++) {
      var date = RP.dateForDay(page.startDate, d);
      h += '<tr><td class="m-day"' + (ctx.lang === 'ar' ? '' : ' style="direction:ltr;unicode-bidi:isolate;text-align:left"') + '>' + N(ctx, d) + '<span class="m-date">' +
        esc(RP.formatDateShort(date, ctx.lang === 'ar' ? 'ar' : 'en', ctx.numerals)) +
        '</span></td><td></td><td></td></tr>';
    }
    return h + '</tbody></table>';
  }

  function shoppingBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'shoppingTitle'));
    ['shopDates', 'shopSuhoor', 'shopIftar'].forEach(function (k) {
      h += '<section class="blk">' + blkTitle(ctx, k);
      for (var i = 0; i < 5; i++) h += '<div class="todo-line">' + cb('sm') + wline() + '</div>';
      h += '</section>';
    });
    h += '<section class="blk">' + blkTitle(ctx, 'shopOther');
    for (var j = 0; j < 4; j++) h += '<div class="todo-line">' + cb('sm') + wline() + '</div>';
    return h + '</section>';
  }

  function eidPrepBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'eidPrepTitle'));
    h += '<div class="eid-grid">';
    DATA.EID_PREP.forEach(function (item) {
      h += '<div class="eid-item">' + cb() +
        (ctx.lang === 'en' ? esc(item.en) : ctx.lang === 'ar' ? esc(item.ar)
          : '<span class="l-ar">' + esc(item.ar) + '</span> <span class="l-en">' + esc(item.en) + '</span>') + '</div>';
    });
    h += '</div>';
    h += '<section class="blk">' + blkTitle(ctx, 'notes') + ruled() + ruled() + ruled() + '</section>';
    return h;
  }

  function eidDayBody(page, ctx) {
    var h = '<div class="eid-head">' + decoSVG() +
      '<h2 class="pg-title eid-title">' + L(ctx, 'eidMubarak') + '</h2></div>';
    h += '<table class="eid-table"><thead><tr><th class="e-time">' + L(ctx, 'timeCol') + '</th><th>' +
      L(ctx, 'planCol') + '</th></tr></thead><tbody>';
    for (var r = 0; r < 8; r++) h += '<tr><td class="e-time"></td><td></td></tr>';
    h += '</tbody></table>';
    h += '<section class="blk">' + blkTitle(ctx, 'eidGratitude');
    for (var i = 1; i <= 3; i++) {
      h += '<div class="field"><span class="flabel">' + N(ctx, i) + '.</span>' + wline() + '</div>';
    }
    return h + '</section>';
  }

  function kidsDividerBody(page, ctx) {
    return '<div class="cover-inner">' + kidsDecoSVG() +
      '<h1 class="kids-title">' + LStack(ctx, 'kidsDivider') + '</h1>' +
      '<p class="cover-sub">' + LStack(ctx, 'kidsDividerSub') + '</p>' +
      '<p class="cover-brand">' + LStack(ctx, 'brand') + '</p></div>';
  }

  function kidsChartBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'kidsChartTitle'));
    h += '<p class="intro-line">' + L(ctx, 'kidsChartIntro') + '</p>';
    h += '<table class="kids-table"><thead><tr><th class="k-day">' + L(ctx, 'day') + '</th><th>' +
      L(ctx, 'fasting') + '</th><th>' + L(ctx, 'prayers') + '</th><th>' +
      L(ctx, 'goodDeedToday') + '</th><th>' + L(ctx, 'quran') + '</th></tr></thead><tbody>';
    for (var d = 1; d <= 30; d++) {
      h += '<tr><td class="k-day">' + N(ctx, d) + '</td>' +
        '<td class="star-cell">☆</td><td class="star-cell">☆</td>' +
        '<td class="star-cell">☆</td><td class="star-cell">☆</td></tr>';
    }
    return h + '</tbody></table>';
  }

  function kidsCardsBody(page, ctx) {
    var h = pageHead(ctx, L(ctx, 'kidsCardsTitle'));
    if (page.chunk === 0) h += '<p class="intro-line">' + L(ctx, 'kidsCardsIntro') + '</p>';
    h += '<div class="cards-grid">';
    page.deeds.forEach(function (deed, i) {
      var day = page.firstDay + i;
      h += '<div class="deed-card"><div class="card-head"><span class="card-day">' +
        L(ctx, 'cardDay', { n: N(ctx, day) }) + '</span><span class="card-star">☆</span></div>' +
        '<p class="card-text">' +
        (ctx.lang === 'en' ? esc(deed.en) : ctx.lang === 'ar' ? esc(deed.ar)
          : '<span class="card-ar" dir="rtl">' + esc(deed.ar) + '</span><span class="card-en">' + esc(deed.en) + '</span>') +
        '</p></div>';
    });
    return h + '</div>';
  }

  function coloringBody(page, ctx) {
    var name = DATA.COLORING_NAMES[page.designId] || { en: '', ar: '' };
    var h = '<div class="pg-head"><h2 class="pg-title coloring-name">' +
      (ctx.lang === 'en' ? esc(name.en) : ctx.lang === 'ar' ? esc(name.ar)
        : '<span class="l-ar">' + esc(name.ar) + '</span> <span class="l-en">' + esc(name.en) + '</span>') +
      '</h2><div class="pg-sub">' + L(ctx, 'coloringTitle') + '</div></div>';
    h += coloringSVG(page.designId);
    h += '<div class="field coloring-field"><span class="flabel">' +
      (ctx.lang === 'en' ? 'Name' : ctx.lang === 'ar' ? 'الاسم'
        : '<span class="l-ar">الاسم</span> <span class="l-en">Name</span>') +
      '</span>' + wline() + '</div>';
    return h;
  }

  function certificateBody(page, ctx) {
    var h = '<div class="cert-inner">';
    h += decoSVG();
    h += '<h1 class="cover-title">' + LStack(ctx, 'certTitle') + '</h1>';
    h += '<p class="cert-presented">' + LStack(ctx, 'certPresented') + '</p>';
    h += ctx.name
      ? '<p class="cert-name">' + esc(ctx.name) + '</p>'
      : '<div class="cert-name-line"></div>';
    h += '<p class="cert-for">' + LStack(ctx, 'certFor') + '</p>';
    h += '<p class="cert-welldone">' + LStack(ctx, 'certWellDone') + '</p>';
    h += '<p class="cover-brand">' + LStack(ctx, 'brand') + '</p>';
    return h + '</div>';
  }

  var BODIES = {
    cover: coverBody, overview: overviewBody, daily: dailyBody,
    weekly: weeklyBody, khatma: khatmaBody, lastten: lastTenBody,
    deeds: deedsBody, meals: mealsBody, shopping: shoppingBody,
    eidprep: eidPrepBody, eidday: eidDayBody,
    kidsdivider: kidsDividerBody, kidschart: kidsChartBody,
    kidscards: kidsCardsBody, coloring: coloringBody,
    certificate: certificateBody
  };

  function pageBodyHTML(page, ctx) {
    var fn = BODIES[page.type];
    return fn ? fn(page, ctx) : '';
  }

  function pageHTML(page, ctx) {
    return pageBodyHTML(page, ctx);
  }

  var api = {
    esc: esc, mkCtx: mkCtx, N: N, L: L, S: S,
    pageBodyHTML: pageBodyHTML, pageHTML: pageHTML,
    coloringSVG: coloringSVG, decoSVG: decoSVG,
    foilOrnamentSVG: foilOrnamentSVG, coverSceneSVG: coverSceneSVG,
    kidsDecoSVG: kidsDecoSVG, sparklePoints: sparklePoints,
    coverPatternSVG: coverPatternSVG,
    crescentD: crescentD, starPoints: starPoints, star8Points: star8Points,
    PRAYERS: PRAYERS
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.Render = api;
})(typeof window !== 'undefined' ? window : globalThis);
