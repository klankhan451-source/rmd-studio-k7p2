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
    return {
      lang: spec.lang, numerals: spec.numerals, name: spec.name || '',
      dir: spec.lang === 'en' ? 'ltr' : 'rtl'
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
    return '<span class="l-ar">' + esc(ar) + '</span> <span class="l-en">' + esc(en) + '</span>';
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

  /* Small decorative crescent + lantern for cover / dividers. */
  function decoSVG() {
    var s = '<svg class="deco-svg" viewBox="0 0 400 300" aria-hidden="true">';
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

  function coverBody(page, ctx) {
    var h = '<div class="cover-inner">';
    h += decoSVG();
    h += '<h1 class="cover-title">' + L(ctx, 'coverTitle') + '</h1>';
    h += '<p class="cover-year">' + L(ctx, 'coverYear') + '</p>';
    h += '<div class="cover-name"><span class="cover-name-label">' + L(ctx, 'belongsTo') + '</span>';
    h += ctx.name
      ? '<span class="cover-name-value">' + esc(ctx.name) + '</span>'
      : '<span class="wline cover-name-line"></span>';
    h += '</div>';
    h += '<div class="moon-note">' + L(ctx, 'moonNote') + '</div>';
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
    if (ctx.lang !== 'ar') h += '<p class="dua-en">' + esc(dua.en) + '</p>';
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
    return h + '</div></section>';
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
    return '<div class="cover-inner">' + decoSVG() +
      '<h1 class="cover-title">' + L(ctx, 'kidsDivider') + '</h1>' +
      '<p class="cover-sub">' + L(ctx, 'kidsDividerSub') + '</p>' +
      '<p class="cover-brand">' + L(ctx, 'brand') + '</p></div>';
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
    h += '<h1 class="cover-title">' + L(ctx, 'certTitle') + '</h1>';
    h += '<p class="cert-presented">' + L(ctx, 'certPresented') + '</p>';
    h += ctx.name
      ? '<p class="cert-name">' + esc(ctx.name) + '</p>'
      : '<div class="cert-name-line"></div>';
    h += '<p class="cert-for">' + L(ctx, 'certFor') + '</p>';
    h += '<p class="cert-welldone">' + L(ctx, 'certWellDone') + '</p>';
    h += '<p class="cover-brand">' + L(ctx, 'brand') + '</p>';
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
    crescentD: crescentD, starPoints: starPoints,
    PRAYERS: PRAYERS
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.Render = api;
})(typeof window !== 'undefined' ? window : globalThis);
