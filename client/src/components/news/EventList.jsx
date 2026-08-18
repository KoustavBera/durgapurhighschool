import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const UPCOMING_EVENTS = [
  {
    id: 'e1',
    key: 'culturalFest',
    day: '25',
    month: 'OCT',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0W-D1yfWpAEerckjiOB-SubmTr7hOEGuvLgjV_Cx7SSrLMiSB2V-M64xFvB8RDx2NysfEcYXokFT754tkvw9k4xhxdaNCKb3A53xxu1EgcBfdS-WG2GIpIxf83TCuP0uQVL0Q3mZvmA_Vccihzcd3X1-0iwW_Sq0b4qrdo_GDItcgJJ_hLnf0JpwQVakJnFzNl2VxnfyJbymEsNs09gS70vD-lMNZeZrScbalCHzX_ILIVsdjMNt7fg',
  },
  {
    id: 'e2',
    key: 'sportsMeet',
    day: '05',
    month: 'NOV',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYTukhisAz8ejVLoRTkJrXaE0N6LdHgvYC0xAekieaPnz_bcLMjhhfiffjwgc9xq6hGI1Mdbgt8jSotmBukkBqVK43Ulfs_u7A_xf-WVYjLaiWO_L8swZxrfMSkkN8eLh_hrqMifUXAf1vUE76eOMp2HvCvo2im8BPncCjituEh7oYSSduX1l86WDyRci6TNY4Ue-ldzmfqQ3g6JEgYAOmfXdTWm2e3dC_64kRf3m7fjAhodKnj0Ia9A',
  },
  {
    id: 'e3',
    key: 'careerGuidance',
    day: '12',
    month: 'NOV',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI5soiNw5XQNX-dWLHSDJK6Qk7O8B-YkgMer-ewLNzFjDDhD9ZniZhTS8a5-Gix4xYWuHzEOOtkJmKS8ckW4dS7757wvHntz-UIaHWxBOx2In9YrGPul-UEOHuNt7t2wEQ9Nke0xRcsru4GyfNGm5ofBCVjGQlRNerA8SpCKkvcuNfIrYN5LgNDjt6o03z0vM4XJrhN3lwIdSINjYe-oJ2TXBtQEyHy8oo4pG0rtK0nOpuJNANHPliRw',
  },
];

const PAST_EVENTS = [
  {
    id: 'p1',
    key: 'independenceDay',
    day: '15',
    month: 'AUG',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ927KU9b8yYAuaRxFbl3UdQl1rXlMHxzE2jAfg8V3Rdb8senfL5i3D0ax7_SWcbUIBnmNdDAh5ExcH4Je8bnUMOnQ4KixMLojvpoehveBhhSbgfxKzrKxZW-JFlxbDHuQGD8HvlpfDVCcMnuEBysDi9nJQY0Dpl0oSwt0WUvzrLkbuOz6Cl1_sIh5lzQhkWdVkVbXwqFW_t5Ok0Jm8K_f23TgJWHkjnYZ5Z4eaJh0L2N6RRDdS3d-2w',
  },
  {
    id: 'p2',
    key: 'teachersDay',
    day: '05',
    month: 'SEP',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOxUhw5kyf6VtIvEI29tcCThXiUa2FjK7fWnIRFqbwm4M3UDQLA5VDs5fxedaybN9-16GNUBUWvNzO-QdV0cDjoGph0hyUicPQiThGLJeBhbMBAPMJVs4BwfzpLK7RgBD7cehKsfqsJDNsiulwt75d_gv-SVA-q7JNtarywKMx2WdwgpgUc-qc44KVr1bnlhmEqnYqbWpUErYgLS4ccXYvtXaZm-K07bNg0XblMnf7IsyOnqX_ZFh8Jw',
  },
];

const EventList = () => {
  const { t } = useTranslation('news');
  const { num, monthAbbr } = useLocale();
  const [tab, setTab] = useState('upcoming');

  const activeList = tab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;
  const group = tab === 'upcoming' ? 'upcoming' : 'past';

  return (
    <section className="bg-surface-dim py-14 sm:py-16 px-4 sm:px-8 md:px-10 rounded-3xl mb-16 border border-outline-variant/50">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-secondary text-xs uppercase font-bold tracking-widest block mb-1">
            {t('events.tag')}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-1">
            {t('events.heading')}
          </h2>
          <p className="text-ash-gray font-body-md text-sm">
            {t('events.subheading')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-surface-container-high p-1 rounded-full w-fit shadow-inner">
          <button
            onClick={() => setTab('upcoming')}
            className={`px-6 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all ${
              tab === 'upcoming'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t('events.upcomingTab')}
          </button>
          <button
            onClick={() => setTab('past')}
            className={`px-6 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all ${
              tab === 'past'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t('events.pastTab')}
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeList.map((event) => {
          const title = t(`events.${group}.${event.key}.title`);
          const location = t(`events.${group}.${event.key}.location`);

          return (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    alt={title}
                    src={event.image}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-xl shadow-md text-center border border-outline-variant/40">
                    <span className="block font-bold text-primary text-lg leading-tight">{num(event.day)}</span>
                    <span className="block text-ash-gray text-[10px] uppercase font-bold">{monthAbbr(event.month)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-lg font-bold text-primary mb-2 line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                    {title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-ash-gray font-label-md text-xs mb-3">
                    <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                    <span className="truncate">{location}</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {t(`events.${group}.${event.key}.desc`)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
                  <button
                    onClick={() => alert(t('events.detailsAlert', { title, venue: location }))}
                    className="text-primary font-bold flex items-center gap-1 text-xs hover:text-secondary group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{t('events.details')}</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert(t('events.shareAlert'))}
                      className="material-symbols-outlined text-[18px] text-ash-gray hover:text-primary transition-colors p-1"
                      title={t('events.shareTitle')}
                    >
                      share
                    </button>
                    <button
                      onClick={() => alert(t('events.addCalendarAlert'))}
                      className="material-symbols-outlined text-[18px] text-ash-gray hover:text-secondary transition-colors p-1"
                      title={t('events.addCalendarTitle')}
                    >
                      calendar_add_on
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => alert(t('events.downloadAlert'))}
          className="border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-xs sm:text-sm active:scale-95 shadow-sm inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span>{t('events.downloadCalendar')}</span>
        </button>
      </div>
    </section>
  );
};

export default EventList;
