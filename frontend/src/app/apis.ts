import axios from "axios";

const API_URL = "http://localhost:8400";

const getSongs = async () => {
  const response = await axios.get(API_URL + "/api/get-song");

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const addNewSong = async (song: NewSong) => {
  const response = await axios.post(API_URL + "/api/add-song", song);

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const updateMySong = async (song: Song) => {
  const response = await axios.put(API_URL + "/api/update-song", song);

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const deleteMySong = async (songId: string) => {
  const response = await axios.delete(API_URL + "/api/delete-song/" + songId);

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const api = {
  getSongs,
  addNewSong,
  updateMySong,
  deleteMySong,
};

export default api;
