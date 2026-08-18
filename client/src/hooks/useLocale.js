import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  formatDate,
  formatDayOfMonth,
  formatMonthAbbr,
  formatNumber,
  isBengali,
} from '../i18n/format';

/**
 * Bundles everything a component needs to render the active language:
 * the language code, number/date formatters bound to it, and `field()` for
 * reading the Bengali variant of a static-data property.
 *
 * The JSON files under `src/data` carry Bengali copy in sibling keys with a
 * `Bn` suffix (`title` / `titleBn`, `name` / `nameBn`). `field(record, 'title')`
 * returns the Bengali value when Bengali is active and a translation exists,
 * and otherwise falls back to English rather than rendering an empty node.
 */
export function useLocale() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || 'en';
  const bengali = isBengali(language);

  const field = useCallback(
    (record, key) => {
      if (!record) return '';
      if (bengali) {
        const translated = record[`${key}Bn`];
        if (translated) return translated;
      }
      return record[key] ?? '';
    },
    [bengali]
  );

  return useMemo(
    () => ({
      language,
      isBengali: bengali,
      field,
      num: (value) => formatNumber(value, language),
      date: (iso, options) => formatDate(iso, language, options),
      day: (iso) => formatDayOfMonth(iso, language),
      monthAbbr: (abbr) => formatMonthAbbr(abbr, language),
    }),
    [language, bengali, field]
  );
}

export default useLocale;
