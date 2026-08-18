import { describe, it, expect } from 'vitest';
import notices from '../data/notices.json';
import faculty from '../data/faculty.json';
import gallery from '../data/gallery.json';
import admissions from '../data/admissions.json';
import news from '../data/news.json';
import events from '../data/events.json';
import stats from '../data/stats.json';

describe('Data Integrity & Schema Tests', () => {
  it('notices.json has valid records with required attributes', () => {
    expect(Array.isArray(notices)).toBe(true);
    expect(notices.length).toBeGreaterThan(0);
    notices.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('category');
      expect(typeof item.title).toBe('string');
      expect(typeof item.date).toBe('string');
    });
  });

  it('faculty.json has valid faculty profiles across departments', () => {
    expect(Array.isArray(faculty)).toBe(true);
    expect(faculty.length).toBeGreaterThan(0);
    const validDepts = [
      'Science',
      'Humanities',
      'Commerce',
      'Language',
      'Physical Education',
      'Administration',
    ];
    faculty.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('designation');
      expect(item).toHaveProperty('department');
      expect(validDepts).toContain(item.department);
      expect(item).toHaveProperty('qualification');
    });
  });

  it('gallery.json has photo and video items with valid URLs and categories', () => {
    expect(Array.isArray(gallery)).toBe(true);
    expect(gallery.length).toBeGreaterThan(0);
    const hasPhotos = gallery.some((g) => !g.isVideo);
    const hasVideos = gallery.some((g) => g.isVideo);
    expect(hasPhotos).toBe(true);
    expect(hasVideos).toBe(true);
    gallery.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('category');
      expect(item).toHaveProperty('url');
    });
  });

  it('admissions.json contains complete admission information', () => {
    expect(admissions).toHaveProperty('academicSession');
    expect(admissions).toHaveProperty('eligibility');
    expect(Array.isArray(admissions.eligibility)).toBe(true);
    expect(admissions).toHaveProperty('importantDates');
    expect(Array.isArray(admissions.importantDates)).toBe(true);
    expect(admissions).toHaveProperty('steps');
    expect(Array.isArray(admissions.steps)).toBe(true);
    expect(admissions).toHaveProperty('requiredDocuments');
    expect(Array.isArray(admissions.requiredDocuments)).toBe(true);
    expect(admissions).toHaveProperty('faqs');
    expect(Array.isArray(admissions.faqs)).toBe(true);
  });


  it('news.json contains featured and standard news articles', () => {
    expect(Array.isArray(news)).toBe(true);
    expect(news.length).toBeGreaterThan(0);
    const hasFeatured = news.some((n) => n.isFeatured);
    expect(hasFeatured).toBe(true);
    news.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('excerpt');
      expect(item).toHaveProperty('date');
    });
  });

  it('events.json contains upcoming and past event schedules', () => {
    expect(Array.isArray(events)).toBe(true);
    expect(events.length).toBeGreaterThan(0);
    events.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('venue');
    });
  });

  it('stats.json has valid school metrics counters', () => {
    expect(stats).toHaveProperty('students');
    expect(stats).toHaveProperty('faculty');
    expect(stats).toHaveProperty('labs');
    expect(stats).toHaveProperty('smartClasses');
    expect(stats).toHaveProperty('passPercentage');
    expect(stats).toHaveProperty('establishedYear');
    expect(stats.establishedYear).toBe(1952);
  });
});
