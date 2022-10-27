const express = require("express");
const checkAuthStatus = require("../Middleware/checkAuthStatus");
const {
  getAllTutorials,
  getSingleTutorial,
  createSingleTutorial,
  updateSingleTutorial,
  deleteSingleTutorial,
} = require("../Controllers/tutorials");

const router = express.Router();

router.use(checkAuthStatus);

router.get("/", getAllTutorials);

router.get("/:id", getSingleTutorial);

router.post("/", createSingleTutorial);

router.patch("/:id", updateSingleTutorial);
router.put("/:id", updateSingleTutorial);

router.delete("/:id", deleteSingleTutorial);

module.exports = router;
