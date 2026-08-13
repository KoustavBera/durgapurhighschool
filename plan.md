# Durgapur High School — Frontend Implementation Plan

> **Stack:** React 18 + Vite 5 + React Router DOM v6 + **Tailwind CSS v3**
> **Design System:** Bharat Shiksha Civic (UX4G / GIGW 3.0 compliant)
> **Figma Source:** `frontend/public/assets/figma/stitch_durgapur_high_school_ux4g_redesign/`
> **Last Updated:** 2026-08-13

---

## 1. Overview

The frontend consists of **9 distinct pages** built from 11 Figma frames. The project is a **React + Vite SPA** with client-side routing. All Tailwind design tokens from the Figma HTML files are ported into `tailwind.config.js`. The backend will be wired in later; all data is currently mocked via static JSON files in `src/data/`.

---

## 2. Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 |
| Icons | Google Material Symbols Outlined (CDN) |
| Fonts | Google Fonts — Inter + Noto Sans |

---

## 3. Tailwind Config (`tailwind.config.js`)

All design tokens from `bharat_shiksha_civic/DESIGN.md` and the Figma HTML files are mapped into `tailwind.config.js` as custom extensions:

### 3.1 Colors

```js
colors: {
  "primary":                   "#021541",
  "on-primary":                "#ffffff",
  "primary-container":         "#1a2b56",
  "on-primary-container":      "#8393c5",
  "primary-fixed":             "#dae1ff",
  "primary-fixed-dim":         "#b5c5f9",
  "inverse-primary":           "#b5c5f9",
  "secondary":                 "#8f4e00",
  "on-secondary":              "#ffffff",
  "secondary-container":       "#fe9832",
  "on-secondary-container":    "#683700",
  "secondary-fixed":           "#ffdcc2",
  "secondary-fixed-dim":       "#ffb77a",
  "tertiary":                  "#291300",
  "on-tertiary":               "#ffffff",
  "tertiary-container":        "#472400",
  "on-tertiary-container":     "#bf895b",
  "tertiary-fixed":            "#ffdcc1",
  "surface":                   "#fbf8fd",
  "surface-dim":               "#F8F9FA",
  "surface-bright":            "#fbf8fd",
  "surface-container-lowest":  "#ffffff",
  "surface-container-low":     "#f5f3f7",
  "surface-container":         "#efedf1",
  "surface-container-high":    "#e9e7ec",
  "surface-container-highest": "#e4e2e6",
  "surface-variant":           "#e4e2e6",
  "surface-tint":              "#4d5d8b",
  "on-surface":                "#1b1b1f",
  "on-surface-variant":        "#45464f",
  "inverse-surface":           "#303034",
  "inverse-on-surface":        "#f2f0f4",
  "outline":                   "#757680",
  "outline-variant":           "#c5c6d0",
  "background":                "#fbf8fd",
  "on-background":             "#1b1b1f",
  "error":                     "#D32F2F",
  "on-error":                  "#ffffff",
  "error-container":           "#ffdad6",
  "on-error-container":        "#93000a",
  "success":                   "#28A745",
  "warning":                   "#FFC107",
  "info":                      "#17A2B8",
  "ash-gray":                  "#6C757D",
}
```

### 3.2 Typography

```js
fontFamily: {
  "display-lg":          ["Inter", "sans-serif"],
  "headline-lg":         ["Inter", "sans-serif"],
  "headline-lg-mobile":  ["Inter", "sans-serif"],
  "headline-md":         ["Inter", "sans-serif"],
  "body-lg":             ["Inter", "sans-serif"],
  "body-md":             ["Inter", "sans-serif"],
  "label-md":            ["Noto Sans", "sans-serif"],
  "label-sm":            ["Noto Sans", "sans-serif"],
  "bengali-body":        ["Noto Sans", "sans-serif"],
},
fontSize: {
  "display-lg":         ["48px", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }],
  "headline-lg":        ["32px", { lineHeight: "1.3", fontWeight: "600" }],
  "headline-lg-mobile": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
  "headline-md":        ["24px", { lineHeight: "1.4", fontWeight: "600" }],
  "body-lg":            ["18px", { lineHeight: "1.6", fontWeight: "400" }],
  "body-md":            ["16px", { lineHeight: "1.5", fontWeight: "400" }],
  "label-md":           ["14px", { lineHeight: "1.4", fontWeight: "500" }],
  "label-sm":           ["12px", { lineHeight: "1.2", fontWeight: "500" }],
  "bengali-body":       ["16px", { lineHeight: "1.8", fontWeight: "400" }],
},
```

### 3.3 Spacing & Layout

```js
spacing: {
  "margin-mobile":  "16px",
  "gutter":         "24px",
  "base":           "8px",
  "margin-desktop": "64px",
  "container-max":  "1200px",
},
borderRadius: {
  DEFAULT: "0.125rem",  // 2px
  lg:      "0.25rem",   // 4px
  xl:      "0.5rem",    // 8px
  full:    "0.75rem",   // 12px
},
```

---

## 4. Page Inventory

### Page 1 — Home (`/`)
**Figma:** `durgapur_high_school_home/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Utility Bar | `<UtilityBar>` | `bg-surface-container-highest`, flex, A-/A/A+ buttons |
| 2 | Government Header + Nav | `<Navbar>` | `fixed bg-primary border-b-4 border-secondary`, hamburger |
| 3 | Announcements Marquee | `<Marquee>` | CSS `@keyframes marquee`, `overflow-hidden whitespace-nowrap` |
| 4 | Hero Section | `<HeroSection>` | Full-bleed image, `bg-gradient-to-t from-primary/90`, glassmorphism Principal card |
| 5 | Quick Access Cards | `<QuickAccessGrid>` | 4-col grid, `border-l-4 border-l-primary hover:border-l-secondary` |
| 6 | Notice Board + Stats | `<NoticeBoardHome>` + `<StatsGrid>` | 1/3 + 2/3 split, scrollable notice list, 4 stat tiles |
| 7 | News & Events (Bento) | `<NewsEventsBento>` | `grid-cols-12`, featured hero (col-span-8), side cards (col-span-4) |
| 8 | Gallery Preview Strip | `<GalleryStrip>` | `flex overflow-x-auto`, `hover:scale-105` on images |
| 9 | Footer | `<Footer>` | `bg-primary`, 4-col: About, Quick Links, Gov Portals, Contact |

---

### Page 2 — About Us (`/about`)
**Figma:** `about_us_durgapur_high_school_1/` + `about_us_durgapur_high_school_2/`

> Two Figma variants merged into one comprehensive About page.

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Utility Bar + Navbar | shared | |
| 2 | Breadcrumbs | `<Breadcrumb>` | `text-ash-gray font-label-md` |
| 3 | Hero Banner | `<PageHero>` | `h-[400px] bg-cover flex items-end`, gradient overlay |
| 4 | History / Vision / Mission | `<AboutBento>` | `grid-cols-3`, History = `col-span-2`, Vision + Mission stacked |
| 5 | Principal's Message | `<PrincipalMessage>` | Portrait card, blockquote, `backdrop-blur-md` |
| 6 | School Statistics | `<StatsGrid>` | 4 tiles: `bg-primary text-on-primary`, `hover:translate-y-[-5px]` |
| 7 | SMC / Governing Body | `<GoverningBody>` | List/table of management committee members |
| 8 | Infrastructure | `<Infrastructure>` | 2 image cards with overlay text |
| 9 | Announcements Marquee | `<Marquee>` | Reused |
| 10 | Footer | shared | |

---

### Page 3 — Academics (`/academics`)
**Figma:** `academics_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Navbar | shared | "Academics" active |
| 2 | Breadcrumbs | `<Breadcrumb>` | Home > Academics |
| 3 | Hero Banner | `<PageHero>` | Library image, "Excellence in Education" |
| 4 | Curriculum Structure | `<CurriculumCard>` | `col-span-8`, Secondary (WBBSE) + Higher Secondary (WBCHSE) side-by-side |
| 5 | Subject Streams | `<StreamCard>` | Science / Commerce / Arts — icons + subject lists |
| 6 | Examination System | `<ExamSystem>` | Internal + board exam schedule, `glass-card` pattern |
| 7 | Facilities Grid | `<FacilitiesGrid>` | Bento: Labs, Library, Smart Classes, Playground |
| 8 | Academic Calendar | `<AcademicCalendar>` | Month-by-month timeline |
| 9 | CTA to Faculty | Button | `bg-primary text-on-primary` → links to `/faculty` |
| 10 | Footer | shared | |

---

### Page 4 — Admissions (`/admissions`)
**Figma:** `admissions_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Utility Bar + Navbar | shared | "Admissions" active |
| 2 | Mobile Side Nav | `<SideNav>` | Slide-in drawer, `fixed inset-y-0 left-0` |
| 3 | Hero Banner | `<PageHero>` | Grand entrance image |
| 4 | Admission Steps | `<AdmissionSteps>` | Numbered steps 1→4, icon per step |
| 5 | Eligibility Criteria | `<EligibilityCard>` | Class V→VI / IX→X / XI→XII cards |
| 6 | Important Dates | `<ImportantDates>` | Timeline / table of deadlines |
| 7 | Required Documents | `<DocumentChecklist>` | Checkbox list with `text-success` check icons |
| 8 | Online Application CTA | `<ApplicationCTA>` | `bg-secondary-container` prominent CTA card |
| 9 | FAQ Accordion | `<FAQAccordion>` | `<details>`/`<summary>` pattern |
| 10 | Fee Structure | `<FeeTable>` | Class-wise table with `border-outline-variant` |
| 11 | Footer | shared | |

---

### Page 5 — Faculty Directory (`/faculty`)
**Figma:** `faculty_directory_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Navbar | shared | "Academics" active |
| 2 | Desktop Left Sidebar | `<Sidebar>` | `hidden lg:flex flex-col fixed left-0 w-64 pt-32` |
| 3 | Breadcrumbs | `<Breadcrumb>` | Home > Academics > Faculty Directory |
| 4 | Page Header | `<PageHeader>` | `font-headline-lg`, description |
| 5 | Search + Filter | `<FacultyFilter>` | Search input, Department select, Designation select |
| 6 | Faculty Card Grid | `<FacultyGrid>` | `grid-cols-1 md:grid-cols-3`, `lg:pl-64` for sidebar offset |
| 7 | Faculty Card | `<FacultyCard>` | Photo, name, designation, department, qualifications |
| 8 | Pagination | `<Pagination>` | shared |
| 9 | Footer | shared | |

---

### Page 6 — Gallery (`/gallery`)
**Figma:** `gallery_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Navbar | shared | |
| 2 | Breadcrumbs | `<Breadcrumb>` | Home > Gallery |
| 3 | Category Filter Tabs | `<GalleryTabs>` | All / Events / Academics / Sports / Campus pill tabs |
| 4 | Photo Grid | `<PhotoGrid>` | Masonry-style responsive grid, `hover:scale-105 cursor-pointer` |
| 5 | Lightbox Viewer | `<Lightbox>` | Fixed overlay, prev/next, close — portal-rendered |
| 6 | Video Section | `<VideoGrid>` | YouTube embed `<iframe>` cards |
| 7 | Footer | shared | |

---

### Page 7 — News & Events (`/news`)
**Figma:** `news_events_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Navbar | shared | "Student Corner" active |
| 2 | Breadcrumbs | `<Breadcrumb>` | Home > News & Events |
| 3 | Featured Bento | `<FeaturedNews>` | `grid-cols-12`, featured (col-span-8 h-[500px]) + 2 side cards |
| 4 | Category Filter | `<NewsFilter>` | All / Academics / Events / Achievements / Sports tabs |
| 5 | News Cards Grid | `<NewsGrid>` | `grid-cols-1 md:grid-cols-3` of `<NewsCard>` |
| 6 | News Card | `<NewsCard>` | Image zoom on hover, category badge, date, title, excerpt |
| 7 | Upcoming Events | `<EventList>` | Timeline-style list |
| 8 | Pagination | `<Pagination>` | shared |
| 9 | Footer | shared | |

---

### Page 8 — Notice Board (`/notices`)
**Figma:** `notice_board_durgapur_high_school/`

| # | Section | Component | Key Classes / Pattern |
|---|---|---|---|
| 1 | Navbar | shared | "Student Corner" active |
| 2 | Breadcrumbs | `<Breadcrumb>` | Home > Student Corner > Notice Board |
| 3 | Page Header | `<PageHeader>` | Title + GIGW compliance note |
| 4 | Search + Filter | `<NoticeFilter>` | Search, Category select, Academic Year select, Apply btn |
| 5 | Notices Table | `<NoticeTable>` | `<table>` with date, category badge, title, PDF download btn |
| 6 | Pinned Circulars | `<CircularList>` | Sidebar-style pinned notices card |
| 7 | Pagination | `<Pagination>` | shared |
| 8 | Footer | shared | |

---

## 5. Shared Components (`src/components/common/`)

| Component | Description |
|---|---|
| `UtilityBar.jsx` | Top government bar — language, A-/A/A+ font sizer, contrast toggle |
| `Navbar.jsx` | Fixed top nav, logo + EN/BN name, links, hamburger; `activePage` prop |
| `MobileMenu.jsx` | Slide-in mobile drawer |
| `Sidebar.jsx` | Left desktop sidebar (Faculty page) |
| `Breadcrumb.jsx` | `items: [{label, href}]` prop |
| `Footer.jsx` | 4-col with Quick Links, Gov Portals, Contact |
| `Marquee.jsx` | Infinite horizontal ticker (CSS animation) |
| `PageHero.jsx` | Generic hero — `bgImage`, `title`, `subtitle` props |
| `StatsGrid.jsx` | 4 animated stat cards |
| `Pagination.jsx` | `currentPage`, `totalPages`, `onPageChange` props |
| `Lightbox.jsx` | Full-screen image overlay, React Portal |
| `PageHeader.jsx` | Page title + subtitle block |

---

## 6. Component Directory

```
src/
├── components/
│   ├── common/
│   │   ├── UtilityBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── Footer.jsx
│   │   ├── Marquee.jsx
│   │   ├── PageHero.jsx
│   │   ├── PageHeader.jsx
│   │   ├── StatsGrid.jsx
│   │   ├── Pagination.jsx
│   │   └── Lightbox.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── QuickAccessGrid.jsx
│   │   ├── NoticeBoardHome.jsx
│   │   ├── NewsEventsBento.jsx
│   │   └── GalleryStrip.jsx
│   ├── about/
│   │   ├── AboutBento.jsx
│   │   ├── PrincipalMessage.jsx
│   │   ├── GoverningBody.jsx
│   │   └── Infrastructure.jsx
│   ├── academics/
│   │   ├── CurriculumCard.jsx
│   │   ├── StreamCard.jsx
│   │   ├── ExamSystem.jsx
│   │   ├── FacilitiesGrid.jsx
│   │   └── AcademicCalendar.jsx
│   ├── admissions/
│   │   ├── AdmissionSteps.jsx
│   │   ├── EligibilityCard.jsx
│   │   ├── ImportantDates.jsx
│   │   ├── DocumentChecklist.jsx
│   │   ├── ApplicationCTA.jsx
│   │   ├── FAQAccordion.jsx
│   │   └── FeeTable.jsx
│   ├── faculty/
│   │   ├── FacultyFilter.jsx
│   │   ├── FacultyGrid.jsx
│   │   └── FacultyCard.jsx
│   ├── gallery/
│   │   ├── GalleryTabs.jsx
│   │   ├── PhotoGrid.jsx
│   │   └── VideoGrid.jsx
│   ├── news/
│   │   ├── FeaturedNews.jsx
│   │   ├── NewsFilter.jsx
│   │   ├── NewsGrid.jsx
│   │   ├── NewsCard.jsx
│   │   └── EventList.jsx
│   └── notices/
│       ├── NoticeFilter.jsx
│       ├── NoticeTable.jsx
│       └── CircularList.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Admissions.jsx
│   ├── Faculty.jsx
│   ├── Gallery.jsx
│   ├── News.jsx
│   ├── Notices.jsx
│   └── NotFound.jsx
├── data/
│   ├── notices.json
│   ├── news.json
│   ├── faculty.json
│   ├── gallery.json
│   ├── admissions.json
│   ├── stats.json
│   └── events.json
├── services/
│   └── api.js            ← stub, wired to backend later
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

---

## 7. Routing (`src/App.jsx`)

```
/            → Home.jsx
/about       → About.jsx
/academics   → Academics.jsx
/admissions  → Admissions.jsx
/faculty     → Faculty.jsx
/gallery     → Gallery.jsx
/news        → News.jsx
/notices     → Notices.jsx
*            → NotFound.jsx (404)
```

---

## 8. Data Layer (`src/data/`)

All data is mocked locally until the backend is ready. Each JSON file mirrors the expected API response shape.

| File | Shape | Used By |
|---|---|---|
| `notices.json` | `[{id, date, title, category, pdfUrl, isPinned}]` | Notice Board, Marquee |
| `news.json` | `[{id, date, title, excerpt, image, category, isFeatured}]` | News & Events, Home Bento |
| `faculty.json` | `[{id, name, designation, department, qualification, photo}]` | Faculty Directory |
| `gallery.json` | `[{id, url, thumb, category, caption}]` | Gallery, Home Strip |
| `admissions.json` | `{steps[], eligibility{}, dates[], documents[], faq[], fees{}}` | Admissions |
| `stats.json` | `{students, faculty, labs, smartClasses}` | About, Home |
| `events.json` | `[{id, title, date, venue, description}]` | News & Events upcoming |

---

## 9. Build Execution Order

### Phase 0 — Setup
- [ ] `npm install tailwindcss@3 postcss autoprefixer` in `/frontend`
- [ ] `npx tailwindcss init -p` to generate `tailwind.config.js` + `postcss.config.js`
- [ ] Port all Figma tokens into `tailwind.config.js` (colors, fonts, sizes, spacing, radii)
- [ ] Add Google Fonts (Inter + Noto Sans) to `index.html`
- [ ] Update `src/index.css` with `@tailwind base/components/utilities`
- [ ] Add Material Symbols Outlined CDN to `index.html`
- [ ] Update `main.jsx` CSS import path

### Phase 1 — Shared Infrastructure
- [ ] `UtilityBar.jsx` — language switcher, A-/A/A+, contrast toggle, localStorage
- [ ] `Navbar.jsx` + `MobileMenu.jsx` — fixed top, active link state
- [ ] `Breadcrumb.jsx`
- [ ] `Footer.jsx` — 4-column layout
- [ ] `Marquee.jsx` — CSS animation ticker
- [ ] `PageHero.jsx` — reusable hero banner
- [ ] `PageHeader.jsx`
- [ ] `StatsGrid.jsx`
- [ ] `Pagination.jsx`
- [ ] `Lightbox.jsx` — React Portal
- [ ] `App.jsx` — full routing setup
- [ ] `NotFound.jsx`

### Phase 2 — Home Page (`/`)
- [ ] `HeroSection.jsx` — full-bleed + glassmorphism Principal card
- [ ] `QuickAccessGrid.jsx` — 4 quick-access cards
- [ ] `NoticeBoardHome.jsx` — scrollable notice list
- [ ] `NewsEventsBento.jsx` — 12-col bento grid
- [ ] `GalleryStrip.jsx` — horizontal scroll
- [ ] `Home.jsx` — page assembly + `notices.json`, `news.json`, `gallery.json` wired

### Phase 3 — About Us (`/about`)
- [ ] `AboutBento.jsx`
- [ ] `PrincipalMessage.jsx`
- [ ] `GoverningBody.jsx`
- [ ] `Infrastructure.jsx`
- [ ] `About.jsx` — assembly + `stats.json`

### Phase 4 — Academics (`/academics`)
- [ ] `CurriculumCard.jsx`
- [ ] `StreamCard.jsx`
- [ ] `ExamSystem.jsx`
- [ ] `FacilitiesGrid.jsx`
- [ ] `AcademicCalendar.jsx`
- [ ] `Academics.jsx` — assembly

### Phase 5 — Admissions (`/admissions`)
- [ ] `AdmissionSteps.jsx`
- [ ] `EligibilityCard.jsx`
- [ ] `ImportantDates.jsx`
- [ ] `DocumentChecklist.jsx`
- [ ] `ApplicationCTA.jsx`
- [ ] `FAQAccordion.jsx`
- [ ] `FeeTable.jsx`
- [ ] `Admissions.jsx` — assembly + `admissions.json`

### Phase 6 — Faculty Directory (`/faculty`)
- [ ] `FacultyFilter.jsx`
- [ ] `FacultyCard.jsx`
- [ ] `FacultyGrid.jsx`
- [ ] `Sidebar.jsx`
- [ ] `Faculty.jsx` — assembly + `faculty.json`

### Phase 7 — Gallery (`/gallery`)
- [ ] `GalleryTabs.jsx`
- [ ] `PhotoGrid.jsx`
- [ ] `Lightbox.jsx` (finalize)
- [ ] `VideoGrid.jsx`
- [ ] `Gallery.jsx` — assembly + `gallery.json`

### Phase 8 — News & Events (`/news`)
- [ ] `FeaturedNews.jsx`
- [ ] `NewsFilter.jsx`
- [ ] `NewsCard.jsx`
- [ ] `NewsGrid.jsx`
- [ ] `EventList.jsx`
- [ ] `News.jsx` — assembly + `news.json` + `events.json`

### Phase 9 — Notice Board (`/notices`)
- [ ] `NoticeFilter.jsx`
- [ ] `NoticeTable.jsx`
- [ ] `CircularList.jsx`
- [ ] `Notices.jsx` — assembly + `notices.json`

### Phase 10 — Polish & Accessibility
- [ ] Font resizer (`localStorage` persistence, applies `text-sm/base/lg` to `<html>`)
- [ ] High contrast mode toggle (class-based, stored in `localStorage`)
- [ ] Skip-to-content link on every page
- [ ] ARIA labels + landmark roles on all pages
- [ ] SEO `<title>` + meta description per page
- [ ] Responsive QA: mobile (375px), tablet (768px), desktop (1280px)
- [ ] Smooth page transitions
- [ ] `NotFound.jsx` 404 page

---

## 10. Accessibility & GIGW 3.0 Compliance

- Color contrast: ≥ 4.5:1 for body text, ≥ 3:1 for large text
- `lang="en"` on `<html>`, `lang="bn"` on all Bengali `<span>` elements
- `<table>` notice board: `<th scope="col">` for all columns
- All `<img>` tags have descriptive `alt` text
- Focus ring: `focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`
- Font resizer stores to `localStorage` and applies on mount
- All interactive elements keyboard-navigable

---

## 11. Key Design Patterns

| Pattern | Components |
|---|---|
| **Bento Grid** | `NewsEventsBento`, `AboutBento`, `FacilitiesGrid` |
| **Horizontal Scroll Strip** | `GalleryStrip` |
| **Marquee Ticker** | `Marquee` (CSS animation) |
| **Glassmorphism Card** | `HeroSection` Principal snippet (`backdrop-blur-md bg-white/10`) |
| **Sticky Fixed Header** | `Navbar` (`fixed top-0 z-50`) |
| **Active Nav Link** | Saffron underline (`border-b-2 border-secondary-fixed`) |
| **Hover Lift** | Cards (`hover:-translate-y-1 transition-transform`) |
| **Left Accent Border** | Section titles (`border-l-4 border-secondary pl-4`) |
| **Image Zoom on Hover** | Gallery, News, Bento (`group-hover:scale-105`) |
| **Accordion FAQ** | `FAQAccordion` (`<details>/<summary>`) |
| **Search + Filter** | `FacultyFilter`, `NoticeFilter` |
| **Data Table** | `NoticeTable`, `FeeTable` |
| **Step Indicator** | `AdmissionSteps` |
| **Sidebar Layout** | `Faculty` page (`lg:pl-64`) |

---

## 12. Deferred — Backend Phase

These features use mock data now and will be API-connected later:

- Live notices, news, faculty from REST API
- Online admission form submission (POST)
- Fee payment gateway redirect
- Result/marksheet lookup by roll number
- Admin CRUD for gallery, news, notices
- Auth-protected admin panel

---

## 13. Figma Frame → Page Mapping

| Figma Directory | Page Route | Status |
|---|---|---|
| `durgapur_high_school_home/` | `/` | To Do |
| `about_us_durgapur_high_school_1/` | `/about` (merged) | To Do |
| `about_us_durgapur_high_school_2/` | `/about` (merged) | To Do |
| `academics_durgapur_high_school/` | `/academics` | To Do |
| `admissions_durgapur_high_school/` | `/admissions` | To Do |
| `faculty_directory_durgapur_high_school/` | `/faculty` | To Do |
| `gallery_durgapur_high_school/` | `/gallery` | To Do |
| `news_events_durgapur_high_school/` | `/news` | To Do |
| `notice_board_durgapur_high_school/` | `/notices` | To Do |
| `bharat_shiksha_civic/` | Design System (tokens only) | Reference |
| `glacier/` | Design System (glassmorphism ref) | Reference |