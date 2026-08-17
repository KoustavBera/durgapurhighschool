# Implementation Plan - Durgapur High School Frontend Implementation

Implement the complete React + Vite SPA frontend for **Durgapur High School** based on the architectural specification in [`plan.md`](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/plan.md) and design references in `client/public/assets/figma/stitch_durgapur_high_school_ux4g_redesign`.

## User Review Required

> [!IMPORTANT]
> **Key Architectural & Implementation Decisions:**
> 1. **Tailwind CSS v3 Token Integration:** All color primitives (`primary`, `secondary`, `tertiary`, `surface-container-*`, etc.), typography presets (`display-lg`, `headline-lg`, `label-md`, etc.), and border radii will be extended in [`tailwind.config.js`](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/tailwind.config.js).
> 2. **Font & Icon Assets:** Google Fonts (Inter + Noto Sans) and Google Material Symbols Outlined CDN link will be added to [`index.html`](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/index.html).
> 3. **Accessibility & GIGW 3.0 Compliance:** Implementation includes font resizer (`A-`, `A`, `A+`), High-Contrast mode toggle, skip-to-content links, ARIA landmark roles, and Bengali `lang="bn"` wrappers.
> 4. **Mock Data Layer:** 7 structured JSON datasets in `client/src/data/` (`notices.json`, `news.json`, `faculty.json`, `gallery.json`, `admissions.json`, `stats.json`, `events.json`) to serve mock data client-side before backend integration.
> 5. **Routing Setup:** 9 pages integrated via `react-router-dom` v6 (`/`, `/about`, `/academics`, `/admissions`, `/faculty`, `/gallery`, `/news`, `/notices`, `*` 404).

## Open Questions

> [!NOTE]
> None at this stage. [`plan.md`](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/plan.md) provides an exhaustive specification for design tokens, component architecture, mock data schemas, and page layouts.

## Proposed Changes

### Phase 0 — Design Tokens & Core Setup

#### [MODIFY] [tailwind.config.js](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/tailwind.config.js)
- Extend theme colors: `primary` (#021541), `secondary` (#8f4e00), `tertiary`, `surface`, `surface-container-*`, `ash-gray`, etc.
- Extend font families: `display-lg`, `headline-lg`, `body-lg`, `label-md`, `bengali-body`.
- Extend font sizes with appropriate line heights, font weights, and letter spacing.
- Extend spacing and border radii tokens (`DEFAULT: 2px`, `lg: 4px`, `xl: 8px`, `full: 12px`).

#### [MODIFY] [index.html](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/index.html)
- Include Inter and Noto Sans Google Fonts link tags.
- Include Google Material Symbols Outlined stylesheet.
- Set page title to "Durgapur High School | Excellence in Education".

#### [MODIFY] [index.css](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/src/index.css)
- Add base `@tailwind` directives.
- Add marquee keyframe animations (`@keyframes marquee`).
- Add High-Contrast override utility classes and root font sizing rules for accessibility.

---

### Phase 1 — Mock Data Infrastructure

#### [NEW] `client/src/data/notices.json`
- Circulars & announcements schema: `id`, `date`, `title`, `category`, `pdfUrl`, `isPinned`, `academicYear`.

#### [NEW] `client/src/data/news.json`
- News & events schema: `id`, `date`, `title`, `excerpt`, `content`, `category`, `image`, `isFeatured`.

#### [NEW] `client/src/data/faculty.json`
- Faculty directory schema: `id`, `name`, `designation`, `department`, `qualification`, `photo`, `email`, `phone`.

#### [NEW] `client/src/data/gallery.json`
- Gallery schema: `id`, `title`, `category`, `url`, `thumb`, `isVideo`, `youtubeId`, `caption`.

#### [NEW] `client/src/data/admissions.json`
- Admissions details: application steps, eligibility criteria by class level, key dates, document checklist, FAQ list, and fee structure table.

#### [NEW] `client/src/data/stats.json`
- School statistics counters: student count, teacher count, lab count, pass percentages, smart classrooms.

#### [NEW] `client/src/data/events.json`
- Upcoming events timeline data.

---

### Phase 2 — Shared Infrastructure Components

#### [NEW] `client/src/components/common/UtilityBar.jsx`
- Accessibility toolbar: A-/A/A+ font size multiplier, high contrast mode toggle, and language selector (EN / BN).

#### [NEW] `client/src/components/common/Navbar.jsx`
- Fixed header with school logo, English & Bengali title, responsive navigation links with active state indicator, and hamburger toggle.

#### [NEW] `client/src/components/common/MobileMenu.jsx`
- Slide-over mobile navigation drawer for small screens.

#### [NEW] `client/src/components/common/Breadcrumb.jsx`
- Page hierarchy breadcrumb navigation element.

#### [NEW] `client/src/components/common/Footer.jsx`
- 4-column footer containing About summary, Quick links, Government portal links, contact address, and copyright note.

#### [NEW] `client/src/components/common/Marquee.jsx`
- Infinite scrolling announcement ticker with pause-on-hover functionality.

#### [NEW] `client/src/components/common/PageHero.jsx` & `PageHeader.jsx`
- Reusable hero banner and sub-page title section header components.

#### [NEW] `client/src/components/common/StatsGrid.jsx`
- Responsive 4-card metric display grid with hover elevation.

#### [NEW] `client/src/components/common/Pagination.jsx`
- Page numbers and Next/Previous navigation controls for lists and tables.

#### [NEW] `client/src/components/common/Lightbox.jsx`
- Accessible image/media modal lightbox view.

---

### Phase 3 — Page Assemblies & Routing

#### [NEW] `client/src/components/home/` components & [MODIFY] [Home.jsx](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/src/pages/Home.jsx)
- `HeroSection.jsx` (hero banner + glassmorphism Principal note), `QuickAccessGrid.jsx`, `NoticeBoardHome.jsx`, `NewsEventsBento.jsx`, `GalleryStrip.jsx`.

#### [NEW] `client/src/components/about/` components & `client/src/pages/About.jsx`
- `AboutBento.jsx`, `PrincipalMessage.jsx`, `GoverningBody.jsx`, `Infrastructure.jsx`.

#### [NEW] `client/src/components/academics/` components & `client/src/pages/Academics.jsx`
- `CurriculumCard.jsx`, `StreamCard.jsx`, `ExamSystem.jsx`, `FacilitiesGrid.jsx`, `AcademicCalendar.jsx`.

#### [NEW] `client/src/components/admissions/` components & `client/src/pages/Admissions.jsx`
- `AdmissionSteps.jsx`, `EligibilityCard.jsx`, `ImportantDates.jsx`, `DocumentChecklist.jsx`, `ApplicationCTA.jsx`, `FAQAccordion.jsx`, `FeeTable.jsx`.

#### [NEW] `client/src/components/faculty/` components & `client/src/pages/Faculty.jsx`
- `FacultyFilter.jsx`, `FacultyGrid.jsx`, `FacultyCard.jsx`, `Sidebar.jsx`.

#### [NEW] `client/src/components/gallery/` components & `client/src/pages/Gallery.jsx`
- `GalleryTabs.jsx`, `PhotoGrid.jsx`, `VideoGrid.jsx`.

#### [NEW] `client/src/components/news/` components & `client/src/pages/News.jsx`
- `FeaturedNews.jsx`, `NewsFilter.jsx`, `NewsCard.jsx`, `NewsGrid.jsx`, `EventList.jsx`.

#### [NEW] `client/src/components/notices/` components & [MODIFY] [Notices.jsx](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/src/pages/Notices.jsx)
- `NoticeFilter.jsx`, `NoticeTable.jsx`, `CircularList.jsx`.

#### [NEW] `client/src/pages/NotFound.jsx`
- 404 error view with return-to-home button.

#### [MODIFY] [App.jsx](file:///home/koustavbera/Code/Personal/resume_projects/others/durgapurhighschool/client/src/App.jsx)
- Configure `BrowserRouter`, `Routes`, and main shell layout wrapper with `UtilityBar`, `Navbar`, scroll restoration, and `Footer`.

---

## Verification Plan

### Automated Tests
- Run build test from `client/` directory:
  ```bash
  cd client && npm run build
  ```
- Ensure zero Vite compilation or bundle errors.

### Manual Verification
1. Launch local dev server (`npm run dev` inside `client/`).
2. Verify all 9 routes render with rich styling and data.
3. Test accessibility bar (Font Size adjust & High Contrast toggle).
4. Verify responsive mobile drawer menu & responsive grid layouts across viewports.
