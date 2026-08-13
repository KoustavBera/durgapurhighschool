---
name: Bharat Shiksha Civic
colors:
  surface: '#fbf8fd'
  surface-dim: '#F8F9FA'
  surface-bright: '#fbf8fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7ec'
  surface-container-highest: '#e4e2e6'
  on-surface: '#1b1b1f'
  on-surface-variant: '#45464f'
  inverse-surface: '#303034'
  inverse-on-surface: '#f2f0f4'
  outline: '#757680'
  outline-variant: '#c5c6d0'
  surface-tint: '#4d5d8b'
  primary: '#021541'
  on-primary: '#ffffff'
  primary-container: '#1a2b56'
  on-primary-container: '#8393c5'
  inverse-primary: '#b5c5f9'
  secondary: '#8f4e00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9832'
  on-secondary-container: '#683700'
  tertiary: '#291300'
  on-tertiary: '#ffffff'
  tertiary-container: '#472400'
  on-tertiary-container: '#bf895b'
  error: '#D32F2F'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b5c5f9'
  on-primary-fixed: '#051944'
  on-primary-fixed-variant: '#354572'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77a'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#f6ba88'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#663d16'
  background: '#fbf8fd'
  on-background: '#1b1b1f'
  surface-variant: '#e4e2e6'
  success: '#28A745'
  warning: '#FFC107'
  info: '#17A2B8'
  ash-gray: '#6C757D'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-sm:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
  bengali-body:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.8'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1200px
---

## Brand & Style

The design system for Durgapur High School is anchored in the **Corporate / Modern** movement, specifically tailored for the Government of India's UX4G standards. It prioritizes **Digital Authority**, **Functional Inclusivity**, and **National Trust**. The brand personality is official and professional, designed to feel like a reliable utility rather than a marketing platform. 

The aesthetic is characterized by a "Compliance-First" approach, ensuring that every element meets WCAG 2.2 AA standards and GIGW 3.0 guidelines. The UI should evoke a sense of security and accessibility, accommodating a diverse demographic ranging from tech-savvy students to elderly guardians and rural citizens. The visual narrative balances the formality of a state institution with the clarity of modern interface design.

## Colors

This color palette is strictly aligned with national and institutional identity. **Deep Blue (#1A2B56)** serves as the primary anchor, used for the Government Header, primary buttons, and navigational elements to establish authority. **Indian Saffron (#FF9933)** is used strategically as an accent color to reinforce national identity and highlight secondary actions.

The system uses a neutral-heavy background strategy to maintain high contrast. Semantic colors for Success, Error, and Warning follow standard Gov-Tech patterns to ensure intuitive feedback. All color combinations must be tested to ensure a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text to maintain WCAG 2.2 AA compliance.

## Typography

Typography is a dual-language system. **Inter** is the primary typeface for English text, chosen for its exceptional legibility on digital screens. **Noto Sans** is mandated for Indic scripts (Bengali), ensuring that the regional identity is preserved with high-quality glyph rendering.

A strict hierarchy is maintained to facilitate "Mandatory Disclosures" and RTI compliance. Line heights for Bengali text are slightly increased (1.8x) compared to English (1.5x) to accommodate the height of the script and ensure readability for older users. Headings should be crisp and authoritative, while body text remains neutral and unobtrusive.

## Layout & Spacing

The design system employs a **12-column responsive fluid grid** built on an **8px baseline rhythm**. This ensures vertical consistency across all components, from simple input fields to complex data tables.

- **Desktop (1024px+):** 12 columns, 24px gutters, 64px side margins.
- **Tablet (600px - 1023px):** 8 columns, 16px gutters, 32px side margins.
- **Mobile (Up to 599px):** 4 columns, 16px gutters, 16px side margins.

Layouts are designed for "density with clarity," allowing for the high volume of information typical of government portals while preventing visual clutter through the disciplined use of whitespace and systematic margins.

## Elevation & Depth

To ensure maximum accessibility and performance on low-end mobile devices common in rural areas, this design system utilizes a **Tonal Layers** approach with minimal shadow usage. 

Depth is primarily communicated through surface color shifts (e.g., using a light gray `#F8F9FA` for container backgrounds against a white page). When shadows are necessary for interactive elements like "News & Events" cards, they must be **ambient and low-contrast** (e.g., `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05)`). This prevents the UI from appearing too "heavy" or distracting and maintains the professional, official tone.

## Shapes

The shape language is **Soft (Level 1)**, reflecting a professional and rigid government ecosystem. Most UI elements like buttons and input fields utilize a 0.25rem (4px) corner radius. Cards and larger containers may use up to 0.5rem (8px). This subtle rounding moves away from the harshness of sharp corners while avoiding the overly casual nature of "pill" shapes, maintaining a balance between modern friendliness and institutional formality.

## Components

### Government Header
A mandatory component featuring the National Emblem of India on the left, "Durgapur High School" in dual-language (English/Bengali) text, and the UX4G utility bar at the top with a font resizer (A-, A, A+) and language switcher.

### Official Navigation
A primary navigation bar using Deep Blue (#1A2B56) as the background. Links are white with a Saffron (#FF9933) bottom border on hover/active states to provide clear visual feedback.

### Breadcrumbs
Standardized path indicators below the header to assist in navigation through deep administrative hierarchies. Use 14px Noto Sans with an "ash-gray" for non-active links.

### School-Specific Cards
Used for News, Events, and Notices. These cards feature a 1px border (`#DEE2E6`) and a very subtle ambient shadow on hover. Headlines use `headline-md` and include a date stamp in the top-right corner.

### RTI-Compliant Footer
A high-density footer containing mandatory disclosures, the school's contact directory, links to state projects (Kanyashree, Shikshashree), and the "Last Updated" timestamp as per GIGW 3.0 requirements.

### Buttons & Inputs
Buttons use the Soft (4px) roundedness. Primary buttons are Deep Blue with white text. Input fields use a 1px solid gray border that transitions to Deep Blue on focus, accompanied by a 2px offset "focus ring" for keyboard accessibility.