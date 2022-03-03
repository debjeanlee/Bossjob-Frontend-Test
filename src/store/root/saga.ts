import { all, fork } from "redux-saga/effects";
import jobsSaga from "../jobs/saga";

export default function* rootSaga() {
  yield all([fork(jobsSaga)]);
}
