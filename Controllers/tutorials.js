import Tutorial from "../Models/tutorials.js";

const getAllTutorials = async (req, res) => {
  const { userId } = req;
  try {
    const allTutorials = await Tutorial.find({ userId });
    res.status(200).json(allTutorials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleTutorial = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const singleTutorial = await Tutorial.find({ id, userId });

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
  const { userId } = req;

  try {
    const singleTutorial = await Tutorial.findOneAndUpdate(
      { _id: id, userId },
      { ...req.body }
    );

    if (!singleTutorial)
      return res.status(404).json({ error: "No tutorial found." });

    res.status(200).json(singleTutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSingleTutorial = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const singleTutorial = await Tutorial.findOneAndDelete({ _id: id, userId });
    if (!singleTutorial)
      return res.status(404).json({ error: "No tutorial found." });
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
