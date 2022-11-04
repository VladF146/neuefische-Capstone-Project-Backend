import express from 'express';
import checkAuthStatus from '../Middleware/checkAuthStatus.js';
import {
  getAllNotes,
  getSingleNote,
  createSingleNote,
  updateSingleNote,
  deleteSingleNote,
} from '../Controllers/notes.js';

const router = express.Router();

router.use(checkAuthStatus);

router.get('/', getAllNotes);

router.get('/:id', getSingleNote);

router.post('/', createSingleNote);

router.patch('/:id', updateSingleNote);
router.put('/:id', updateSingleNote);

router.delete('/:id', deleteSingleNote);

export default router;
