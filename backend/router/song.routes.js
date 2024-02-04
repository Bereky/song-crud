const express = require("express");
const router = express.Router();

const {
  getSong,
  addSong,
  updateSong,
  deleteSong,
} = require("../controller/songController");

router.get("/get-song", getSong);
router.post("/add-song", addSong);
router.put("/update-song", updateSong);
router.delete("/delete-song/:_id", deleteSong);

module.exports = router;
