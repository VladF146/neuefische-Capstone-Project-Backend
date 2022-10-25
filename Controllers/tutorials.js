const getAllTutorials = (req, res) => {
  res.json({ message: `Path: ${req.path}, Method: ${req.method}` });
};

const getSingleTutorial = (req, res) => {
  res.json({
    message: `Path: ${req.path}, Method: ${req.method}, Id: ${req.params.id}`,
  });
};

const createSingleTutorial = (req, res) => {
  res.json({
    message: `Path: ${req.path}, Method: ${req.method}, Body:  ${JSON.stringify(
      req.body
    )}`,
  });
};

const updateSingleTutorial = (req, res) => {
  res.json({
    message: `Path: ${req.path}, Method: ${req.method}, Id: ${
      req.params.id
    }, Body: ${JSON.stringify(req.body)}`,
  });
};

const deleteSingleTutorial = (req, res) => {
  res.json({
    message: `Path: ${req.path}, Method: ${req.method}, Id: ${req.params.id}`,
  });
};

module.exports = {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
};
