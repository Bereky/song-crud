const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  artist: {
    type: String,
    require: true,
  },
  album: {
    type: String,
    require: false,
  },
  genre: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Song", songSchema);
