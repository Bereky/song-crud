import { call, put } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";

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
  addSongRequest,
  fetchSongRequest,
  updateSongRequest,
  deleteSongRequest,
} from "./songSlice";

const takeEvery: any = Eff.takeEvery;

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

function* addSong(action: { type: Object; payload: NewSong }) {
  try {
    const response: Response = yield call(api.addNewSong, action.payload);
    if (response) {
      yield put(addSongSuccess(response.data));
    }
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

function* deleteSong(action: { payload: string }) {
  try {
    const response: Response = yield call(api.deleteMySong, action.payload);
    yield put(deleteSongSuccess(response.data));
  } catch (error) {
    yield put(deleteSongFailure());
  }
}

function* songSaga() {
  yield takeEvery(fetchSongRequest.type, fetchSongs);
  yield takeEvery(addSongRequest.type, addSong);
  yield takeEvery(updateSongRequest.type, updateSong);
  yield takeEvery(deleteSongRequest.type, deleteSong);
}

export default songSaga;
