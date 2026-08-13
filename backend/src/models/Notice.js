// Data Model Schema Definition Placeholder (e.g. Mongoose or SQL schema)

const NoticeSchema = {
  title: { type: String, required: true },
  category: { type: String, enum: ['Admission', 'Exam', 'Event', 'General'], default: 'General' },
  content: { type: String, required: true },
  pdfUrl: { type: String },
  isUrgent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
};

export default NoticeSchema;
