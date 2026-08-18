import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// `value` is the stable identifier stored in form state; the visible label is
// translated. Keeping the value in English means submitted data stays
// language-independent.
const CLASS_OPTIONS = [
  { value: 'Class V', labelKey: 'form.classOptions.v' },
  { value: 'Class VI', labelKey: 'form.classOptions.vi' },
  { value: 'Class IX', labelKey: 'form.classOptions.ix' },
  { value: 'Class XI - Science', labelKey: 'form.classOptions.xiScience' },
  { value: 'Class XI - Arts', labelKey: 'form.classOptions.xiArts' },
  { value: 'Class XI - Commerce', labelKey: 'form.classOptions.xiCommerce' },
];

const EMPTY_FORM = {
  fullName: '',
  dob: '',
  guardianName: '',
  appliedClass: '',
  address: '',
  termsAgreed: false,
};

const ApplicationCTA = () => {
  const { t } = useTranslation('admissions');
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.appliedClass || !formData.termsAgreed) {
      alert(t('form.validationAlert'));
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="md:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-headline-md text-xl font-bold text-primary">
              {t('form.heading')}
            </h3>
            <p className="text-xs text-ash-gray font-label-md">
              {t('form.subheading')}
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-bold uppercase tracking-wider">
            {t('form.sessionBadge')}
          </span>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-surface rounded-xl border border-success/30 my-6">
            <span className="material-symbols-outlined text-success text-5xl mb-2">task_alt</span>
            <h4 className="font-headline-md text-lg font-bold text-primary mb-1">{t('form.successTitle')}</h4>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
              {t('form.successMessage', { name: formData.fullName, class: formData.appliedClass })}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData(EMPTY_FORM);
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              {t('form.submitAnother')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  {t('form.fullName')}
                </label>
                <input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder={t('form.fullNamePlaceholder')}
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="dob" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  {t('form.dob')}
                </label>
                <input
                  id="dob"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  type="date"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="guardianName" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  {t('form.guardianName')}
                </label>
                <input
                  id="guardianName"
                  required
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder={t('form.guardianNamePlaceholder')}
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="appliedClass" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  {t('form.appliedClass')}
                </label>
                <select
                  id="appliedClass"
                  required
                  value={formData.appliedClass}
                  onChange={(e) => setFormData({ ...formData, appliedClass: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                >
                  <option value="">{t('form.selectClass')}</option>
                  {CLASS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {t(option.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="address" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  {t('form.address')}
                </label>
                <textarea
                  id="address"
                  rows="2"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder={t('form.addressPlaceholder')}
                />
              </div>

            </div>

            <div className="pt-2 flex items-start gap-2.5">
              <input
                id="terms"
                type="checkbox"
                checked={formData.termsAgreed}
                onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                className="mt-1 rounded border-outline text-primary focus:ring-primary h-4 w-4"
              />
              <label htmlFor="terms" className="font-label-sm text-xs text-on-surface-variant leading-tight cursor-pointer">
                {t('form.declaration')}
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-3.5 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-all shadow-md text-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{t('form.submit')}</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationCTA;
