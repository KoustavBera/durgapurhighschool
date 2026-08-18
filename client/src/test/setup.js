import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';
import i18n from '../i18n';

// Components render through react-i18next, so the catalogs must be loaded
// before any test renders. Assertions are written against the English copy;
// pinning the language keeps them independent of a persisted user choice.
beforeEach(() => {
  if (i18n.resolvedLanguage !== 'en') {
    i18n.changeLanguage('en');
  }
});

// Polyfill window.scrollTo
if (typeof window !== 'undefined') {
  window.scrollTo = vi.fn();
}

// Polyfill window.matchMedia
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
