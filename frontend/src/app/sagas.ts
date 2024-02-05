import { call, put, takeEvery } from "redux-saga/effects";
import api from "./apis";

import {
  fetchSongSuccess,
  fetchSongFailure,
  addSongSuccess,
  addSongFailure,
  updateSongFailure,
  updateSongSuccess,
  deleteSongFailure,
  deleteSongSuccess,
} from "./songSlice";

function* fetchSongs() {
  try {
    const response: Response = yield call(api.getSongs);
    if (response) {
      yield put(fetchSongSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchSongFailure());
  }
}

function* addSong(action: { type: Object; payload: Song }) {
  try {
    const response: Response = yield call(api.addNewSong, action.payload);
    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure());
  }
}

function* updateSong(action: { type: Object; payload: Song }) {
  try {
    const response: Response = yield call(api.updateMySong, action.payload);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailure());
  }
}

function* deleteSong(action: { type: Object; payload: string }) {
  try {
    const response: Response = yield call(api.deleteMySong, action.payload);
    yield put(deleteSongSuccess(response.data));
  } catch (error) {
    yield put(deleteSongFailure());
  }
}

function* songSaga() {
  yield takeEvery("song/fetchSongPending", fetchSongs);
  /*  yield takeEvery("song/addSongPending", addSong);
  yield takeEvery("song/updateSongPending", updateSong);
  yield takeEvery("song/deleteSongPending", deleteSong); */
}

export default songSaga;
