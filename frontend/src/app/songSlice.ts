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
    fetchSongPending: (state) => {
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
    },
    fetchSongFailure: (state) => {
      state.status.isError = true;
      state.status.isSuccess = false;
      console.log("err");
    },

    addSongPending: (state, action) => {
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
    updateSongPending: (state, action) => {
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
    deleteSongPending: (state, action) => {
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
  fetchSongPending,
  fetchSongSuccess,
  fetchSongFailure,
  addSongPending,
  addSongSuccess,
  addSongFailure,
  updateSongPending,
  updateSongSuccess,
  updateSongFailure,
  deleteSongPending,
  deleteSongSuccess,
  deleteSongFailure,
  resetStatus,
} = songSlice.actions;
export default songSlice.reducer;
