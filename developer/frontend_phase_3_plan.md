# Phase 3 — Page Assemblies & Full Component Implementation

> **Context**: Phases 0–2 established design tokens, mock data (7 JSON files), and 13 shared infrastructure components. All 9 page files exist as basic stubs with only `Breadcrumb` + `PageHero`. Phase 3 builds **every page-specific sub-component** and refactors each page to assemble them into pixel-perfect layouts matching the Figma HTML exports.

> **Source of Truth**: All structure, class names, image URLs, and copy are extracted from `client/public/assets/figma/stitch_durgapur_high_school_ux4g_redesign/*/code.html`.

---

## Global Implementation Rules

1. **Tailwind Only**: No inline CSS except `style={{ backgroundImage }}` for dynamic images. Use the extended design tokens from `tailwind.config.js`.
2. **Data Source**: Import from `../data/*.json`. Never hardcode content that exists in mock data files.
3. **Links**: Use `react-router-dom`'s `<Link>` for internal routes. External links use `<a>` with `target="_blank" rel="noopener noreferrer"`.
4. **Icons**: Use `<span className="material-symbols-outlined">icon_name</span>` — the CDN is already loaded.
5. **Accessibility**: All interactive elements need `aria-label` or visible text. Images need `alt` attributes. Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<table>`).
6. **Bengali Labels**: Many section headings have Bengali subtitles (e.g., `বিজ্ঞপ্তি ফলক`). Wrap these in `<span lang="bn" className="font-bengali-body text-on-surface-variant font-normal">`.
7. **Responsive**: Mobile-first. Use `md:` and `lg:` breakpoints. All grids collapse to single-column on mobile.
8. **Section Header Pattern**: Repeated across all pages — `border-l-4 border-secondary pl-4` accent strip with headline + Bengali subtitle.

---

## 3.1 — Home Page (`/`)

**Figma ref**: `durgapur_high_school_home/code.html`  
**Page file**: `client/src/pages/Home.jsx`  
**Current state**: Has inline hero + stats. Needs to be refactored into dedicated sub-components.

### Components to Create

#### 3.1.1 `components/home/HeroSection.jsx`
**Figma lines 189–220** — Full-width hero banner + glassmorphism principal snippet.

**Layout**:
- Outer: `<section className="relative w-full h-[600px] overflow-hidden flex items-end">`
- Background image: Absolute positioned `<img>` with `w-full h-full object-cover`
- Gradient overlay: `absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent`
- Content container: `relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-16 flex flex-col md:flex-row justify-between items-end gap-12`

**Left content block** (`max-w-2xl text-on-primary`):
- Tag badge: `bg-secondary px-3 py-1 rounded text-label-sm font-bold uppercase tracking-wider mb-4 inline-block` → "Established 1952"
- H2: `font-display-lg text-display-lg mb-4` → "Shaping Minds, Nurturing Futures"
- Paragraph: `font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-lg`
- CTAs: Two buttons — "Apply Online" (solid `bg-secondary-container`) and "View Prospectus" (outline `border-2 border-white/30`)

**Right glassmorphism card** (Principal snippet):
- Container: `bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-sm flex gap-4 items-center`
- Photo: `w-24 h-24 rounded-full border-4 border-secondary-fixed object-cover`
- Name: `font-headline-md text-headline-md`
- Label: `text-label-sm text-secondary-fixed uppercase font-bold tracking-tighter` → "Principal's Message"
- Quote: `font-body-md text-body-md text-white/80 line-clamp-2 mt-2`
- Link: `text-secondary-fixed font-bold hover:underline mt-2 inline-block`

**Data**: Hero image URL hardcoded from Figma. Principal data from `faculty.json` (first entry or dedicated principal field).

---

#### 3.1.2 `components/home/QuickAccessGrid.jsx`
**Figma lines 221–247** — 4 quick-access action cards.

**Layout**: `<section className="py-16 bg-surface px-margin-desktop">` → `max-w-container-max mx-auto` → `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter`

**Each card**:
```
group bg-white p-8 border border-outline-variant rounded-xl shadow-sm
hover:shadow-md transition-all cursor-pointer border-l-4 border-l-primary
hover:border-l-secondary
```
- Icon: `material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform`
- Title: `font-headline-md text-headline-md mb-2`
- Description: `text-ash-gray font-label-md`

**Static data array** (4 items):
| Icon | Title | Description | Link |
|---|---|---|---|
| `person_add` | Online Admission | Start your journey with us... | `/admissions` |
| `payments` | Pay Fees | Secure and convenient... | `#` |
| `description` | Results | Access board and internal... | `#` |
| `auto_stories` | Syllabus | Download latest academic... | `/academics` |

---

#### 3.1.3 `components/home/NoticeBoardHome.jsx`
**Figma lines 248–334** — Split section: Notice Board (1/3) + Stats & Welcome (2/3).

**Outer section**: `py-20 bg-surface-dim px-margin-desktop` → `max-w-container-max mx-auto flex flex-col lg:flex-row gap-16`

**Left column** (`w-full lg:w-1/3`):
- Section header with "Notice Board" + Bengali `বিজ্ঞপ্তি ফলক` and "View All" link
- Scrollable card list: `bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm h-[500px] flex flex-col` → `overflow-y-auto p-4 flex flex-col gap-4`
- Each notice item: `p-4 bg-surface rounded-lg border-b border-outline-variant hover:bg-surface-container-low transition-colors group cursor-pointer`
  - Date: `text-label-sm font-bold text-secondary`
  - Title: `font-bold text-on-surface mt-1 group-hover:text-primary transition-colors`
  - "New" badge (conditional): `inline-block mt-2 px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase`

**Data**: Import `notices.json`, slice first 5 notices sorted by date, show "New" badge if notice is `isPinned`.

**Right column** (`flex-grow`):
- "Excellence in Numbers" header + Bengali subtitle + description paragraph
- `<StatsGrid />` component (already built)
- Two image showcase cards in `grid grid-cols-1 md:grid-cols-2 gap-gutter mt-12`:
  - Each: `relative rounded-2xl overflow-hidden h-64 group cursor-pointer shadow-xl`
  - Image with `group-hover:scale-110 transition-transform duration-700`
  - Overlay: `absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6`
  - Title in white + description in `text-white/80`

---

#### 3.1.4 `components/home/NewsEventsBento.jsx`
**Figma lines 336–377** — News & Events bento grid.

**Section**: `py-20 bg-surface px-margin-desktop` → `max-w-container-max mx-auto`

**Header row**: `flex items-end justify-between mb-12`
- Section title with Bengali subtitle
- "Browse All Stories" button: `bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors shadow-lg flex items-center gap-2`

**Bento grid**: `grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]`
- **Featured card** (`md:col-span-8 md:row-span-2`): Full bleed image with gradient overlay and "Spotlight" badge
  - Badge: `bg-secondary text-white px-3 py-1 rounded-full text-label-sm font-bold w-fit mb-4`
  - Title in white `text-3xl font-bold`
- **Event card** (`md:col-span-4 md:row-span-1`): Solid `bg-secondary-container rounded-3xl p-8` with background icon `text-[180px] group-hover:rotate-12`
  - "Upcoming" label + event name + calendar date
- **Action card** (`md:col-span-4 md:row-span-1`): Image with dark overlay and bold title

**Data**: Import `news.json` (featured item) and `events.json` (first upcoming event).

---

#### 3.1.5 `components/home/GalleryStrip.jsx`
**Figma lines 378–393** — Horizontal scrollable gallery strip.

**Section**: `py-20 bg-surface-dim overflow-hidden`
- Header: `max-w-container-max mx-auto px-margin-desktop mb-8` with "Gallery" + Bengali
- Scroll container: `flex gap-4 px-4 overflow-x-auto pb-8` with CSS `scrollbar-hide`/`no-scrollbar`
- Each image: `h-64 w-96 rounded-2xl object-cover shrink-0 hover:scale-105 transition-transform cursor-pointer shadow-md`

**Data**: Import `gallery.json`, filter photos only, show first 5.

---

### Home.jsx Assembly

```jsx
import HeroSection from '../components/home/HeroSection';
import QuickAccessGrid from '../components/home/QuickAccessGrid';
import NoticeBoardHome from '../components/home/NoticeBoardHome';
import NewsEventsBento from '../components/home/NewsEventsBento';
import GalleryStrip from '../components/home/GalleryStrip';
import Marquee from '../components/common/Marquee';

const Home = () => (
  <div>
    <Marquee />
    <HeroSection />
    <QuickAccessGrid />
    <NoticeBoardHome />
    <NewsEventsBento />
    <GalleryStrip />
  </div>
);
```

---

## 3.2 — About Us Page (`/about`)

**Figma ref**: `about_us_durgapur_high_school_1/code.html`  
**Page file**: `client/src/pages/About.jsx`

### Components to Create

#### 3.2.1 `components/about/AboutBento.jsx`
**Figma lines 173–206** — History, Vision, Mission bento grid.

**Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8`

- **History card** (`md:col-span-2`): `bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm hover:shadow-md`
  - Icon badge: `h-12 w-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary` → `history` icon
  - Title: `font-headline-md text-headline-md text-primary` → "Our Rich History"
  - Body text: Full paragraph from Figma about founding in 1954

- **Vision card**: `bg-primary text-on-primary p-8 rounded-xl shadow-lg`
  - Icon: `material-symbols-outlined text-secondary-fixed` → `visibility`
  - Title: "Our Vision"
  - Body text (opacity-90)

- **Mission card**: `bg-secondary text-on-secondary p-8 rounded-xl shadow-lg`
  - Icon: `target`
  - Title: "Our Mission"

---

#### 3.2.2 `components/about/PrincipalMessage.jsx`
**Figma lines 207–224** — Principal profile with photo and message.

**Layout**: `bg-white rounded-xl overflow-hidden border border-outline-variant flex flex-col md:flex-row shadow-sm`
- **Photo** (`md:w-1/3`): `w-full h-full object-cover`
- **Content** (`md:w-2/3 p-10 flex flex-col justify-center`):
  - Label: `font-label-md text-label-md text-secondary font-bold mb-2 uppercase tracking-widest` → "Message from the Principal"
  - Name: `font-headline-lg text-headline-lg text-primary mb-4` → "Dr. S. K. Mukherjee"
  - Quote in italics + body paragraph
  - Credential badges: `bg-surface-container-high px-4 py-2 rounded-lg text-primary font-bold font-label-md`

**Data**: Principal from `faculty.json`.

---

#### 3.2.3 `components/about/GoverningBody.jsx`
**Figma lines 225–269** — School Management Committee table.

**Header**: Centered `font-headline-lg text-headline-lg text-primary mb-2` → "School Management Committee"
**Table**: `overflow-x-auto rounded-xl border border-outline-variant shadow-sm`
- `<table className="w-full text-left border-collapse">`
- `<thead className="bg-surface-container-high text-primary font-bold">` with columns: Name, Designation, Role, Tenure Since
- `<tbody className="divide-y divide-outline-variant font-body-md">` with hover row: `hover:bg-surface-container-low transition-colors`

**Data**: Static array (from Figma): 4 members with Name, Designation, Role, Tenure.

---

#### 3.2.4 `components/about/Infrastructure.jsx`
**Figma lines 270–299** — Infrastructure highlights (3 image cards).

**Header**: `font-headline-lg text-headline-lg text-primary mb-10 border-l-4 border-secondary pl-4` → "Infrastructure & Facilities"

**Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8`

Each card:
```
group relative bg-white rounded-xl overflow-hidden border border-outline-variant
shadow-sm hover:shadow-xl transition-all
```
- Image div: `h-48 bg-cover bg-center`
- Content: `p-6` with `font-headline-md text-headline-md text-primary mb-2` title + description

Cards: Modern Laboratories, Central Library, Sports Complex (with images from Figma).

---

#### 3.2.5 `components/about/AccreditationBadges.jsx`
**Figma lines 300–325** — Government recognition badges strip.

**Section**: `bg-surface-container-low py-16`
**Layout**: `max-w-7xl mx-auto px-6 text-center`
- Title: `font-label-md text-label-md text-ash-gray uppercase tracking-widest mb-10` → "Government Recognition & Accreditations"
- Badges flex: `flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity`
- Each badge: `flex flex-col items-center gap-3` → circular icon container `h-20 w-20 bg-white rounded-full` + label
- Badges: WBBSE, WBCHSE, GIGW 3.0

---

### About.jsx Assembly

```jsx
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import AboutBento from '../components/about/AboutBento';
import PrincipalMessage from '../components/about/PrincipalMessage';
import GoverningBody from '../components/about/GoverningBody';
import Infrastructure from '../components/about/Infrastructure';
import AccreditationBadges from '../components/about/AccreditationBadges';

// Section flow: Breadcrumb → Hero → AboutBento → PrincipalMessage → GoverningBody → Infrastructure → AccreditationBadges
```

---

## 3.3 — Academics Page (`/academics`)

**Figma ref**: `academics_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/Academics.jsx`

### Components to Create

#### 3.3.1 `components/academics/CurriculumCard.jsx`
**Figma lines 183–213** — Bento card showing Secondary + Higher Secondary curriculum.

**Container**: `md:col-span-8 bg-surface-container-low p-8 rounded-xl border border-outline-variant`
- Header with `menu_book` icon + "Curriculum Structure"
- Two-column grid (`md:grid-cols-2 gap-8`):
  - **Secondary (V–X)**: Bullet dot `w-2 h-2 rounded-full bg-secondary` + title + description + checklist items with `check_circle` icon in `text-success`
  - **Higher Secondary (XI–XII)**: Same pattern

---

#### 3.3.2 `components/academics/ResourcesCard.jsx`
**Figma lines 214–234** — Syllabus download sidebar.

**Container**: `md:col-span-4 bg-primary text-on-primary p-8 rounded-xl shadow-lg flex flex-col justify-between`
- Title: "Resources" + description
- Download links: `flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all border border-white/20` with `download` icon

---

#### 3.3.3 `components/academics/DepartmentCards.jsx`
**Figma lines 235–267** — 3 department cards (Science, Arts, Commerce).

**Grid**: `grid grid-cols-1 md:grid-cols-3 gap-6`

Each card:
- Icon badge: `w-12 h-12 bg-[themed-container] rounded-lg flex items-center justify-center mb-4`
  - Science: `bg-secondary-container text-on-secondary-container` + `science` icon
  - Arts: `bg-primary-fixed text-on-primary-fixed-variant` + `history_edu` icon
  - Commerce: `bg-tertiary-fixed text-on-tertiary-fixed-variant` + `payments` icon
- Title, description, "View Faculty →" link

---

#### 3.3.4 `components/academics/AcademicCalendar.jsx`
**Figma lines 268–308** — Academic calendar timeline.

**Container**: `md:col-span-7 bg-surface-container-high p-8 rounded-xl border border-outline-variant`
- Header with "Full Calendar" button
- Timeline items: `flex items-start gap-4 p-4 bg-white rounded-lg border-l-4 border-secondary`
  - Date column: `text-center min-w-[60px]` with bold day number + uppercase month label
  - Event details: title + description

**Data**: Import `events.json`.

---

#### 3.3.5 `components/academics/ExamResultsCards.jsx`
**Figma lines 309–327** — Two stacked cards: Examination Rules + Results Portal.

**Container**: `md:col-span-5 flex flex-col gap-6`
- **Exam Rules**: White card with `assignment_late` icon in `bg-error-container text-on-error-container` circle
- **Results Portal**: `bg-secondary-container` card with `emoji_events` icon and "Check Results" CTA button

---

#### 3.3.6 `components/academics/FacultyLinkBanner.jsx`
**Figma lines 329–341** — Full-width CTA banner linking to faculty page.

**Layout**: `mt-12 bg-primary-container text-on-primary-container p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6`
- Photo circle + text block + "Faculty Directory" button (`bg-white text-primary`)

---

### Academics.jsx Assembly

The entire page body is a bento grid: `grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min`

```jsx
// Section flow: Breadcrumb → Hero → Bento Grid containing:
// [CurriculumCard (8col)] [ResourcesCard (4col)]
// [DepartmentCards (12col)]
// [AcademicCalendar (7col)] [ExamResultsCards (5col)]
// FacultyLinkBanner (outside grid, full width)
```

---

## 3.4 — Admissions Page (`/admissions`)

**Figma ref**: `admissions_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/Admissions.jsx`

### Components to Create

#### 3.4.1 `components/admissions/EligibilityCard.jsx`
**Figma lines 221–245** — 4 eligibility criteria sub-cards in 2×2 grid.

**Container**: `md:col-span-8 rounded-xl p-8 shadow-sm border border-outline-variant`
- Header with `verified` icon + "Eligibility Criteria"
- Grid: `grid grid-cols-1 sm:grid-cols-2 gap-6`
- Each criterion: `p-4 bg-surface-container rounded-lg border-l-4 border-[color]`
  - Age (primary), Academic (secondary), Residency (info), Special Categories (success)

**Data**: Import `admissions.json` → `eligibility` array.

---

#### 3.4.2 `components/admissions/ImportantDates.jsx`
**Figma lines 246–270** — Key dates sidebar card.

**Container**: `md:col-span-4 bg-primary text-on-primary rounded-xl p-8 shadow-lg`
- Header with `event` icon (in `text-secondary-fixed`)
- List items: `flex flex-col border-b border-on-primary/20 pb-3`
  - Label: `font-label-sm text-label-sm text-secondary-fixed uppercase font-bold`
  - Date: `font-headline-md text-headline-md`

**Data**: Import `admissions.json` → `importantDates` array.

---

#### 3.4.3 `components/admissions/AdmissionSteps.jsx`
**Figma lines 271–301** — Step-by-step horizontal process.

**Container**: `md:col-span-12 py-8`
- Title: `font-headline-lg text-headline-lg text-center mb-12 text-primary`
- Steps row: `flex flex-col md:flex-row gap-8 items-start relative`
- Connector line: `hidden md:block absolute top-12 left-0 right-0 h-1 bg-surface-container-high -z-10`
- Each step: `flex-1 flex flex-col items-center text-center`
  - Number circle: `w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl mb-4 border-4 border-surface ring-4 ring-primary/20`
  - Title + description

**Data**: Import `admissions.json` → `applicationSteps` array.

---

#### 3.4.4 `components/admissions/DocumentChecklist.jsx`
**Figma lines 302–334** — Required documents checklist.

**Container**: `md:col-span-5 rounded-xl p-8 border border-outline-variant`
- Header with `task_alt` icon
- Checklist: Each item: `flex items-start gap-3` with `check_circle` icon in `text-success`

**Data**: Import `admissions.json` → `documentChecklist` array.

---

#### 3.4.5 `components/admissions/ApplicationCTA.jsx`
**Figma lines 335–370** — Application preview form.

**Container**: `md:col-span-7 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant shadow-inner`
- Title: "Application Preview Form"
- Form grid: `grid grid-cols-1 sm:grid-cols-2 gap-4`
- Inputs: `w-full p-2 border border-outline rounded focus:ring-2 focus:ring-primary focus:outline-none transition-all`
- Fields: Full Name (text), DOB (date), Guardian's Name (text), Class (select), Address (textarea span-2)
- Declaration checkbox + Submit button: `w-full py-3 bg-primary text-on-primary rounded-lg font-bold`

---

#### 3.4.6 `components/admissions/FAQAccordion.jsx`
**Figma lines 371–403** — Collapsible FAQ items.

**Container**: `md:col-span-12 mt-12`
- Title: `font-headline-md text-headline-md text-center mb-8`
- Max-width wrapper: `space-y-4 max-w-3xl mx-auto`
- Each FAQ: `<details>` element with `group border border-outline-variant rounded-lg bg-surface-container overflow-hidden`
  - `<summary>`: `flex justify-between items-center p-4 cursor-pointer hover:bg-surface-variant transition-colors`
    - Question text + `expand_more` icon with `transition-transform group-open:rotate-180`
  - Answer: `p-4 bg-white font-body-md text-body-md text-on-surface-variant border-t border-outline-variant`

**Data**: Import `admissions.json` → `faq` array.

---

### Admissions.jsx Assembly

```jsx
// Bento grid: grid grid-cols-1 md:grid-cols-12 gap-gutter
// [EligibilityCard (8col)] [ImportantDates (4col)]
// [AdmissionSteps (12col)]
// [DocumentChecklist (5col)] [ApplicationCTA (7col)]
// [FAQAccordion (12col)]
```

---

## 3.5 — Faculty Directory Page (`/faculty`)

**Figma ref**: `faculty_directory_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/Faculty.jsx`

> **IMPORTANT**: This page has a **unique layout** with a fixed left `<Sidebar>` (already built in Phase 2) and the main content in `lg:pl-64`. The existing shared `Sidebar` component should be rendered here.

### Components to Create

#### 3.5.1 `components/faculty/FacultyFilter.jsx`
**Figma lines 199–225** — Search + department filter bar.

**Container**: `bg-white p-6 rounded-xl border border-outline-variant shadow-sm mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end`
- **Search** (`md:col-span-5`): Text input with `search` icon prefix
- **Department filter** (`md:col-span-4`): `<select>` with options: All, Science, Humanities, Commerce, Language, Physical Education
- **Apply button** (`md:col-span-3`): `w-full bg-primary text-on-primary py-2.5 rounded-lg font-bold`

**Props**: `onSearchChange`, `onDepartmentChange`, `onApply`, `selectedDepartment`

---

#### 3.5.2 `components/faculty/FacultyCard.jsx`
**Figma lines 228–255** — Individual faculty member card.

**Container**: `bg-white border border-outline-variant rounded-xl overflow-hidden group` with hover: `hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`
- **Photo section** (`h-48 relative overflow-hidden bg-surface-container`):
  - Image with `group-hover:scale-105 transition-transform duration-500`
  - Optional badge (H.O.D / Awardee): `absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm`
- **Info section** (`p-6`):
  - Department label: `text-label-sm text-secondary font-bold uppercase tracking-widest mb-1`
  - Name: `font-headline-md text-headline-md text-primary mb-1`
  - Designation: `text-body-md text-on-surface-variant mb-4`
  - Divider: `border-t border-outline-variant pt-4`
  - Qualification: `school` icon + text
  - Experience: `history_edu` icon + text
  - "View Profile" button: `mt-6 w-full border border-primary text-primary py-2 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-colors`

**Props**: `faculty` object (from `faculty.json`).

---

#### 3.5.3 `components/faculty/FacultyGrid.jsx`
**Figma lines 226–400+** — Grid container rendering filtered faculty cards.

**Grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter`
- Maps over filtered faculty array → renders `<FacultyCard>` for each

**Props**: `facultyList` (filtered array).

---

### Faculty.jsx Assembly

```jsx
// Layout: Sidebar (desktop) + Main content (lg:pl-64)
// Inside main: Breadcrumb → Header → FacultyFilter → FacultyGrid → Pagination
```

---

## 3.6 — Gallery Page (`/gallery`)

**Figma ref**: `gallery_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/Gallery.jsx`

### Components to Create

#### 3.6.1 `components/gallery/GalleryTabs.jsx`
**Figma lines 163–177** — Sticky filter bar with category pill buttons.

**Container**: `sticky top-24 bg-surface z-40 px-margin-desktop py-6 border-b border-outline-variant/30 flex items-center justify-between overflow-x-auto`
- Filter pills: `flex gap-4 min-w-max`
  - Active: `px-6 py-2 rounded-full bg-primary-container text-on-primary font-bold font-label-md shadow-sm`
  - Inactive: `px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-container transition-all`
- Categories: All Photos, Sports, Annual Day, Laboratories, Infrastructure, Cultural Events
- Year filter indicator: `flex items-center gap-2 text-ash-gray ml-8` with `filter_list` icon

**Props**: `activeCategory`, `onCategoryChange`, `categories` array.

---

#### 3.6.2 `components/gallery/PhotoGrid.jsx`
**Figma lines 178–234** — Bento-style photo grid with feature image.

**Grid**: `grid grid-cols-1 md:grid-cols-12 gap-gutter`
- **Feature image** (`md:col-span-8 md:row-span-2`): `h-[500px]` with hover overlay showing category label + caption
- **Secondary images** (`md:col-span-4`): `h-[238px]` each with hover zoom icon overlay
- **Regular grid** (`md:col-span-3` × 4): `h-[300px]` each

Each image has:
- Hover overlay: `absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`
- Zoom icon: `material-symbols-outlined text-white text-4xl` → `zoom_in`
- Click → opens `<Lightbox>` (already built)

**Props**: `photos` array (from `gallery.json`), `onPhotoClick`

"Load More" button: `group flex items-center gap-2 px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all`

---

#### 3.6.3 `components/gallery/VideoGrid.jsx`
**Figma lines 236–300+** — Video gallery section with dark theme.

**Section**: `bg-primary py-20 px-margin-desktop text-on-primary overflow-hidden relative`
- Atmospheric blur: `absolute -right-20 -top-20 w-96 h-96 bg-primary-container rounded-full opacity-30 blur-3xl`
- Header: "Event Videos" + description + "Visit YouTube Channel" link
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-gutter`
- Each video card: `relative rounded-xl overflow-hidden group cursor-pointer`
  - Thumbnail: `h-52 object-cover`
  - Play button overlay: `absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all` → `play_circle` icon `text-6xl text-white/80`
  - Info bar: `p-4` with title + `play_arrow` icon

**Data**: Import `gallery.json`, filter `isVideo: true`.

---

### Gallery.jsx Assembly

```jsx
// Section flow: Header section (breadcrumb + title) → GalleryTabs (sticky) → PhotoGrid → VideoGrid → Lightbox (portal)
```

---

## 3.7 — News & Events Page (`/news`)

**Figma ref**: `news_events_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/News.jsx`

### Components to Create

#### 3.7.1 `components/news/FeaturedNews.jsx`
**Figma lines 173–214** — Featured hero + trending sidebar.

**Grid**: `grid grid-cols-1 lg:grid-cols-12 gap-gutter`

- **Featured hero** (`lg:col-span-8`): `h-[500px]` with gradient overlay, "Featured News" badge, headline, excerpt, "Read Full Story" CTA + share/bookmark icons
- **Trending sidebar** (`lg:col-span-4`): Two stacked cards:
  - **News card**: `bg-surface-container rounded-xl p-6 border border-outline-variant hover:shadow-md` with date, headline, excerpt, "View details" link
  - **CTA card**: `bg-primary text-on-primary rounded-xl p-6` with deadline info + "Apply Now" button + decorative background icon (`campaign` text-9xl text-white/5)

**Data**: Import `news.json`, find `isFeatured: true` item.

---

#### 3.7.2 `components/news/EventList.jsx`
**Figma lines 216–311** — Tabbed events section with event cards.

**Section**: `bg-surface-dim py-16`
- Header with tabs: Pill-style toggle (`flex bg-surface-container-high p-1 rounded-full w-fit`)
  - Active tab: `px-8 py-2 rounded-full font-bold bg-primary text-on-primary shadow-sm`
  - Inactive tab: `px-8 py-2 rounded-full font-bold text-on-surface-variant hover:text-primary`

**Event cards grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

Each event card:
- Image section (`h-48`): with `group-hover:scale-110 transition-transform duration-500`
- Date badge overlay: `absolute top-4 left-4 bg-white px-3 py-1 rounded shadow-md text-center` → day number + month
- Content: Title, location (with `location_on` icon), description, "Details >" link + share/calendar icons

**Data**: Import `events.json`.

"Download Full Academic Calendar (PDF)" button at bottom.

---

#### 3.7.3 `components/news/NewsletterCTA.jsx`
**Figma lines 313–336** — Newsletter subscription + social links banner.

**Container**: `bg-primary-container rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden`
- Decorative blurs: Two `absolute` circles with `blur-3xl`
- Content: Title + description + email input form
  - Input: `flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40`
  - Submit: `bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform`
- Social icons: 3 circular buttons `w-12 h-12 bg-white/10 rounded-full`

---

### News.jsx Assembly

```jsx
// Section flow: Breadcrumb → "Latest Updates" header → FeaturedNews → EventList → NewsletterCTA
```

---

## 3.8 — Notice Board Page (`/notices`)

**Figma ref**: `notice_board_durgapur_high_school/code.html`  
**Page file**: `client/src/pages/Notices.jsx`  
**Current state**: Already has substantial implementation with filter bar + table + pagination + archive. Needs review against Figma for exactness.

### Components to Create / Refactor

#### 3.8.1 `components/notices/NoticeFilter.jsx`
**Figma lines 165–197** — Search + category + year filter bar.

**Container**: `bg-surface-container border border-outline-variant rounded-lg p-6 mb-8`
- Row: `flex flex-col lg:flex-row gap-4 items-end`
- **Search** (`w-full lg:flex-1`): Input with `search` icon prefix, label "Search Notices"
- **Category** (`w-full lg:w-48`): Select with options: All Notices, Admission, Academics, Examination, General
- **Year** (`w-full lg:w-48`): Select with options: 2024-25, 2023-24, 2022-23
- **Apply button**: `bg-primary text-on-primary px-8 py-3 rounded-lg font-bold flex items-center gap-2`

---

#### 3.8.2 `components/notices/NoticeTable.jsx`
**Figma lines 198–304** — Tabulated notice list with pagination.

**Table wrapper**: `bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm mb-12`
- `<table className="w-full text-left border-collapse">`
- `<thead>`: `bg-primary-container text-on-primary-container font-label-md` → Date | Notice Title | Category | Action
- `<tbody>`: Each row `hover:bg-surface-container transition-colors`
  - Date: `text-ash-gray font-label-md whitespace-nowrap`
  - Title: `font-bold text-primary hover:underline` with optional `<span>` "New" badge: `bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded uppercase`
  - Category: Color-coded pill badges (Admission=secondary, Examination=primary, General=surface-variant, Academics=tertiary-fixed)
  - Download: `inline-flex items-center gap-1 text-primary font-bold` with `download` icon + file size

**Pagination bar**: `bg-surface-container-low px-6 py-4 flex items-center justify-between border-t border-outline-variant`
- "Showing 1 to 5 of 124 notices" text
- Page buttons: current = `bg-primary text-on-primary rounded font-bold`, others = `border border-outline-variant rounded hover:bg-surface-variant`

**Data**: Import `notices.json`.

---

#### 3.8.3 `components/notices/NoticeArchive.jsx`
**Figma lines 305–358** — Archive folder cards.

**Header**: "Notice Archive" + "View All Archive" link
**Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

Each archive card: `bg-surface-container-low border border-outline-variant p-6 rounded-lg hover:shadow-md transition-shadow`
- Folder icon + label: `flex items-center gap-2 text-ash-gray font-label-sm mb-3`
- Title: `font-bold text-primary mb-4`
- List of archived items with `description` icon
- "Access Folder" button: `w-full py-2 bg-surface-container-highest border border-outline-variant rounded text-primary font-bold`

---

### Notices.jsx Assembly

```jsx
// Section flow: Breadcrumb → Page Header → NoticeFilter → NoticeTable (with pagination) → NoticeArchive
```

> **NOTE**: The existing `Notices.jsx` (6.6KB) may already contain some of these sections inline. Refactor by extracting into the 3 sub-components above and importing them.

---

## File Matrix Summary

| Page | New Components | Component Directory |
|---|---|---|
| Home | `HeroSection`, `QuickAccessGrid`, `NoticeBoardHome`, `NewsEventsBento`, `GalleryStrip` | `components/home/` |
| About | `AboutBento`, `PrincipalMessage`, `GoverningBody`, `Infrastructure`, `AccreditationBadges` | `components/about/` |
| Academics | `CurriculumCard`, `ResourcesCard`, `DepartmentCards`, `AcademicCalendar`, `ExamResultsCards`, `FacultyLinkBanner` | `components/academics/` |
| Admissions | `EligibilityCard`, `ImportantDates`, `AdmissionSteps`, `DocumentChecklist`, `ApplicationCTA`, `FAQAccordion` | `components/admissions/` |
| Faculty | `FacultyFilter`, `FacultyCard`, `FacultyGrid` | `components/faculty/` |
| Gallery | `GalleryTabs`, `PhotoGrid`, `VideoGrid` | `components/gallery/` |
| News | `FeaturedNews`, `EventList`, `NewsletterCTA` | `components/news/` |
| Notices | `NoticeFilter`, `NoticeTable`, `NoticeArchive` | `components/notices/` |

**Total**: 31 new sub-component files + 8 page file refactors.

---

## Verification Plan

### Automated
```bash
cd client && npm run build
```
Zero Vite compilation errors.

### Manual
1. `npm run dev` → Navigate all 9 routes
2. Verify section-by-section visual fidelity against Figma HTML files
3. Test responsive layouts at mobile (375px), tablet (768px), desktop (1280px)
4. Verify `<Lightbox>` opens on gallery photo click
5. Test FAQ accordion expand/collapse
6. Test Notice Board filter + pagination
7. Test Faculty filter by department
8. Verify all `<Link>` elements navigate correctly
9. Check Bengali text rendering in section headers

---

## Implementation Order (Recommended)

1. **Home** (5 components) — Highest visual impact, validates all design tokens
2. **About** (5 components) — Straightforward content sections
3. **Academics** (6 components) — Complex bento grid
4. **Admissions** (6 components) — Form + stepper + accordion
5. **Notices** (3 components) — Extract from existing 6.6KB stub
6. **Faculty** (3 components) — Filter + grid pattern
7. **Gallery** (3 components) — Bento grid + lightbox + video
8. **News** (3 components) — Featured hero + event cards + CTA
