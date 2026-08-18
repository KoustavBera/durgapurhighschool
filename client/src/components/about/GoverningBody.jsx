import React from 'react';
import { useTranslation } from 'react-i18next';

const MEMBER_KEYS = ['president', 'secretary', 'teacherRep', 'guardianRep'];

const GoverningBody = () => {
  const { t } = useTranslation('about');

  return (
    <section className="mb-16 md:mb-24">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold mb-2">
          {t('governingBody.title')}
        </h2>
        <p className="font-body-md text-base text-ash-gray">
          {t('governingBody.subtitle')}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-outline-variant shadow-sm bg-white">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-surface-container-high text-primary font-bold text-sm uppercase tracking-wider">
            <tr>
              <th className="p-4 sm:p-5 border-b border-outline-variant">{t('governingBody.columnName')}</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">{t('governingBody.columnDesignation')}</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">{t('governingBody.columnRole')}</th>
              <th className="p-4 sm:p-5 border-b border-outline-variant">{t('governingBody.columnTenure')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant font-body-md text-sm sm:text-base">
            {MEMBER_KEYS.map((key) => (
              <tr key={key} className="hover:bg-surface-container-low transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl">account_circle</span>
                  <span>{t(`governingBody.members.${key}.name`)}</span>
                </td>
                <td className="p-4 sm:p-5 text-on-surface font-semibold">
                  {t(`governingBody.members.${key}.designation`)}
                </td>
                <td className="p-4 sm:p-5 text-on-surface-variant">
                  {t(`governingBody.members.${key}.role`)}
                </td>
                <td className="p-4 sm:p-5 text-ash-gray font-label-md">
                  {t(`governingBody.members.${key}.tenure`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GoverningBody;
