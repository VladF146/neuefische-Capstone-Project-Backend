import express from "express";
import checkAuthStatus from "../Middleware/checkAuthStatus.js";
import {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
} from "../Controllers/tutorials.js";

const router = express.Router();

router.use(checkAuthStatus);

router.get("/", getAllTutorials);

router.get("/:id", getSingleTutorial);

router.post("/", createSingleTutorial);

router.patch("/:id", updateSingleTutorial);
router.put("/:id", updateSingleTutorial);

router.delete("/:id", deleteSingleTutorial);

export default router;
