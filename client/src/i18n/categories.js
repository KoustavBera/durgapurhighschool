// The static data files store categories as stable English slugs
// ("Admission", "cultural", "annual_day"). They double as filter values, so
// they must not be translated in place — this maps a slug to its display
// label in the active language, falling back to the raw slug for anything the
// catalog does not know about.
const CATEGORY_KEYS = {
  admission: 'categories.admission',
  academics: 'categories.academics',
  examination: 'categories.examination',
  general: 'categories.general',
  cultural: 'categories.cultural',
  sports: 'categories.sports',
  infrastructure: 'categories.infrastructure',
  laboratories: 'categories.laboratories',
  annual_day: 'categories.annualDay',
  workshop: 'categories.workshop',
  national: 'categories.national',
  festival: 'categories.festival',
  achievements: 'categories.achievements',
  events: 'categories.events',
  all: 'categories.all',
};

export const categoryKey = (category) =>
  CATEGORY_KEYS[String(category || '').trim().toLowerCase()];

/**
 * @param {Function} t a `t` bound to (or able to prefix) the `common` namespace
 * @param {string} category the raw slug from the data files
 */
export function categoryLabel(t, category) {
  const key = categoryKey(category);
  if (!key) return category;
  return t(`common:${key}`, { defaultValue: category });
}

export default categoryLabel;
