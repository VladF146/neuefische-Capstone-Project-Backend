const Tutorial = require("../Models/tutorials");

const getAllTutorials = async (req, res) => {
  try {
    const allTutorials = await Tutorial.find({});
    res.status(200).json(allTutorials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleTutorial = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTutorial = await Tutorial.findById(id);

    res.status(200).json(singleTutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createSingleTutorial = async (req, res) => {
  const { title, content } = req.body;

  try {
    const singleTutorial = await Tutorial.create({ title, content });
    res.status(200).json(singleTutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSingleTutorial = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTutorial = await Tutorial.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(singleTutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSingleTutorial = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTutorial = await Tutorial.findOneAndDelete({ _id: id });
    res.status(200).json(singleTutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
};
