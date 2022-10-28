import Tutorial from '../Models/tutorials.js';

const getAllTutorials = async (req, res) => {
  const { userId } = req;
  try {
    const allTutorials = await Tutorial.find({ _id: userId });
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
  const { userId } = req;

  try {
    const singleTutorial = await Tutorial.create({
      title,
      content,
      userId,
    });
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
      { ...req.body },
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

export {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
};
