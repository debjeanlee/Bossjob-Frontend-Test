import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { selectPage, setTotalPages } from "../pagination/actions";
import {
  getJobsFailure,
  getJobsRequest,
  getJobsSuccess,
  setJobQuery,
} from "./actions";
import * as Api from "./service";
import { GetJobs, JobActionType } from "./types";

export function* onLoadJobs({ query, page }: GetJobs) {
  try {
    yield put(getJobsRequest());
    yield put(setJobQuery(query));
    yield put(selectPage(page));
    const { data } = yield call(Api.fetchJobs, page, query);
    yield put(getJobsSuccess(data.data.jobs, data.data.total_num));
    yield put(setTotalPages(data.data.total_pages));
  } catch (error) {
    yield put(getJobsFailure(error));
  }
}

function* watchOnLoadJobs() {
  yield takeEvery(JobActionType.GET, onLoadJobs);
}

export default function* jobsSaga() {
  yield all([fork(watchOnLoadJobs)]);
}
