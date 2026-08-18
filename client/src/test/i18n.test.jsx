import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, afterEach } from 'vitest';
import i18n, { resources, SUPPORTED_LANGUAGES } from '../i18n';
import { formatDate, formatNumber, toBengaliDigits } from '../i18n/format';
import UtilityBar from '../components/common/UtilityBar';
import Navbar from '../components/common/Navbar';
import NoticeTable from '../components/notices/NoticeTable';
import noticesData from '../data/notices.json';

const withRouter = (ui) => <BrowserRouter>{ui}</BrowserRouter>;

// Every test in this file switches languages; the shared setup resets to
// English before each one, but reset here too so a failure mid-file cannot
// leak Bengali into the suites that run after it.
afterEach(() => {
  i18n.changeLanguage('en');
});

describe('i18n configuration', () => {
  it('registers exactly English and Bengali', () => {
    expect(SUPPORTED_LANGUAGES).toEqual(['en', 'bn']);
    expect(Object.keys(resources).sort()).toEqual(['bn', 'en']);
  });

  it('defines the same key set in both languages for every namespace', () => {
    const flatten = (obj, prefix = '') =>
      Object.entries(obj).flatMap(([key, value]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        return value && typeof value === 'object' && !Array.isArray(value)
          ? flatten(value, path)
          : [path];
      });

    for (const namespace of Object.keys(resources.en)) {
      const en = flatten(resources.en[namespace]).sort();
      const bn = flatten(resources.bn[namespace]).sort();
      expect({ namespace, keys: bn }).toEqual({ namespace, keys: en });
    }
  });

  it('leaves no Bengali string equal to its English source', () => {
    // A verbatim copy almost always means a missed translation. Proper nouns
    // and codes that are legitimately identical are listed here.
    const allowed = new Set([
      'school.email',
      'school.nameEn',
      'school.nameBn',
      'utilityBar.languageEnglishFirst',
      'utilityBar.languageBengaliFirst',
      'a11y.skipToMainEn',
      'a11y.skipToMainBn',
      'notFound.titleEn',
      'notFound.titleBn',
      'infrastructure.headingBn',
      'page.titleBn',
      'noticeBoard.headingBn',
      'noticeBoard.statsHeadingBn',
      'newsEvents.headingBn',
      'galleryStrip.headingBn',
    ]);

    const walk = (enNode, bnNode, prefix, out) => {
      for (const [key, value] of Object.entries(enNode)) {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'string') {
          if (!allowed.has(path) && bnNode[key] === value) out.push(path);
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
          walk(value, bnNode[key] || {}, path, out);
        }
      }
    };

    const untranslated = [];
    for (const namespace of Object.keys(resources.en)) {
      walk(resources.en[namespace], resources.bn[namespace], '', untranslated);
    }
    expect(untranslated).toEqual([]);
  });
});

describe('Bengali number and date formatting', () => {
  it('rewrites ASCII digits as Bengali-Indic digits', () => {
    expect(toBengaliDigits('2024-25')).toBe('২০২৪-২৫');
    expect(formatNumber('1.2 MB', 'bn')).toBe('১.২ MB');
    expect(formatNumber('1.2 MB', 'en')).toBe('1.2 MB');
  });

  it('formats ISO dates with localized month names', () => {
    expect(formatDate('2024-10-24', 'en')).toBe('24 October, 2024');
    expect(formatDate('2024-10-24', 'bn')).toBe('২৪ অক্টোবর, ২০২৪');
  });

  it('returns unparseable dates untouched instead of blanking the field', () => {
    expect(formatDate('not-a-date', 'en')).toBe('not-a-date');
  });
});

describe('Language switching', () => {
  it('toggles the site into Bengali from the utility bar', () => {
    render(<UtilityBar />);

    const toggle = screen.getByLabelText(/Toggle language between English and Bengali/i);
    expect(screen.getByText('English / বাংলা')).toBeInTheDocument();

    fireEvent.click(toggle);

    expect(i18n.resolvedLanguage).toBe('bn');
    expect(document.documentElement.getAttribute('lang')).toBe('bn');
    expect(screen.getByText(/স্ক্রিন রিডার প্রবেশাধিকার/)).toBeInTheDocument();
  });

  it('renders navigation labels in Bengali while keeping the bilingual masthead', () => {
    i18n.changeLanguage('bn');
    render(withRouter(<Navbar />));

    expect(screen.getByRole('link', { name: /পরিচিতি/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /শিক্ষাক্রম/ })).toBeInTheDocument();
    // Government mastheads carry both scripts regardless of the chosen language.
    expect(screen.getByText('Durgapur High School')).toBeInTheDocument();
    expect(screen.getByText('দুর্গাপুর উচ্চ বিদ্যালয়')).toBeInTheDocument();
  });

  it('renders notice records from their Bengali data fields', () => {
    const notices = noticesData.slice(0, 2);
    i18n.changeLanguage('bn');

    render(
      <NoticeTable notices={notices} currentPage={1} totalPages={1} totalItems={notices.length} />
    );

    notices.forEach((notice) => {
      expect(screen.getByText(notice.titleBn)).toBeInTheDocument();
      expect(screen.queryByText(notice.title)).not.toBeInTheDocument();
    });

    // Dates and file sizes carry Bengali digits.
    const table = screen.getByRole('table');
    expect(within(table).getByText('২৪ অক্টোবর, ২০২৪')).toBeInTheDocument();
    expect(within(table).getByText(/পিডিএফ \(১\.২ MB\)/)).toBeInTheDocument();
  });
});

describe('Static data Bengali coverage', () => {
  it('gives every notice, event, news item and faculty record Bengali copy', async () => {
    const [notices, events, news, faculty, gallery, admissions] = await Promise.all([
      import('../data/notices.json').then((m) => m.default),
      import('../data/events.json').then((m) => m.default),
      import('../data/news.json').then((m) => m.default),
      import('../data/faculty.json').then((m) => m.default),
      import('../data/gallery.json').then((m) => m.default),
      import('../data/admissions.json').then((m) => m.default),
    ]);

    notices.forEach((n) => {
      expect(n.titleBn, n.id).toBeTruthy();
      expect(n.descriptionBn, n.id).toBeTruthy();
    });
    events.forEach((e) => {
      expect(e.titleBn, e.id).toBeTruthy();
      expect(e.descriptionBn, e.id).toBeTruthy();
      expect(e.venueBn, e.id).toBeTruthy();
    });
    news.forEach((n) => {
      expect(n.titleBn, n.id).toBeTruthy();
      expect(n.excerptBn, n.id).toBeTruthy();
    });
    faculty.forEach((f) => {
      expect(f.nameBn, f.id).toBeTruthy();
      expect(f.designationBn, f.id).toBeTruthy();
      expect(f.qualificationBn, f.id).toBeTruthy();
    });
    gallery.forEach((g) => {
      expect(g.titleBn, g.id).toBeTruthy();
      expect(g.captionBn, g.id).toBeTruthy();
    });

    expect(admissions.requiredDocumentsBn).toHaveLength(admissions.requiredDocuments.length);
    admissions.eligibility.forEach((e) => expect(e.classLevelBn).toBeTruthy());
    admissions.importantDates.forEach((d) => expect(d.eventBn).toBeTruthy());
    admissions.faqs.forEach((f) => {
      expect(f.questionBn).toBeTruthy();
      expect(f.answerBn).toBeTruthy();
    });
  });
});
