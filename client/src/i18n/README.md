# Localization (English / বাংলা)

The site ships in two languages: English (`en`, the fallback) and Bengali
(`bn`). Readers switch with the globe toggle in the utility bar; the choice is
persisted to `localStorage` under `dhs-language` and restored on the next
visit. `i18n/index.js` also keeps `<html lang>` in sync, which drives the
Bengali typography rules in `src/index.css` and tells screen readers which
voice to use.

## Where copy lives

Text falls into two buckets, and each has one correct home.

**Interface copy** — headings, labels, buttons, alerts, `aria-label`s, image
`alt` text — lives in `locales/<lang>/<namespace>.json`. Namespaces mirror the
component folders: `common`, `home`, `about`, `academics`, `admissions`,
`faculty`, `gallery`, `news`, `notices`. `common` holds anything shared across
pages (navigation, footer, pagination, category names, school identity).

```jsx
const { t } = useTranslation('admissions');
<h3>{t('eligibility.heading')}</h3>

// Reaching into a second namespace:
const { t } = useTranslation(['home', 'common']);
<span>{t('common:actions.explore')}</span>
```

**Record content** — notices, events, news, faculty, gallery items — stays in
`src/data/*.json`, with the Bengali version in a sibling key suffixed `Bn`:
`title` / `titleBn`, `description` / `descriptionBn`. Read it through
`useLocale().field`, which picks the Bengali value when Bengali is active and
falls back to English when a translation is missing:

```jsx
const { field } = useLocale();
<h4>{field(notice, 'title')}</h4>
```

`admissions.requiredDocuments` is a plain string array, so its Bengali copy is
the parallel array `requiredDocumentsBn` rather than per-item siblings.

## Numbers and dates

Bengali readers expect Bengali-Indic digits. Never interpolate a raw number
into visible text — route it through `useLocale()`:

```jsx
const { num, date, day, monthAbbr } = useLocale();
num('1.2 MB')          // "১.২ MB"
date('2024-10-24')     // "২৪ অক্টোবর, ২০২৪"
monthAbbr('OCT')       // "অক্টো"
```

## Slugs are not copy

Category names, department names, and form option values are identifiers: they
are matched against the data files and stored in form state, so they stay in
English. Only their labels translate — via `i18n/categories.js` for data
categories, or a `labelKey` on the option for `<select>` lists.

## Adding or changing a string

1. Add the key to **both** `locales/en/…` and `locales/bn/…`.
2. Use it via `t('…')`; never inline a user-visible literal in JSX.
3. Run `npm test`.

The suite in `src/test/i18n.test.jsx` enforces the invariants: the two
languages must define an identical key set, no Bengali string may be a verbatim
copy of its English source (a small allowlist covers deliberately bilingual
pairs like the masthead), and every record in `src/data` must carry its
Bengali fields. `src/test/pageRender.test.jsx` renders every route in both
languages and fails if an unresolved key reaches the page.
