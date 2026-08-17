import React, { useEffect, useState } from 'react';
import { fetchNotices } from '../services/api.js';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices().then(res => {
      if (res.success) setNotices(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container" style={{ padding: '40px 16px' }}>
      <h2>Notice Board & Circulars</h2>
      {loading ? (
        <p>Loading notices...</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          {notices.map(notice => (
            <div key={notice.id} style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '12px' }}>
              <h3>{notice.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748b' }}>Category: {notice.category} | Date: {notice.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;
