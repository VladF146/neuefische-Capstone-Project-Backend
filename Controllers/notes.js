import Note from '../Models/notes.js';

const getAllNotes = async (req, res) => {
  const { userId } = req;
  try {
    const allNotes = await Note.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleNote = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const singleNote = await Note.findOne({ _id: id, userId });

    res.status(200).json(singleNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createSingleNote = async (req, res) => {
  const { title, content } = req.body;
  if (title.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "Title can't be empty or contain only spaces!" });
  }

  if (content.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "Content can't be empty or contain only spaces!" });
  }

  const { userId } = req;

  try {
    const singleNote = await Note.create({
      title,
      content,
      userId,
    });
    res.status(200).json(singleNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSingleNote = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  const { title, content } = req.body;
  if (title.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "Title can't be empty or contain only spaces!" });
  }

  if (content.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "Content can't be empty or contain only spaces!" });
  }

  try {
    const singleNote = await Note.findOneAndUpdate(
      { _id: id, userId },
      { title, content },
    );

    if (!singleNote) return res.status(404).json({ error: 'No note found.' });

    res.status(200).json(singleNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSingleNote = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const singleNote = await Note.findOneAndDelete({ _id: id, userId });
    if (!singleNote) return res.status(404).json({ error: 'No note found.' });
    res.status(200).json(singleNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  getAllNotes,
  getSingleNote,
  createSingleNote,
  updateSingleNote,
  deleteSingleNote,
};
