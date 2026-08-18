import React, { useState } from 'react';

const upcomingEvents = [
  {
    id: 'e1',
    day: '25',
    month: 'OCT',
    title: "Annual Cultural Fest: 'Bijoy Utsav 2024'",
    location: 'Main Auditorium, DHS Campus',
    desc: 'A grand celebration of Bengali art, Rabindra Sangeet, drama, and classical dance performances from students of all wings.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0W-D1yfWpAEerckjiOB-SubmTr7hOEGuvLgjV_Cx7SSrLMiSB2V-M64xFvB8RDx2NysfEcYXokFT754tkvw9k4xhxdaNCKb3A53xxu1EgcBfdS-WG2GIpIxf83TCuP0uQVL0Q3mZvmA_Vccihzcd3X1-0iwW_Sq0b4qrdo_GDItcgJJ_hLnf0JpwQVakJnFzNl2VxnfyJbymEsNs09gS70vD-lMNZeZrScbalCHzX_ILIVsdjMNt7fg',
  },
  {
    id: 'e2',
    day: '05',
    month: 'NOV',
    title: 'Annual Sports Meet & Inter-House Tournament',
    location: 'School Athletic Stadium',
    desc: 'Witness the competitive spirit as four houses battle for the overall championship trophy in track and field events.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYTukhisAz8ejVLoRTkJrXaE0N6LdHgvYC0xAekieaPnz_bcLMjhhfiffjwgc9xq6hGI1Mdbgt8jSotmBukkBqVK43Ulfs_u7A_xf-WVYjLaiWO_L8swZxrfMSkkN8eLh_hrqMifUXAf1vUE76eOMp2HvCvo2im8BPncCjituEh7oYSSduX1l86WDyRci6TNY4Ue-ldzmfqQ3g6JEgYAOmfXdTWm2e3dC_64kRf3m7fjAhodKnj0Ia9A',
  },
  {
    id: 'e3',
    day: '12',
    month: 'NOV',
    title: 'Career Guidance: Pathways to Higher Education',
    location: 'Conference Hall (Block B)',
    desc: 'Expert alumni and university counselors share strategies on national entrance exams (JEE, NEET, CUET) and undergraduate streams.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI5soiNw5XQNX-dWLHSDJK6Qk7O8B-YkgMer-ewLNzFjDDhD9ZniZhTS8a5-Gix4xYWuHzEOOtkJmKS8ckW4dS7757wvHntz-UIaHWxBOx2In9YrGPul-UEOHuNt7t2wEQ9Nke0xRcsru4GyfNGm5ofBCVjGQlRNerA8SpCKkvcuNfIrYN5LgNDjt6o03z0vM4XJrhN3lwIdSINjYe-oJ2TXBtQEyHy8oo4pG0rtK0nOpuJNANHPliRw',
  },
];

const pastEvents = [
  {
    id: 'p1',
    day: '15',
    month: 'AUG',
    title: '78th Independence Day Patriotic Celebrations',
    location: 'Open Air Assembly Ground',
    desc: 'Flag hoisting ceremony, March past parade by NCC cadets, and patriotic musical presentation by middle school choir.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ927KU9b8yYAuaRxFbl3UdQl1rXlMHxzE2jAfg8V3Rdb8senfL5i3D0ax7_SWcbUIBnmNdDAh5ExcH4Je8bnUMOnQ4KixMLojvpoehveBhhSbgfxKzrKxZW-JFlxbDHuQGD8HvlpfDVCcMnuEBysDi9nJQY0Dpl0oSwt0WUvzrLkbuOz6Cl1_sIh5lzQhkWdVkVbXwqFW_t5Ok0Jm8K_f23TgJWHkjnYZ5Z4eaJh0L2N6RRDdS3d-2w',
  },
  {
    id: 'p2',
    day: '05',
    month: 'SEP',
    title: "Teachers' Day & Felicitation Ceremony",
    location: 'Main Auditorium',
    desc: 'Students assumed teacher responsibilities for the day followed by a cultural tribute to honorable faculty members.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOxUhw5kyf6VtIvEI29tcCThXiUa2FjK7fWnIRFqbwm4M3UDQLA5VDs5fxedaybN9-16GNUBUWvNzO-QdV0cDjoGph0hyUicPQiThGLJeBhbMBAPMJVs4BwfzpLK7RgBD7cehKsfqsJDNsiulwt75d_gv-SVA-q7JNtarywKMx2WdwgpgUc-qc44KVr1bnlhmEqnYqbWpUErYgLS4ccXYvtXaZm-K07bNg0XblMnf7IsyOnqX_ZFh8Jw',
  },
];

const EventList = () => {
  const [tab, setTab] = useState('upcoming');
  const activeList = tab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section className="bg-surface-dim py-14 sm:py-16 px-4 sm:px-8 md:px-10 rounded-3xl mb-16 border border-outline-variant/50">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-secondary text-xs uppercase font-bold tracking-widest block mb-1">
            School Calendar
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-1">
            Events & Observances
          </h2>
          <p className="text-ash-gray font-body-md text-sm">
            Stay updated with academic gatherings, celebrations, and sports meets.
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
            Upcoming Events
          </button>
          <button
            onClick={() => setTab('past')}
            className={`px-6 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all ${
              tab === 'past'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Past Events
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeList.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  alt={event.title}
                  src={event.image}
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-xl shadow-md text-center border border-outline-variant/40">
                  <span className="block font-bold text-primary text-lg leading-tight">{event.day}</span>
                  <span className="block text-ash-gray text-[10px] uppercase font-bold">{event.month}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-lg font-bold text-primary mb-2 line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1.5 text-ash-gray font-label-md text-xs mb-3">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  <span className="truncate">{event.location}</span>
                </div>
                <p className="text-on-surface-variant font-body-md text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
                <button
                  onClick={() => alert(`Event Details: ${event.title}\nVenue: ${event.location}`)}
                  className="text-primary font-bold flex items-center gap-1 text-xs hover:text-secondary group-hover:translate-x-0.5 transition-all"
                >
                  <span>Details</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert('Share event')}
                    className="material-symbols-outlined text-[18px] text-ash-gray hover:text-primary transition-colors p-1"
                    title="Share"
                  >
                    share
                  </button>
                  <button
                    onClick={() => alert('Add to calendar')}
                    className="material-symbols-outlined text-[18px] text-ash-gray hover:text-secondary transition-colors p-1"
                    title="Add to Calendar"
                  >
                    calendar_add_on
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => alert('Downloading official DHS Academic Calendar 2024-25 (PDF)')}
          className="border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-xs sm:text-sm active:scale-95 shadow-sm inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span>Download Full Annual Calendar (PDF)</span>
        </button>
      </div>
    </section>
  );
};

export default EventList;
