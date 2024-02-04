const asyncHandler = require("express-async-handler");
const Song = require("../model/song");
const { filterSongs } = require("../utils/filterSongs");

//add song
const addSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  const song = await Song.create({
    title: title,
    artist: artist,
    album: album,
    genre: genre,
  });

  if (song) {
    const songs = await Song.find();

    if (songs) {
      const { artists, albums, genres } = filterSongs(songs);

      res.status(201).json({ songs, artists, albums, genres });
    } else {
      res.status(500).json("Error occured while adding song");
    }
  } else {
    res.status(500).json("Error occured while adding song");
  }
});

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

//update song
const updateSong = asyncHandler(async (req, res) => {
  const { _id, title, artist, album, genre } = req.body;

  console.log(req.body);

  const song = await Song.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        title: title,
        artist: artist,
        album: album,
        genre: genre,
      },
    }
  );

  if (song) {
    const songs = await Song.find();

    if (songs) {
      const { artists, albums, genres } = filterSongs(songs);

      res.status(201).json({ songs, artists, albums, genres });
    } else {
      res.status(500).json("Error occured while updating song");
    }
  } else {
    res.status(500).json("Error occured while updating song");
  }
});

//delete song
const deleteSong = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  const song = await Song.findOneAndDelete({ _id: _id }, { new: true });

  if (song) {
    const songs = await Song.find();

    if (songs) {
      const { artists, albums, genres } = filterSongs(songs);

      res.status(201).json({ songs, artists, albums, genres });
    } else {
      res.status(500).json("Error occured while updating song");
    }
  } else {
    res.status(500).json("Error occured while deleting song");
  }
});

module.exports = {
  addSong,
  getSong,
  updateSong,
  deleteSong,
};
