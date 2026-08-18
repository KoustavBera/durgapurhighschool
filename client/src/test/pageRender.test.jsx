import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import i18n, { resources } from '../i18n';
import App from '../App';

const ROUTES = ['/', '/about', '/academics', '/admissions', '/faculty', '/gallery', '/news', '/notices', '/nope'];

// A translation key that fails to resolve renders as its own dotted path. Rather
// than pattern-matching for something dot-shaped (adjacent text nodes join into
// plenty of false positives like "tomorrow.Apply"), look for the exact key paths
// the catalogs define.
const collectKeyPaths = (node, prefix, out) => {
  for (const [key, value] of Object.entries(node)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      collectKeyPaths(value, path, out);
    } else {
      out.add(path);
    }
  }
  return out;
};

const KEY_PATHS = [...Object.values(resources.en).reduce(
  (acc, namespace) => collectKeyPaths(namespace, '', acc),
  new Set()
)];

const rawKeysIn = (text) => KEY_PATHS.filter((key) => text.includes(key));

describe.each(['en', 'bn'])('every page renders in %s', (language) => {
  const missingKeys = [];
  let warnSpy;

  beforeAll(() => {
    i18n.on('missingKey', (lngs, ns, key) => missingKeys.push(`${ns}:${key}`));
    // React Router emits future-flag notices that would drown the output.
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterAll(() => {
    i18n.changeLanguage('en');
    warnSpy.mockRestore();
  });

  it.each(ROUTES)('renders %s without unresolved translation keys', (route) => {
    i18n.changeLanguage(language);
    window.history.pushState({}, '', route);

    const { container, unmount } = render(<App />);
    expect({ route, rawKeys: rawKeysIn(container.textContent) }).toEqual({ route, rawKeys: [] });
    unmount();

    expect(missingKeys).toEqual([]);
  });
});
