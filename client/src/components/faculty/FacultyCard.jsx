import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const FacultyCard = ({ faculty, onSelect }) => {
  const { t } = useTranslation(['faculty', 'common']);
  const { field } = useLocale();

  const name = field(faculty, 'name');
  const designation = field(faculty, 'designation');
  const department = t(`common:departments.${faculty.department}`, {
    defaultValue: faculty.department,
  });

  // `isHod` is the authoritative flag; the designation string is only a
  // fallback for records that predate it and it exists in English only.
  const isHod = faculty.isHod || faculty.designation?.includes('H.O.D');
  const isSenior = !isHod && faculty.designation?.includes('Senior');

  return (
    <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Photo Container */}
        <div className="h-52 relative overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={name}
            src={faculty.photo || faculty.image}
          />
          {isHod && (
            <div className="absolute top-3.5 right-3.5 bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm">
              {t('card.hod')}
            </div>
          )}
          {isSenior && (
            <div className="absolute top-3.5 right-3.5 bg-primary text-on-primary px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm">
              {t('card.senior')}
            </div>
          )}
        </div>

        {/* Details Container */}
        <div className="p-6">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
            {t('card.departmentSuffix', { department })}
          </p>
          <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary mb-1 leading-snug group-hover:text-secondary transition-colors">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant font-medium mb-4">
            {designation}
          </p>

          <div className="space-y-2 border-t border-outline-variant/60 pt-4 text-xs sm:text-sm text-ash-gray">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">school</span>
              <span className="font-label-md truncate">{field(faculty, 'qualification')}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0">history_edu</span>
              <span className="font-label-md">
                {field(faculty, 'experience') || t('card.defaultExperience')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => {
            if (onSelect) {
              onSelect(faculty);
            } else {
              alert(
                t('card.profileAlert', {
                  name,
                  designation,
                  email: faculty.email || 'faculty@durgapurhighschool.edu.in',
                })
              );
            }
          }}
          className="w-full border border-primary text-primary py-2.5 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-colors text-xs flex items-center justify-center gap-1.5 active:scale-95"
        >
          <span>{t('card.viewProfile')}</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default FacultyCard;
