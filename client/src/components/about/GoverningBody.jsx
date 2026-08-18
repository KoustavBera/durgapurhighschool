import React from 'react';

const committeeMembers = [
  {
    name: 'Sri Aloke Ghoshal',
    designation: 'President',
    role: 'Nominated Member (Educationist)',
    tenure: '2021 - Present',
  },
  {
    name: 'Dr. S. K. Mukherjee',
    designation: 'Secretary',
    role: 'Principal (Ex-Officio)',
    tenure: '2018 - Present',
  },
  {
    name: 'Smt. Rita Das',
    designation: 'Teacher Representative',
    role: 'Elected Faculty Member',
    tenure: '2022 - Present',
  },
  {
    name: 'Sri Partha Sen',
    designation: 'Guardian Representative',
    role: 'Parent-Teacher Association Body',
    tenure: '2023 - Present',
  },
];

const GoverningBody = () => {
  return (
    <section className="mb-16 md:mb-24">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold mb-2">
          School Management Committee
        </h2>
        <p className="font-body-md text-base text-ash-gray">
          The apex governing council ensuring governance transparency, financial probity, and continuous institutional growth.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-outline-variant shadow-sm bg-white">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-surface-container-high text-primary font-bold text-sm uppercase tracking-wider">
            <tr>
              <th className="p-4 sm:p-5 border-b border-outline-variant">Name</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">Designation</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">Role / Category</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">Tenure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant font-body-md text-sm sm:text-base">
            {committeeMembers.map((member, idx) => (
              <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl">account_circle</span>
                  <span>{member.name}</span>
                </td>
                <td className="p-4 sm:p-5 text-on-surface font-semibold">{member.designation}</td>
                <td className="p-4 sm:p-5 text-on-surface-variant">{member.role}</td>
                <td className="p-4 sm:p-5 text-ash-gray font-label-md">{member.tenure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GoverningBody;
