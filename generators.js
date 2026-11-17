/*
 * Songlap Ramadan Planner Generator — pure logic.
 * Numeral conversion, Gregorian date sequencing from the chosen
 * Ramadan start date, and assembly of the planner's page list.
 * No DOM here: render.js turns page objects into HTML, book.js
 * places them on fixed-size sheets.
 */
(function (global) {
  'use strict';

  var DATA = (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
    ? require('./data.js')
    : global.RPDATA;

  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /* ---------- Numerals ---------- */

  var EASTERN = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  /* Convert every Western digit in a value to Eastern Arabic-Indic.
     Non-digit characters pass through unchanged. */
  function toEasternArabic(value) {
    return String(value).replace(/[0-9]/g, function (d) { return EASTERN[+d]; });
  }

  /* Format a number (or a string containing numbers) in the chosen
     numeral system: 'east' -> ٠١٢٣, anything else -> Western. */
  function num(value, numerals) {
    return numerals === 'east' ? toEasternArabic(value) : String(value);
  }

  /* ---------- Dates (pure Gregorian arithmetic, no Date/TZ traps) ---------- */

  function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }

  function daysInMonth(y, m) { return m === 2 && isLeap(y) ? 29 : DAYS_IN_MONTH[m - 1]; }

  /* Parse 'YYYY-MM-DD' -> {y, m, d} or null. */
  function parseISODate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3];
    if (mo < 1 || mo > 12 || d < 1 || d > daysInMonth(y, mo)) return null;
    return { y: y, m: mo, d: d };
  }

  /* The date n days after the given date (n may be 0). */
  function addDays(date, n) {
    var y = date.y, m = date.m, d = date.d + n;
    while (d > daysInMonth(y, m)) {
      d -= daysInMonth(y, m);
      m++;
      if (m > 12) { m = 1; y++; }
    }
    while (d < 1) {
      m--;
      if (m < 1) { m = 12; y--; }
      d += daysInMonth(y, m);
    }
    return { y: y, m: m, d: d };
  }

  /* Weekday index (0 = Sunday) via Zeller-free day counting:
     days since 0001-01-01 (a Monday in the proleptic Gregorian
     calendar) mod 7, shifted so 0 = Sunday. */
  function weekdayOf(date) {
    var y = date.y - 1;
    var days = y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
    for (var m = 1; m < date.m; m++) days += daysInMonth(date.y, m);
    days += date.d - 1;
    /* 0001-01-01 was a Monday (=1 with Sunday=0) */
    return (days + 1) % 7;
  }

  /* The Gregorian date of Ramadan day n (1-based) given the start. */
  function dateForDay(startISO, n) {
    var start = parseISODate(startISO);
    if (!start) return null;
    return addDays(start, n - 1);
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function toISO(date) { return date.y + '-' + pad2(date.m) + '-' + pad2(date.d); }

  /* 'Monday, 8 February 2027' (lang 'en') or the Arabic equivalent.
     Numerals follow the chosen system in both languages. */
  function formatDate(date, lang, numerals) {
    var wd = weekdayOf(date);
    if (lang === 'ar') {
      return DATA.WEEKDAYS_AR[wd] + '، ' + num(date.d, numerals) + ' ' +
        DATA.MONTHS_AR[date.m - 1] + ' ' + num(date.y, numerals);
    }
    return DATA.WEEKDAYS_EN[wd] + ', ' + num(date.d, numerals) + ' ' +
      DATA.MONTHS_EN[date.m - 1] + ' ' + num(date.y, numerals);
  }

  /* Short date for grids: '8 Feb' / '٨ فبراير'. */
  function formatDateShort(date, lang, numerals) {
    if (lang === 'ar') return num(date.d, numerals) + ' ' + DATA.MONTHS_AR[date.m - 1];
    return num(date.d, numerals) + ' ' + DATA.MONTHS_EN[date.m - 1].slice(0, 3);
  }

  /* ---------- Book assembly ---------- */

  var DEFAULT_START = '2027-02-08';

  /* ---------- Cover designs ----------
   * 54 selectable designs = 30 classics (10 colour palettes x 3
   * ornaments) + 24 scene designs (COVER_SCENES below).
   * styles.css carries the matching cover-theme-<id> classes with
   * the palette colours as CSS variables; render.js draws the
   * ornament SVG. The palette colours below feed the settings
   * picker swatches and MUST match styles.css (locked by tests).
   * 'midnight' is the original palette and 'midnight-lantern' —
   * its original ornament — stays the default design. */
  var COVER_PALETTES = {
    midnight: { name: 'Midnight Gold', bg: '#ffffff',
      grad: 'linear-gradient(155deg, #ffffff, #ffffff)', deco: '#ffd166', ink: '#0f2027' },
    emerald: { name: 'Emerald Night', bg: 'linear-gradient(155deg, #03231b, #065f46)',
      grad: 'linear-gradient(155deg, #03231b, #065f46)', deco: '#ffd166', ink: '#ffd166' },
    purple: { name: 'Royal Purple', bg: 'linear-gradient(155deg, #1e0a3d, #4c1d95)',
      grad: 'linear-gradient(155deg, #1e0a3d, #4c1d95)', deco: '#ffd166', ink: '#ffd166' },
    sand: { name: 'Desert Sand', bg: 'linear-gradient(155deg, #fbf3e1, #f0dcb4)',
      grad: 'linear-gradient(155deg, #fbf3e1, #f0dcb4)', deco: '#dfa32e', ink: '#5b3a1e' },
    burgundy: { name: 'Burgundy Wine', bg: 'linear-gradient(155deg, #2b0a12, #6d1226)',
      grad: 'linear-gradient(155deg, #2b0a12, #6d1226)', deco: '#f0c35c', ink: '#f6d38a' },
    teal: { name: 'Ocean Teal', bg: 'linear-gradient(155deg, #02262e, #0a5c63)',
      grad: 'linear-gradient(155deg, #02262e, #0a5c63)', deco: '#ffd166', ink: '#ffd166' },
    charcoal: { name: 'Charcoal Gold', bg: 'linear-gradient(155deg, #101012, #2e2e33)',
      grad: 'linear-gradient(155deg, #101012, #2e2e33)', deco: '#ffd166', ink: '#f5c542' },
    rose: { name: 'Rose Blush', bg: 'linear-gradient(155deg, #fdf1ec, #f6d7ce)',
      grad: 'linear-gradient(155deg, #fdf1ec, #f6d7ce)', deco: '#d99a5c', ink: '#822659' },
    olive: { name: 'Olive Sage', bg: 'linear-gradient(155deg, #232b16, #4a5d23)',
      grad: 'linear-gradient(155deg, #232b16, #4a5d23)', deco: '#ffd166', ink: '#ffe9a8' },
    navy: { name: 'Navy Silver', bg: 'linear-gradient(155deg, #060d24, #16295c)',
      grad: 'linear-gradient(155deg, #060d24, #16295c)', deco: '#d7deeb', ink: '#e8edf7' }
  };
  var COVER_ORNAMENTS = [
    { id: 'lantern', name: 'Lantern' },
    { id: 'mosque', name: 'Mosque' },
    { id: 'star', name: 'Star' }
  ];
  var COVER_DESIGNS = [];
  Object.keys(COVER_PALETTES).forEach(function (p) {
    COVER_ORNAMENTS.forEach(function (o) {
      COVER_DESIGNS.push({
        id: p + '-' + o.id,
        name: COVER_PALETTES[p].name + ' — ' + o.name,
        palette: p,
        ornament: o.id
      });
    });
  });

  /* ---------- Hero scene designs (added 2026-11-17) ----------
   * Full-composition covers drawn by render.js as layered SVG
   * scenes (sky + star field + skyline / arch / arabesque /
   * calligraphy / mandala), in the style of the best-selling
   * Etsy/Canva Ramadan covers. Each scene design borrows one of
   * the 10 palettes for its interior theme (book.js stamps the
   * palette's book-theme class on the inside pages); the cover's
   * own colours live in its cover-theme-<id> block in styles.css.
   * Scene designs carry { scene } instead of { ornament }. */
  var COVER_SCENES = [
    { id: 'scene-nightsky', name: 'Night Sky Skyline', palette: 'navy', scene: 'nightsky' },
    { id: 'scene-arch-emerald', name: 'Golden Arch — Emerald', palette: 'emerald', scene: 'arch' },
    { id: 'scene-arch-ivory', name: 'Golden Arch — Ivory', palette: 'sand', scene: 'arch' },
    { id: 'scene-arabesque', name: 'Arabesque Crescent', palette: 'teal', scene: 'arabesque' },
    { id: 'scene-calligraphy', name: 'Calligraphy — Ramadan', palette: 'navy', scene: 'calligraphy' },
    { id: 'scene-mandala', name: 'Corner Mandala', palette: 'charcoal', scene: 'mandala' },
    { id: 'scene-pastel-skyline', name: 'Pastel Sisters — Skyline', palette: 'rose', scene: 'pastelskyline' },
    { id: 'scene-pastel-arch', name: 'Pastel Sisters — Arch', palette: 'olive', scene: 'pastelarch' },
    /* Second wave (2026-11-17, Gemini design review): eight art
       families in two colourways each — zellige tilework, moon
       phases, a botanical mihrab arch, square-Kufic geometry,
       pressed linen, Iznik florals, a kids' watercolour scene and
       a soft watercolour wash. One hero motif per cover, the
       title always on a clean plate, gold only as thin lines;
       most are light / ink-friendly. Colourways share the family
       scene renderer (render.js branches on the design id) and
       the family's scene-inner text position. */
    { id: 'scene-zellige', name: 'Moroccan Zellige Tiles', palette: 'olive', scene: 'zellige' },
    { id: 'scene-zellige-teal', name: 'Zellige Tiles — Teal', palette: 'teal', scene: 'zellige' },
    { id: 'scene-moonphases', name: 'Moon Phases', palette: 'navy', scene: 'moonphases' },
    { id: 'scene-moonphases-light', name: 'Moon Phases — Ivory', palette: 'navy', scene: 'moonphases' },
    { id: 'scene-mihrab', name: 'Mihrab Arch — Botanical', palette: 'sand', scene: 'mihrab' },
    { id: 'scene-mihrab-rose', name: 'Mihrab Arch — Rose', palette: 'rose', scene: 'mihrab' },
    { id: 'scene-kufic', name: 'Square Kufic Pattern', palette: 'teal', scene: 'kufic' },
    { id: 'scene-kufic-emerald', name: 'Square Kufic — Emerald', palette: 'emerald', scene: 'kufic' },
    { id: 'scene-linen', name: 'Pressed Linen — Minimal', palette: 'sand', scene: 'linen' },
    { id: 'scene-linen-sage', name: 'Pressed Linen — Sage', palette: 'olive', scene: 'linen' },
    { id: 'scene-iznik', name: 'Iznik Florals', palette: 'navy', scene: 'iznik' },
    { id: 'scene-iznik-turquoise', name: 'Iznik Florals — Turquoise', palette: 'teal', scene: 'iznik' },
    { id: 'scene-kids', name: "Kids' Watercolour", palette: 'rose', scene: 'kids' },
    { id: 'scene-kids-night', name: "Kids' Watercolour — Starry Night", palette: 'navy', scene: 'kids' },
    { id: 'scene-wash', name: 'Watercolour Wash', palette: 'purple', scene: 'wash' },
    { id: 'scene-wash-sage', name: 'Watercolour Wash — Sage', palette: 'olive', scene: 'wash' }
  ];
  COVER_DESIGNS = COVER_DESIGNS.concat(COVER_SCENES);
  var DEFAULT_COVER_DESIGN = 'midnight-lantern';

  function coverDesign(id) {
    for (var i = 0; i < COVER_DESIGNS.length; i++) {
      if (COVER_DESIGNS[i].id === id) return COVER_DESIGNS[i];
    }
    return null;
  }

  /* Accept any of the 30 design ids as-is. Saved values from the
   * 4-design era are bare palette ids ('midnight', 'emerald',
   * 'purple', 'sand') — migrate them to that palette's original
   * (lantern) design. Anything unknown -> the default design. */
  function migrateCoverTheme(value) {
    if (coverDesign(value)) return value;
    if (value && COVER_PALETTES[value]) return value + '-lantern';
    return DEFAULT_COVER_DESIGN;
  }

  function normalizeSpec(spec) {
    spec = spec || {};
    var start = parseISODate(spec.startDate) ? spec.startDate : DEFAULT_START;
    var extras = spec.extras || {};
    return {
      startDate: start,
      lang: ['ar', 'en', 'bi'].indexOf(spec.lang) !== -1 ? spec.lang : 'bi',
      numerals: spec.numerals === 'east' ? 'east' : 'west',
      paper: spec.paper === 'a4' ? 'a4' : 'letter',
      coverTheme: migrateCoverTheme(spec.coverTheme),
      includeKids: spec.includeKids !== false,
      name: String(spec.name || '').trim(),
      /* Cover text + print options (2026-11-17). All optional and
         defaulted so older saved specs and the default book are
         byte-for-byte the book as it always was: no subtitle, the
         classic serif title, full-colour printing, no extras. */
      subtitle: String(spec.subtitle || '').trim().slice(0, 60),
      titleFont: ['serif', 'script', 'sans'].indexOf(spec.titleFont) !== -1 ? spec.titleFont : 'serif',
      inkSaver: spec.inkSaver === true,
      extras: {
        duaCards: extras.duaCards === true,
        bookmarks: extras.bookmarks === true,
        notes: extras.notes === true,
        quranDuas: extras.quranDuas === true,
        surahTracker: extras.surahTracker === true
      }
    };
  }

  /* Build the ordered page list for a planner.
     Order: cover, overview, khatma, then daily pages with a weekly
     review after each week, last-ten-nights, deeds tracker, meal
     planner, shopping list, Eid prep, Eid day, and (optionally) the
     kids' pack: divider, star chart, deed cards (3 pages), colouring
     pages (6), certificate. */
  function buildPages(specIn) {
    var spec = normalizeSpec(specIn);
    var pages = [];

    pages.push({ type: 'cover', name: spec.name });
    pages.push({ type: 'overview', startDate: spec.startDate });
    pages.push({ type: 'khatma', startDate: spec.startDate });

    for (var day = 1; day <= 30; day++) {
      pages.push({
        type: 'daily', day: day,
        date: dateForDay(spec.startDate, day),
        dua: DATA.DUAS[day - 1]
      });
      if (day % 7 === 0 || day === 30) {
        var week = Math.ceil(day / 7);
        pages.push({
          type: 'weekly', week: week,
          fromDay: (week - 1) * 7 + 1, toDay: Math.min(week * 7, 30),
          startDate: spec.startDate
        });
      }
    }

    pages.push({ type: 'lastten', startDate: spec.startDate });
    pages.push({ type: 'deeds' });
    pages.push({ type: 'meals', startDate: spec.startDate });
    pages.push({ type: 'shopping' });
    pages.push({ type: 'eidprep' });
    pages.push({ type: 'eidday' });

    if (spec.includeKids) {
      pages.push({ type: 'kidsdivider' });
      pages.push({ type: 'kidschart', startDate: spec.startDate });
      for (var c = 0; c < 3; c++) {
        pages.push({ type: 'kidscards', chunk: c, deeds: DATA.KIDS_DEEDS.slice(c * 10, c * 10 + 10), firstDay: c * 10 + 1 });
      }
      DATA.COLORING_IDS.forEach(function (id) {
        pages.push({ type: 'coloring', designId: id });
      });
      pages.push({ type: 'certificate', name: spec.name });
    }

    /* Optional extras (2026-11-17): OFF by default, appended at
       the very end of the book when the buyer ticks them — dua
       cards (all 30 duas, 5 pages x 6 cards), the Quranic duas
       collection (Feature E, height-packed pages), the 114-surah
       reading tracker (Feature F, 4 pages), one bookmarks page
       (4 bookmarks), two lined notes pages. */
    if (spec.extras.duaCards) {
      for (var dc = 0; dc < 5; dc++) {
        pages.push({
          type: 'duacards', chunk: dc,
          duas: DATA.DUAS.slice(dc * 6, dc * 6 + 6), firstDay: dc * 6 + 1
        });
      }
    }
    if (spec.extras.quranDuas) {
      packQuranDuas(DATA.QURAN_DUAS).forEach(function (chunkDuas, ci) {
        pages.push({ type: 'quranduas', chunk: ci, duas: chunkDuas });
      });
    }
    if (spec.extras.surahTracker) {
      for (var st = 0; st < DATA.SURAHS.length; st += 30) {
        pages.push({
          type: 'surahtracker', chunk: st / 30,
          surahs: DATA.SURAHS.slice(st, st + 30)
        });
      }
    }
    if (spec.extras.bookmarks) pages.push({ type: 'bookmarks' });
    if (spec.extras.notes) {
      pages.push({ type: 'notes' });
      pages.push({ type: 'notes' });
    }

    return pages;
  }

  /* Feature E packing: the 52 Quranic duas vary in length, so
   * collection pages are packed by a conservative height model
   * (the same constants test_layout.js asserts with): A4's inner
   * width (the narrower sheet -> the most wrapped lines) and a
   * Letter-sized entry budget (the shorter sheet). A page holds
   * at most 5 duas (long ones: 3–4); the first page also carries
   * the section intro. */
  function quranDuaEntryH(dua) {
    var inner = 647;                       // A4 content width - block padding
    var h = 20 + 23;                       // block padding + reference line
    h += Math.ceil(dua.ar.length * 8.2 / inner) * (16 * 1.703);
    h += 5 + Math.ceil(dua.en.length * 6.0 / inner) * (13 * 1.45);
    return h + 10;                         // block margin
  }
  function packQuranDuas(duas) {
    var chunks = [], cur = [], used = 0;
    var FIRST = 700, REST = 750;           // entry budgets (Letter body minus head/intro)
    duas.forEach(function (dua) {
      var h = quranDuaEntryH(dua);
      var budget = chunks.length === 0 ? FIRST : REST;
      if (cur.length && (used + h > budget || cur.length >= 5)) {
        chunks.push(cur); cur = []; used = 0;
      }
      cur.push(dua); used += h;
    });
    if (cur.length) chunks.push(cur);
    return chunks;
  }

  function pageCount(spec) { return buildPages(spec).length; }

  var api = {
    DEFAULT_START: DEFAULT_START,
    COVER_PALETTES: COVER_PALETTES,
    COVER_ORNAMENTS: COVER_ORNAMENTS,
    COVER_SCENES: COVER_SCENES,
    COVER_DESIGNS: COVER_DESIGNS,
    DEFAULT_COVER_DESIGN: DEFAULT_COVER_DESIGN,
    coverDesign: coverDesign,
    migrateCoverTheme: migrateCoverTheme,
    EASTERN: EASTERN,
    toEasternArabic: toEasternArabic,
    num: num,
    isLeap: isLeap, daysInMonth: daysInMonth,
    parseISODate: parseISODate, addDays: addDays, weekdayOf: weekdayOf,
    dateForDay: dateForDay, toISO: toISO,
    formatDate: formatDate, formatDateShort: formatDateShort,
    normalizeSpec: normalizeSpec, buildPages: buildPages, pageCount: pageCount
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.RP = api;
})(typeof window !== 'undefined' ? window : globalThis);
