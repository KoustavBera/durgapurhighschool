// Locale-aware formatting helpers shared across the site.
//
// Bengali readers expect Bengali-Indic digits (০১২৩৪৫৬৭৮৯) in dates, counts,
// phone numbers, and file sizes, so every user-facing number goes through here.

const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

const BENGALI_MONTHS_LONG = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
];

const BENGALI_MONTHS_SHORT = [
  'জানু', 'ফেব', 'মার্চ', 'এপ্রি', 'মে', 'জুন',
  'জুলা', 'আগ', 'সেপ্ট', 'অক্টো', 'নভে', 'ডিসে',
];

const ENGLISH_MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const ENGLISH_MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Maps the abbreviations hardcoded in the static content ("OCT", "Nov") onto a
// month index so they can be re-rendered in Bengali.
const MONTH_ABBR_INDEX = ENGLISH_MONTHS_SHORT.reduce((acc, name, idx) => {
  acc[name.toLowerCase()] = idx;
  return acc;
}, {});

export const isBengali = (lang) => String(lang || '').toLowerCase().startsWith('bn');

/**
 * Rewrites every ASCII digit in a string (or number) as a Bengali-Indic digit.
 * Non-digit characters — separators, units, percent signs — are left intact.
 */
export function toBengaliDigits(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[0-9]/g, (d) => BENGALI_DIGITS[Number(d)]);
}

/** Formats any numeric-bearing string for the active language. */
export function formatNumber(value, lang) {
  if (value === null || value === undefined) return '';
  return isBengali(lang) ? toBengaliDigits(value) : String(value);
}

/** Localized month name for a 0-based month index. */
export function monthName(monthIndex, lang, { short = false } = {}) {
  const idx = ((Number(monthIndex) % 12) + 12) % 12;
  if (isBengali(lang)) {
    return short ? BENGALI_MONTHS_SHORT[idx] : BENGALI_MONTHS_LONG[idx];
  }
  return short ? ENGLISH_MONTHS_SHORT[idx] : ENGLISH_MONTHS_LONG[idx];
}

/**
 * Translates a bare month abbreviation such as "OCT" or "Nov" that appears in
 * static content. Unrecognised input is returned unchanged.
 */
export function formatMonthAbbr(abbr, lang) {
  const idx = MONTH_ABBR_INDEX[String(abbr || '').trim().toLowerCase().slice(0, 3)];
  if (idx === undefined) return abbr;
  return monthName(idx, lang, { short: true });
}

/**
 * Formats an ISO date string (`YYYY-MM-DD`) as "24 October 2024" /
 * "২৪ অক্টোবর ২০২৪". Falls back to the raw input for unparseable values so a
 * malformed record never blanks out the UI.
 */
export function formatDate(isoDate, lang, { short = false } = {}) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return formatNumber(isoDate, lang);

  const day = date.getDate();
  const month = monthName(date.getMonth(), lang, { short });
  const year = date.getFullYear();

  return isBengali(lang)
    ? `${toBengaliDigits(day)} ${month}, ${toBengaliDigits(year)}`
    : `${day} ${month}, ${year}`;
}

/** Day-of-month only, used by the date chips on event and calendar cards. */
export function formatDayOfMonth(isoDate, lang) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';
  return formatNumber(String(date.getDate()).padStart(2, '0'), lang);
}
