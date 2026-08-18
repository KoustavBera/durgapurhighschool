import React from 'react';

const recognitions = [
  {
    code: 'WBBSE',
    title: 'West Bengal Board of Secondary Education',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2SqozEM0jAF_B9eG0FsFk6nZcwjgRxygyBn8AzDZ5_BpEGjBGBuhrRIMkoxTLMddvBDR1nf8u0Jq-zRFOK4DL5WtbG4LrWClNsLKaxaL_ip9SWkebFGb0dFfANl7sf5ZNYo2kbOsQoPFdecc8UUS3A-1CCyivVgX36nHvLMJuPcYgj3XZcTRvelyn4PietSWnmSMKwBc7MVdezatIyOVgYZ20s8kXQLxljdgQ0hQwXSW0MgbL2YbwIg',
    desc: 'Affiliation Code: S-142',
  },
  {
    code: 'WBCHSE',
    title: 'West Bengal Council of Higher Secondary Education',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFH5fM6WfM6UxfoXqFuZJLx4iYc4Un7ywhb9_gl5LRS7J6chYTI-KRgVM0A5P9yMM17c4mZ2X_d3kGKktIUTrXyQjUVcaH0CTghWAOx4lyJ-Y8L173_IY4vt0y_a4W7XHj-ymbTFp0afHOluhZibPd8OnP9YtapGL79ISq7UtGOfVJJsXxhVGvnjpihCu7QHvyK3cwVlc9AJ6Ufsw89DmwqDFgL9lU58ETABiOcSeapruUNYyu1sydJA',
    desc: 'Affiliation Code: HS-1092',
  },
  {
    code: 'GIGW 3.0',
    title: 'Guidelines for Indian Government Websites',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL7h1T0MMNndK63O5NZftA8b4NtEu0TjC6v-8VC2Q6jE5HnPAzot8JIKXoV5KVLEVCpiWgZDjcfZOZN1cRMlhqh-sQl6GyCxkVenoxNCbCDqGnTEVXEbn7dhphng0tbusxpyKp09RK6NbVIT7Fe_LdjOqn90cPbcSu1fEr2bK3UI9NQxuO8Jcb0QoVCXzPqqbBByx9QWjMx85uk5P3ulNciM24JLWvkVnb8hBZqHIB3ChXnhyZeGWFWg',
    desc: 'Digital Accessibility Compliant',
  },
];

const AccreditationBadges = () => {
  return (
    <section className="bg-surface-container-low py-14 px-6 sm:px-10 rounded-2xl mb-16 border border-outline-variant/60">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-label-md text-xs sm:text-sm text-ash-gray uppercase tracking-widest mb-10 font-bold">
          Government Recognition & Institutional Accreditations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {recognitions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group p-4 rounded-xl hover:bg-white transition-all shadow-none hover:shadow-sm"
            >
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-outline-variant/40 group-hover:scale-105 transition-transform">
                <img className="h-full object-contain" alt={item.title} src={item.logo} />
              </div>
              <span className="font-label-md text-base font-bold text-primary">{item.code}</span>
              <p className="font-body-md text-xs text-on-surface-variant max-w-[200px] leading-tight">
                {item.title}
              </p>
              <span className="text-[11px] font-mono text-ash-gray">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationBadges;
