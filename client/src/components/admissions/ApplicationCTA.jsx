import React, { useState } from 'react';

const ApplicationCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    guardianName: '',
    appliedClass: '',
    address: '',
    termsAgreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.appliedClass || !formData.termsAgreed) {
      alert('Please fill out all required fields and accept the declaration.');
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
              Application Preview & Inquiry
            </h3>
            <p className="text-xs text-ash-gray font-label-md">
              Submit your preliminary details to receive registration instructions.
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-bold uppercase tracking-wider">
            2024-25
          </span>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-surface rounded-xl border border-success/30 my-6">
            <span className="material-symbols-outlined text-success text-5xl mb-2">task_alt</span>
            <h4 className="font-headline-md text-lg font-bold text-primary mb-1">Inquiry Submitted!</h4>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
              Thank you, {formData.fullName}. Your preliminary inquiry for {formData.appliedClass} has been recorded. Our admission helpdesk will reach out shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', dob: '', guardianName: '', appliedClass: '', address: '', termsAgreed: false });
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  Student Full Name *
                </label>
                <input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="As per Birth Certificate"
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="dob" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  Date of Birth *
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
                  Guardian's Full Name *
                </label>
                <input
                  id="guardianName"
                  required
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="Father / Mother / Guardian"
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="appliedClass" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  Class Applying For *
                </label>
                <select
                  id="appliedClass"
                  required
                  value={formData.appliedClass}
                  onChange={(e) => setFormData({ ...formData, appliedClass: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                >
                  <option value="">Select Grade / Stream</option>
                  <option value="Class V">Class V (Primary Wing)</option>
                  <option value="Class VI">Class VI (Middle Wing)</option>
                  <option value="Class IX">Class IX (Secondary)</option>
                  <option value="Class XI - Science">Class XI - Science Stream</option>
                  <option value="Class XI - Arts">Class XI - Humanities / Arts</option>
                  <option value="Class XI - Commerce">Class XI - Commerce Stream</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="address" className="font-label-sm text-xs font-semibold text-on-surface-variant">
                  Permanent Address
                </label>
                <textarea
                  id="address"
                  rows="2"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="Town/Village, PO, District, PIN Code"
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
                I hereby declare that the information provided is accurate to the best of my knowledge and complies with school admission rules.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-3.5 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-all shadow-md text-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Submit Initial Inquiry</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationCTA;
