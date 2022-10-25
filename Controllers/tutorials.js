const getAllTutorials = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

const getSingleTutorial = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

const createSingleTutorial = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

const updateSingleTutorial = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

const deleteSingleTutorial = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

module.exports = {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
};
