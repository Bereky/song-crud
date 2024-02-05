import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import songReducer from "./songSlice";
import songSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { song: songReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(songSaga);
