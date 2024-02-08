const asyncHandler = require("express-async-handler");
const Song = require("../model/song");
const { filterSongs } = require("../utils/filterSongs");
const {
  validateSong,
  validateSongUpdate,
  validateSongID,
} = require("../validation/song");
const { BadRequestError, ServerError } = require("../helpers/api-errors");

//get song
const getSong = asyncHandler(async (req, res) => {
  const songs = await Song.find();

  if (songs) {
    const { artists, albums, genres } = filterSongs(songs);

    res.status(201).json({ songs, artists, albums, genres });
  } else {
    res.status(500).json("Error occured while getting song");
  }
});

//add song
const addSong = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { error, value } = validateSong(req.body);

  if (error) return res.status(400).json({ message: error?.message });

  const song = await Song.create({
    title: value.title,
    artist: value.artist,
    album: value.album,
    genre: value.genre,
  });

  if (!song) throw new ServerError("Error occured");

  const songs = await Song.find();

  if (songs) {
    const { artists, albums, genres } = filterSongs(songs);

    res.status(201).json({ songs, artists, albums, genres });
  } else {
    res.status(500).json("Error occured while adding song");
  }
});

//update song
const updateSong = asyncHandler(async (req, res) => {
  const { error, value } = validateSongUpdate(req.body);

  if (error) return res.status(400).json({ message: error?.message });

  console.log(req.body);

  const song = await Song.findOneAndUpdate(
    { _id: value._id },
    {
      $set: {
        title: value.title,
        artist: value.artist,
        album: value.album,
        genre: value.genre,
      },
    }
  );

  if (!song) throw new BadRequestError("Song Not Found");

  const songs = await Song.find();

  if (songs) {
    const { artists, albums, genres } = filterSongs(songs);

    res.status(201).json({ songs, artists, albums, genres });
  } else {
    res.status(500).json("Error occured while updating song");
  }
});

//delete song
const deleteSong = asyncHandler(async (req, res) => {
  const { error, value } = validateSongID(req.params);

  if (error) return res.status(400).json({ message: error?.message });

  const song = await Song.findOneAndDelete({ _id: value._id }, { new: true });

  if (!song) throw new BadRequestError("Song Not Found");

  const songs = await Song.find();

  if (songs) {
    const { artists, albums, genres } = filterSongs(songs);

    res.status(201).json({ songs, artists, albums, genres });
  } else {
    res.status(500).json("Error occured while updating song");
  }
});

module.exports = {
  addSong,
  getSong,
  updateSong,
  deleteSong,
};
