# Phase 2 — Shared Infrastructure Components: Detailed Implementation Plan

> **Purpose:** This document serves as a pixel-accurate specification for sub-agents building each shared component in `client/src/components/common/`. Every class name, HTML structure, prop interface, and behavioral rule is extracted directly from the Figma HTML exports in `client/public/assets/figma/stitch_durgapur_high_school_ux4g_redesign/`.

---

## Quick Reference: Component Build Order & Dependencies

| # | Component | File | Dependencies | Used On |
|---|-----------|------|-------------|---------|
| 1 | UtilityBar | `UtilityBar.jsx` | None | All pages (Home, About, Academics, Admissions, Faculty, Gallery, News, Notices) |
| 2 | Navbar | `Navbar.jsx` | `MobileMenu.jsx`, `react-router-dom` | All pages |
| 3 | MobileMenu | `MobileMenu.jsx` | `react-router-dom` | All pages (< lg breakpoint) |
| 4 | Breadcrumb | `Breadcrumb.jsx` | `react-router-dom` | About, Academics, Admissions, Faculty, Gallery, News, Notices |
| 5 | Footer | `Footer.jsx` | `react-router-dom` | All pages |
| 6 | Marquee | `Marquee.jsx` | `notices.json` | Home, About |
| 7 | PageHero | `PageHero.jsx` | None | About, Academics, Admissions |
| 8 | PageHeader | `PageHeader.jsx` | None | Faculty, Notices |
| 9 | StatsGrid | `StatsGrid.jsx` | `stats.json` | Home, About |
| 10 | Pagination | `Pagination.jsx` | None | Faculty, News, Notices |
| 11 | Lightbox | `Lightbox.jsx` | ReactDOM Portal | Gallery |
| 12 | Sidebar | `Sidebar.jsx` | `react-router-dom` | Faculty |

**Build order:** 1 → 2+3 (parallel) → 4 → 5 → 6 → 7+8 (parallel) → 9 → 10 → 11 → 12

---

## 1. UtilityBar.jsx

### Source Reference
- **Home Figma** (lines 133–151): `bg-surface-container-highest`, `hidden md:flex`
- **Academics Figma** (lines 128–142): Integrated inside header as `bg-primary-container/20`

### Props
```js
// No props required. Uses internal state + localStorage.
```

### Exact HTML Structure (from Home Figma)
```
<div class="bg-surface-container-highest w-full px-margin-desktop py-2 
     flex justify-between items-center z-50 text-on-surface-variant 
     font-label-sm text-label-sm border-b border-outline-variant 
     hidden md:flex">
  <!-- Left side -->
  <div class="flex gap-4">
    <button> <icon "language" 16px/> English / বাংলা </button>
    <span class="text-outline-variant">|</span>
    <button> <icon "blind" 16px/> Screen Reader Access </button>
  </div>
  <!-- Right side -->
  <div class="flex gap-4 items-center">
    <div class="flex items-center gap-2 border-r border-outline-variant pr-4">
      <button class="px-2 py-0.5 hover:bg-outline-variant rounded" title="Decrease Font">A-</button>
      <button class="px-2 py-0.5 hover:bg-outline-variant rounded" title="Reset Font">A</button>
      <button class="px-2 py-0.5 hover:bg-outline-variant rounded" title="Increase Font">A+</button>
    </div>
    <div class="flex gap-2">
      <span class="material-symbols-outlined cursor-pointer hover:text-primary">contrast</span>
      <span class="material-symbols-outlined cursor-pointer hover:text-primary">search</span>
    </div>
  </div>
</div>
```

### Behavioral Rules
1. **Font Size Buttons (A-, A, A+):**
   - Read/write `data-font-size` attribute on `<html>` element
   - Values cycle through: `"small"` → `"normal"` → `"large"` → `"xlarge"`
   - Persist to `localStorage` key: `"dhs-font-size"`
   - On mount, read from localStorage and apply
2. **High Contrast Toggle (contrast icon):**
   - Toggle class `high-contrast` on `<html>` element
   - Persist to `localStorage` key: `"dhs-high-contrast"`
   - Active state: icon should visually indicate on (add a subtle bg)
3. **Language Button:** Placeholder for now — show label "English / বাংলা", no-op click.
4. **Visibility:** `hidden md:flex` — only visible on `md:` breakpoint and above.

---

## 2. Navbar.jsx

### Source Reference
- **Home Figma** (lines 152–175): `fixed top-0 md:top-[40px]`
- **About Figma** (lines 113–152): Includes inline accessibility buttons
- **Academics Figma** (lines 143–163): `"Academics"` active link style
- **News Figma** (lines 144–165): `"Student Corner"` active link style
- **Admissions Figma** (lines 149–174): `"Admissions"` active link style

### Props
```js
{
  // No explicit props needed.
  // Active link is derived from current route via useLocation().
}
```

### Exact HTML Structure (unified from all Figma pages)
```
<header class="fixed top-0 md:top-[40px] w-full z-50 flex flex-col items-center 
       bg-primary text-on-primary shadow-md border-b-4 border-secondary">
  <div class="w-full max-w-container-max flex items-center justify-between px-6 py-3">
    
    <!-- Logo + School Name -->
    <Link to="/" class="flex items-center gap-4">
      <img class="h-16 w-16 bg-white p-1 rounded-full border-2 border-secondary-fixed"
           src="/assets/icons/emblem.png" alt="National Emblem" />
      <div class="flex flex-col">
        <span class="font-headline-md text-headline-md font-bold leading-tight tracking-tight">
          Durgapur High School
        </span>
        <span class="font-bengali-body text-bengali-body leading-none text-secondary-fixed">
          দুর্গাপুর উচ্চ বিদ্যালয়
        </span>
        <span class="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-widest mt-1">
          Govt. of West Bengal
        </span>
      </div>
    </Link>
    
    <!-- Desktop Navigation Links (hidden on mobile, shown at lg) -->
    <nav class="hidden lg:flex items-center gap-8">
      <!-- Each link: -->
      <!-- Active:   "font-label-md text-label-md text-on-primary border-b-2 border-secondary-fixed pb-1" -->
      <!-- Inactive: "font-label-md text-label-md text-on-primary/90 hover:text-white transition-colors" -->
    </nav>
    
    <!-- Mobile Hamburger (shown below lg) -->
    <div class="flex items-center gap-4 lg:hidden">
      <span class="material-symbols-outlined text-3xl cursor-pointer" onClick={toggle}>menu</span>
    </div>
  </div>
</header>
```

### Navigation Items (unified across all pages)
```js
const NAV_ITEMS = [
  { label: "Home",           path: "/",           icon: "home" },
  { label: "About",          path: "/about",      icon: "school" },
  { label: "Academics",      path: "/academics",  icon: "menu_book" },
  { label: "Admissions",     path: "/admissions",  icon: "person_add" },
  { label: "Student Corner", path: "/notices",     icon: "description" },
  { label: "Gallery",        path: "/gallery",     icon: "photo_library" },
  { label: "Contact",        path: "#contact",     icon: "call" },
];
```

### Active Link Rules (from Figma)
- Active link CSS: `text-on-primary border-b-2 border-secondary-fixed pb-1`
- Inactive link CSS: `text-on-primary/90 hover:text-white transition-colors`
- Match active state using `useLocation().pathname.startsWith(item.path)`
- "Student Corner" is active for both `/notices` and `/news`

### Content Spacer
After Navbar, render a spacer div: `<div className="h-28 md:h-40" />`

---

## 3. MobileMenu.jsx

### Source Reference
- **About Figma** (lines 365–403): Full mobile drawer
- **Admissions Figma** (lines 175–194): Side nav variation

### Props
```js
{
  isOpen: boolean,      // Controls visibility
  onClose: () => void,  // Callback to close drawer
}
```

### Exact HTML Structure (from About Figma)
```
<!-- Backdrop -->
<div class="fixed inset-0 z-[60] bg-black/50" onClick={onClose}>
  <!-- Drawer -->
  <div class="h-screen w-64 bg-surface flex flex-col p-4 shadow-lg 
       transform transition-transform duration-300
       ${isOpen ? 'translate-x-0' : '-translate-x-full'}">
    
    <!-- Header with logo -->
    <div class="flex items-center gap-3 mb-8">
      <div class="h-10 w-10 bg-primary-container rounded-full overflow-hidden">
        <img src="/assets/icons/emblem.png" alt="Emblem" class="w-full h-full object-cover"/>
      </div>
      <div>
        <div class="font-label-md text-label-md font-bold text-primary">DHS</div>
        <div class="font-label-sm text-label-sm text-on-surface-variant">Govt of WB</div>
      </div>
    </div>
    
    <!-- Navigation Links -->
    <nav class="flex flex-col gap-2">
      <!-- Active link: -->
      <a class="flex items-center gap-3 p-3 bg-primary-container text-on-primary-container rounded-lg font-bold">
        <span class="material-symbols-outlined">{icon}</span>
        <span class="font-label-md text-label-md">{label}</span>
      </a>
      <!-- Inactive link: -->
      <a class="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant rounded-lg">
        <span class="material-symbols-outlined">{icon}</span>
        <span class="font-label-md text-label-md">{label}</span>
      </a>
    </nav>
    
    <!-- Bottom CTA -->
    <div class="mt-auto">
      <button class="w-full py-3 bg-primary text-on-primary rounded-lg font-bold font-label-md">
        Online Admission
      </button>
    </div>
  </div>
</div>
```

### Behavioral Rules
1. Mount/unmount or show/hide via `isOpen` prop with CSS transform animation
2. Close on backdrop click, close on Escape key, close on link click
3. When open, `document.body.style.overflow = 'hidden'`
4. Active link: match same as Navbar via `useLocation()`

---

## 4. Breadcrumb.jsx

### Source Reference
- **About Figma** (lines 155–161): Simple `Home › About Us`
- **Academics Figma** (lines 167–173): `Home > Academics` with home icon
- **Faculty Figma** (lines 186–192): Multi-level `Home > Academics > Faculty Directory`
- **Notice Figma** (lines 153–159): `Home > Student Corner > Notice Board`
- **Gallery Figma** (lines 153–158): `Home > Student Corner > Gallery`

### Props
```js
{
  items: Array<{
    label: string,   // "Home", "Academics", "Faculty Directory"
    href?: string,    // Link path (omit for last/current item)
  }>
}
```

### Exact HTML Structure (from Academics Figma — most complete)
```
<nav aria-label="Breadcrumb" 
     class="flex items-center gap-2 text-ash-gray font-label-md text-label-md mb-8">
  <!-- First item (Home) with icon -->
  <Link class="hover:text-primary transition-colors flex items-center gap-1" to="/">
    <span class="material-symbols-outlined text-[16px]">home</span> Home
  </Link>
  <span class="material-symbols-outlined text-[16px]">chevron_right</span>
  
  <!-- Middle items (if any) -->
  <Link class="hover:text-primary transition-colors" to="/academics">Academics</Link>
  <span class="material-symbols-outlined text-[16px]">chevron_right</span>
  
  <!-- Last item (current page, no link) -->
  <span class="text-on-surface font-bold">Faculty Directory</span>
</nav>
```

### Rules
- First item always shows `home` Material icon
- Separator is `chevron_right` Material icon at `text-[16px]`
- Last item: `text-on-surface font-bold` (no link)
- All other items: `hover:text-primary transition-colors` with `<Link>`
- Some Figma pages (About) use `›` character instead of icon — **standardize on `chevron_right` icon**

---

## 5. Footer.jsx

### Source Reference
- **Home Figma** (lines 394–458): Canonical 4-column footer
- **Faculty Figma** (lines 403–461): 4-column with contact address
- **Gallery Figma** (lines 304–349): 4-column with contact `<address>`
- **Notice Figma** (lines 360–396): 4-column with govt logos

### Exact HTML Structure (unified canonical from Home Figma)
```
<footer class="w-full bg-primary text-on-primary border-t-4 border-secondary-fixed">
  <div class="max-w-container-max mx-auto px-margin-desktop py-16 
       grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    
    <!-- Column 1: About -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <img class="h-10 w-10 brightness-0 invert" src="/assets/icons/emblem.png" alt="Emblem"/>
        <div>
          <h2 class="font-bold text-headline-md leading-none">Durgapur HS</h2>
          <p class="text-[10px] text-secondary-fixed uppercase tracking-widest font-bold">
            Government of West Bengal
          </p>
        </div>
      </div>
      <p class="font-body-md text-on-primary/70 mb-6">
        Empowering students through academic rigor, character building, 
        and digital literacy since 1952.
      </p>
      <div class="flex gap-4">
        <span class="material-symbols-outlined cursor-pointer hover:text-secondary-fixed">qr_code_2</span>
        <span class="material-symbols-outlined cursor-pointer hover:text-secondary-fixed">mail</span>
        <span class="material-symbols-outlined cursor-pointer hover:text-secondary-fixed">call</span>
      </div>
    </div>
    
    <!-- Column 2: Quick Links -->
    <div>
      <h4 class="font-bold text-lg mb-6 text-secondary-fixed">Quick Links</h4>
      <ul class="flex flex-col gap-3 text-on-primary/80 font-label-md">
        <li><Link class="hover:text-white hover:underline decoration-secondary-fixed">...</Link></li>
        <!-- Links: Online Admission, Exam Results, Staff Directory, Holiday List, Alumni Portal -->
      </ul>
    </div>
    
    <!-- Column 3: Government Portals -->
    <div>
      <h4 class="font-bold text-lg mb-6 text-secondary-fixed">Government Portals</h4>
      <ul class="flex flex-col gap-3 text-on-primary/80 font-label-md">
        <!-- Links: India.gov.in, West Bengal Portal, School Education Dept., Shikshashree, Kanyashree -->
      </ul>
    </div>
    
    <!-- Column 4: Contact Us -->
    <div>
      <h4 class="font-bold text-lg mb-6 text-secondary-fixed">Contact Us</h4>
      <p class="text-on-primary/80 font-label-md mb-2 flex items-start gap-2">
        <span class="material-symbols-outlined text-[20px]">location_on</span>
        Durgapur High School, GT Road,<br/>Durgapur, West Bengal - 713203
      </p>
      <p class="text-on-primary/80 font-label-md mb-2 flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">call</span>
        +91 343 254 6789
      </p>
      <p class="text-on-primary/80 font-label-md flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">mail</span>
        info@durgapurhighschool.edu.in
      </p>
    </div>
  </div>
  
  <!-- Bottom Bar -->
  <div class="border-t border-white/10 py-6 px-margin-desktop">
    <div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-label-sm font-label-sm text-on-primary/60">
        © {year} Durgapur High School. All Rights Reserved. Designed as per GIGW 3.0 Guidelines.
      </p>
      <div class="flex gap-6 text-label-sm font-label-sm text-on-primary/60">
        <a class="hover:text-white">RTI Disclosure</a>
        <a class="hover:text-white">Privacy Policy</a>
        <a class="hover:text-white">Accessibility Statement</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 6. Marquee.jsx

### Source Reference
- **Home Figma** (lines 178–188): Announcements ticker

### Props
```js
{
  items?: Array<string>  // Optional override. Default: import from notices.json
}
```

### Exact HTML Structure (from Home Figma)
```
<div class="bg-secondary-container text-on-secondary-container py-2 
     flex items-center w-full z-40 relative border-b border-outline-variant overflow-hidden">
  <!-- Fixed label -->
  <div class="bg-secondary text-on-secondary font-bold px-6 py-1 z-10 
       shadow-lg shrink-0 flex items-center gap-2">
    <span class="material-symbols-outlined text-[20px]">campaign</span> Latest Notices
  </div>
  <!-- Scrolling content (uses CSS class from index.css) -->
  <div class="marquee-container flex-grow font-label-md">
    <div class="marquee-content px-4">
      {items joined with " | " separators, duplicated for seamless loop}
    </div>
  </div>
</div>
```

### Behavioral Rules
1. Uses the `.marquee-container` and `.marquee-content` CSS classes defined in `index.css`
2. **Pause on hover** is handled by CSS: `.marquee-container:hover .marquee-content { animation-play-state: paused; }`
3. Content must be **duplicated** (render items twice) so the scroll loops seamlessly via `translateX(-50%)`
4. Default data: import first 5 notice titles from `client/src/data/notices.json`, prefix with emoji: `🚀`, `🎓`, `📁`, `⚽`, `💻`
5. Items separated by ` | ` pipe with spaces

---

## 7. PageHero.jsx

### Source Reference
- **About Figma** (lines 163–171): `h-[400px]`, gradient overlay, title + subtitle
- **Academics Figma** (lines 175–180): `h-64 md:h-80`, centered text, blur overlay
- **Admissions Figma** (lines 198–210): `h-[300px] md:h-[400px]`, left-aligned, CTA button

### Props
```js
{
  title: string,            // "Educating Generations Since 1954"
  subtitle?: string,        // Description paragraph
  bgImage: string,          // URL or path to background image
  height?: string,          // Default: "h-[400px]"  
  align?: "left" | "center", // Default: "left"
  children?: ReactNode,     // For custom CTA buttons
}
```

### Exact HTML Structure (About variant — canonical)
```
<section class="relative rounded-xl overflow-hidden ${height} flex items-end">
  <!-- Background Image -->
  <div class="absolute inset-0 bg-cover bg-center" 
       style={{ backgroundImage: `url('${bgImage}')` }} />
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
  <!-- Content -->
  <div class="relative z-10 p-12 w-full ${align === 'center' ? 'text-center' : ''}">
    <h2 class="font-display-lg text-display-lg text-white mb-2">{title}</h2>
    {subtitle && (
      <p class="font-body-lg text-body-lg text-on-primary/90 max-w-2xl 
         ${align === 'center' ? 'mx-auto' : ''}">{subtitle}</p>
    )}
    {children}
  </div>
</section>
```

### Variant Notes
- **About:** `items-end`, `p-12`, left-aligned, `rounded-xl`
- **Academics:** `items-center justify-center`, centered text, `backdrop-blur-sm` overlay
- **Admissions:** `flex-col justify-center`, left-aligned, includes CTA button child

---

## 8. PageHeader.jsx

### Source Reference
- **Faculty Figma** (lines 193–198): Title + description block
- **Notice Figma** (lines 161–164): Title + compliance note

### Props
```js
{
  title: string,        // "Faculty Directory"
  subtitle?: string,    // Description paragraph
  titleColor?: string,  // Default: "text-primary"
}
```

### Exact HTML Structure (from Faculty Figma)
```
<div class="mb-12">
  <h2 class="font-headline-lg text-headline-lg mb-2 ${titleColor}">{title}</h2>
  {subtitle && (
    <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">{subtitle}</p>
  )}
</div>
```

---

## 9. StatsGrid.jsx

### Source Reference
- **Home Figma** (lines 295–316): `grid-cols-2 md:grid-cols-4`, `bg-primary` cards

### Props
```js
{
  stats?: Array<{
    icon: string,    // Material icon name: "groups", "school", "science", "desktop_windows"
    value: string,   // "2500+"
    label: string,   // "Students"
  }>
}
```

### Exact HTML Structure (from Home Figma)
```
<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map(stat => (
    <div class="bg-primary text-on-primary p-6 rounded-2xl flex flex-col items-center 
         text-center shadow-lg hover:translate-y-[-5px] transition-transform">
      <span class="material-symbols-outlined text-4xl text-secondary-fixed mb-2">{stat.icon}</span>
      <span class="text-3xl font-bold">{stat.value}</span>
      <span class="text-label-sm uppercase font-bold tracking-widest text-on-primary/60">
        {stat.label}
      </span>
    </div>
  ))}
</div>
```

### Default Data (from `stats.json`)
```js
[
  { icon: "groups",          value: "2500+", label: "Students" },
  { icon: "school",          value: "85+",   label: "Expert Faculty" },
  { icon: "science",         value: "12",    label: "Modern Labs" },
  { icon: "desktop_windows", value: "24",    label: "Smart Class" },
]
```

---

## 10. Pagination.jsx

### Source Reference
- **Notice Figma** (lines 292–303): Inline pagination with "Showing X to Y of Z"
- **Faculty Figma** (lines 386–400): Centered pagination with square buttons

### Props
```js
{
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
  totalItems?: number,     // For "Showing X to Y of Z" label
  itemsPerPage?: number,   // Default: 5
  variant?: "inline" | "centered",  // Default: "centered"
}
```

### Exact HTML Structure — Centered Variant (from Faculty Figma)
```
<div class="mt-16 flex items-center justify-center gap-4">
  <!-- Previous -->
  <button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-high 
         transition-colors disabled:opacity-50" disabled={currentPage === 1}>
    <span class="material-symbols-outlined">navigate_before</span>
  </button>
  <!-- Page Numbers -->
  <div class="flex items-center gap-2">
    <!-- Active page: -->
    <button class="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold">{n}</button>
    <!-- Inactive page: -->
    <button class="w-10 h-10 rounded-lg border border-outline-variant 
           hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">{n}</button>
    <!-- Ellipsis: -->
    <span class="px-2">...</span>
  </div>
  <!-- Next -->
  <button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-high 
         transition-colors disabled:opacity-50" disabled={currentPage === totalPages}>
    <span class="material-symbols-outlined">navigate_next</span>
  </button>
</div>
```

### Exact HTML Structure — Inline Variant (from Notice Figma)
```
<div class="bg-surface-container-low px-6 py-4 flex items-center justify-between 
     border-t border-outline-variant">
  <p class="font-label-sm text-ash-gray">Showing {start} to {end} of {totalItems} notices</p>
  <div class="flex items-center gap-2">
    <button class="p-2 border border-outline-variant rounded hover:bg-surface-variant 
           disabled:opacity-50" disabled={currentPage === 1}>
      <span class="material-symbols-outlined">chevron_left</span>
    </button>
    <!-- Active: "px-3 py-1 bg-primary text-on-primary rounded font-bold" -->
    <!-- Inactive: "px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant" -->
    <button class="p-2 border border-outline-variant rounded hover:bg-surface-variant">
      <span class="material-symbols-outlined">chevron_right</span>
    </button>
  </div>
</div>
```

### Page Number Logic
- Show at most 5 visible page numbers
- Always show first, last, and current page
- Use `...` ellipsis for gaps larger than 1

---

## 11. Lightbox.jsx

### Source Reference
- **Gallery Figma** (lines 350–394): Full lightbox with close, prev/next

### Props
```js
{
  isOpen: boolean,
  onClose: () => void,
  imageSrc: string,
  title?: string,
  description?: string,
  onPrev?: () => void,     // Navigate to previous image
  onNext?: () => void,     // Navigate to next image
}
```

### Exact HTML Structure (from Gallery Figma)
```
{/* Render via ReactDOM.createPortal into document.body */}
<div class="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center 
     p-8 backdrop-blur-sm">
  <!-- Close button -->
  <button class="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full 
         transition-all" onClick={onClose}>
    <span class="material-symbols-outlined text-4xl">close</span>
  </button>
  
  <!-- Prev/Next arrows (if onPrev/onNext provided) -->
  <button class="absolute left-8 top-1/2 -translate-y-1/2 ..." onClick={onPrev}>
    <span class="material-symbols-outlined text-4xl text-white">chevron_left</span>
  </button>
  <button class="absolute right-8 top-1/2 -translate-y-1/2 ..." onClick={onNext}>
    <span class="material-symbols-outlined text-4xl text-white">chevron_right</span>
  </button>
  
  <!-- Image -->
  <div class="max-w-5xl w-full h-full flex items-center justify-center">
    <img class="max-w-full max-h-[80vh] object-contain shadow-2xl" src={imageSrc} alt={title} />
  </div>
  
  <!-- Caption -->
  <div class="mt-8 text-center">
    <h4 class="text-white font-headline-md">{title}</h4>
    <p class="text-white/60 font-body-md mt-2">{description}</p>
  </div>
</div>
```

### Behavioral Rules
1. **Render as React Portal** into `document.body`
2. Close on: close button click, backdrop click (outside image), Escape key
3. When open, set `document.body.style.overflow = 'hidden'`; restore on close
4. Keyboard: Left arrow → `onPrev()`, Right arrow → `onNext()`, Escape → `onClose()`
5. Only render when `isOpen === true`

---

## 12. Sidebar.jsx

### Source Reference
- **Faculty Figma** (lines 151–181): Desktop left sidebar

### Props
```js
{
  // No props. Active link derived from useLocation().
}
```

### Exact HTML Structure (from Faculty Figma)
```
<aside class="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-32 p-4 
       bg-surface shadow-lg z-40">
  <div class="flex flex-col gap-2">
    <!-- Active link: -->
    <Link class="flex items-center gap-4 p-3 bg-primary-container text-on-primary-container 
         rounded-lg font-bold translate-x-1 transition-all">
      <span class="material-symbols-outlined">{icon}</span>
      <span class="font-label-md text-label-md">{label}</span>
    </Link>
    <!-- Inactive link: -->
    <Link class="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-variant 
         rounded-lg transition-all">
      <span class="material-symbols-outlined">{icon}</span>
      <span class="font-label-md text-label-md">{label}</span>
    </Link>
  </div>
  
  <!-- Bottom CTA -->
  <div class="mt-auto p-4 bg-surface-container-low rounded-xl">
    <p class="font-label-sm text-label-sm text-ash-gray mb-2">Portal Access</p>
    <button class="w-full bg-primary text-on-primary py-2 rounded-lg font-bold 
           hover:opacity-90 transition-opacity">Online Admission</button>
  </div>
</aside>
```

### Sidebar Navigation Items (from Faculty Figma)
```js
const SIDEBAR_ITEMS = [
  { label: "Home",       path: "/",          icon: "home" },
  { label: "Academics",  path: "/academics", icon: "school" },
  { label: "Results",    path: "#",          icon: "description" },
  { label: "Admission",  path: "/admissions",icon: "person_add" },
  { label: "Fees",       path: "#",          icon: "payments" },
];
```

### Rules
- Only visible on Faculty page (`/faculty`) — the page layout conditionally renders it
- Main content on Faculty page should offset with `lg:pl-64` when sidebar is present

---

## App.jsx Shell Layout & Routing

### Source Reference
- All Figma pages share: UtilityBar → Navbar → [spacer] → Content → Footer

### Routing Configuration
```js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout wrapper
function AppLayout() {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to Main Content</a>
      <UtilityBar />
      <Navbar />
      <div className="h-28 md:h-40" />  {/* Content spacer */}
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Routes
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/"          element={<Home />} />
      <Route path="/about"     element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty"   element={<Faculty />} />
      <Route path="/gallery"   element={<Gallery />} />
      <Route path="/news"      element={<News />} />
      <Route path="/notices"   element={<Notices />} />
      <Route path="*"          element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### NotFound.jsx (404 Page)
Simple centered view:
```
<div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
  <span class="material-symbols-outlined text-8xl text-outline mb-6">search_off</span>
  <h1 class="font-display-lg text-display-lg text-primary mb-4">404</h1>
  <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
    The page you're looking for doesn't exist or has been moved.
  </p>
  <Link to="/" class="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold 
       hover:opacity-90 transition-opacity">Back to Home</Link>
</div>
```

---

## Critical Implementation Notes for Sub-Agents

### 1. Image/Icon Asset Rules
- **National Emblem:** Use local path `/assets/icons/emblem.png` (must be placed in `client/public/assets/icons/`). If not present, use a placeholder `<div>` with initials.
- **Material Symbols:** Always use `<span className="material-symbols-outlined">{icon_name}</span>`. The font is loaded via CDN in `index.html`.
- **Filled variant:** Add inline style `style={{ fontVariationSettings: "'FILL' 1" }}`.

### 2. Tailwind Class Conventions
- Typography: Always pair `font-{preset}` with `text-{preset}` (e.g., `font-headline-lg text-headline-lg`)
- Colors: Use design token names (e.g., `bg-primary`, `text-on-primary`, `border-secondary-fixed`)
- Spacing: Use design tokens (`px-margin-desktop`, `gap-gutter`, `p-base`)
- Max-width containers: `max-w-container-max mx-auto`

### 3. React Router Integration
- Use `<Link>` from `react-router-dom` for all internal navigation (not `<a>`)
- Use `useLocation()` for active state detection
- External links (gov portals) use `<a href="..." target="_blank" rel="noopener noreferrer">`

### 4. Responsive Breakpoints
- Mobile-first: Default styles are mobile
- `md:` — Tablet (768px+)
- `lg:` — Desktop (1024px+)
- UtilityBar: `hidden md:flex`
- Desktop nav: `hidden lg:flex`
- Mobile hamburger: `lg:hidden`
- Sidebar: `hidden lg:flex`

### 5. Accessibility (GIGW 3.0)
- Skip link: `<a href="#main-content" className="skip-link">Skip to Main Content</a>`
- `<main id="main-content">` on content area
- `aria-label="Breadcrumb"` on breadcrumb nav
- `aria-label="Primary navigation"` on navbar
- All buttons: `title` or `aria-label` attributes
- Bengali text wrapped in `<span lang="bn">`
