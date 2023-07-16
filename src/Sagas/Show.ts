import { AnyAction } from "@reduxjs/toolkit";
import { getShowList } from "../Api";
import { call, put } from "redux-saga/effects";
import { ShowsLoadedAction } from "../action/Shows";

function* fetchShow(action: AnyAction): Generator<any, any, any> {
  const shows = yield call(getShowList, action.payload);
  yield put(ShowsLoadedAction(shows));
}

export default fetchShow;
