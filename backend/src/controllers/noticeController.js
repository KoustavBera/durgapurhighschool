// Controller logic for school notices

export const getNotices = async (req, res, next) => {
  try {
    // TODO: Connect database query (e.g. Notice.find())
    res.status(200).json({
      success: true,
      data: [
        {
          id: '1',
          title: 'Admissions Open for Academic Session 2026-2027',
          category: 'Admission',
          date: '2026-08-10',
          isUrgent: true
        }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export const createNotice = async (req, res, next) => {
  try {
    const { title, category, content } = req.body;
    // TODO: Validate & save to database
    res.status(201).json({
      success: true,
      message: 'Notice published successfully',
      data: { title, category, content }
    });
  } catch (error) {
    next(error);
  }
};
