import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import ShowReducer from "./Show";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { QUERY_ACTION } from "../action/Shows";
import fetchShow from "../Sagas/Show";
import { takeLatest } from "redux-saga/effects";

const reducer = combineReducers({
  show: ShowReducer,
});

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
  yield takeLatest(QUERY_ACTION, fetchShow);
}

export type State = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
