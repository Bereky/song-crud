import { createSlice } from "@reduxjs/toolkit";

interface Song {
  _id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

interface Songs {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
  genres: Genre[];
}

// Get songs from localStorage
const songs: Songs = JSON.parse(localStorage.getItem("songs") || "[]");

const initialState = {
  songs: songs ? songs.songs : [],
  artists: songs ? songs.artists : [],
  albums: songs ? songs.albums : [],
  genres: songs ? songs.genres : [],
  songForAction: {},
  status: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status.isLoading = false;
      state.status.isError = false;
      state.status.isSuccess = false;
    },
    setSongForAction: (state, action) => {
      state.songForAction = state.songs.filter(
        (song: Song) => song._id === action.payload
      );
    },
    fetchSongRequest: (state) => {
      state.status.isLoading = true;
    },
    fetchSongSuccess: (state, action) => {
      state.songs = action.payload.songs;
      state.artists = action.payload.artists;
      state.albums = action.payload.albums;
      state.genres = action.payload.genres;
      state.status.isLoading = false;
      state.status.isError = false;
      state.status.isSuccess = false;
      console.log(songs);

      console.log(action.payload);
    },
    fetchSongFailure: (state) => {
      state.status.isError = true;
      state.status.isSuccess = false;
    },

    addSongRequest: (state) => {
      state.status.isLoading = true;
    },
    addSongSuccess: (state, action) => {
      state.songs = action.payload.songs;
      state.artists = action.payload.artists;
      state.albums = action.payload.albums;
      state.genres = action.payload.genres;
      state.status.isLoading = false;
      state.status.isError = false;
      state.status.isSuccess = true;
    },
    addSongFailure: (state) => {
      state.status.isError = true;
      state.status.isSuccess = false;
    },
    updateSongRequest: (state) => {
      state.status.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.songs = action.payload.songs;
      state.artists = action.payload.artists;
      state.albums = action.payload.albums;
      state.genres = action.payload.genres;
      state.status.isLoading = false;
      state.status.isError = false;
      state.status.isSuccess = true;

      console.log(action.payload);
    },
    updateSongFailure: (state) => {
      state.status.isError = true;
      state.status.isSuccess = false;
    },
    deleteSongRequest: (state) => {
      state.status.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = action.payload.songs;
      state.artists = action.payload.artists;
      state.albums = action.payload.albums;
      state.genres = action.payload.genres;
      state.status.isLoading = false;
      state.status.isError = false;
      state.status.isSuccess = true;
    },
    deleteSongFailure: (state) => {
      state.status.isError = true;
      state.status.isSuccess = false;
    },
  },
});

export const {
  setSongForAction,
  fetchSongRequest,
  fetchSongSuccess,
  fetchSongFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
  resetStatus,
} = songSlice.actions;

export default songSlice.reducer;
