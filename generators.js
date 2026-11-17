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

  /* Selectable cover designs (styles.css carries a cover-theme-*
   * class with the colours for each). 'midnight' is the original
   * cover design and stays the default. */
  var COVER_THEMES = ['midnight', 'emerald', 'purple', 'sand'];

  function normalizeSpec(spec) {
    spec = spec || {};
    var start = parseISODate(spec.startDate) ? spec.startDate : DEFAULT_START;
    return {
      startDate: start,
      lang: ['ar', 'en', 'bi'].indexOf(spec.lang) !== -1 ? spec.lang : 'bi',
      numerals: spec.numerals === 'east' ? 'east' : 'west',
      paper: spec.paper === 'a4' ? 'a4' : 'letter',
      coverTheme: COVER_THEMES.indexOf(spec.coverTheme) !== -1 ? spec.coverTheme : 'midnight',
      includeKids: spec.includeKids !== false,
      name: String(spec.name || '').trim()
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

    return pages;
  }

  function pageCount(spec) { return buildPages(spec).length; }

  var api = {
    DEFAULT_START: DEFAULT_START,
    COVER_THEMES: COVER_THEMES,
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
