import {
  GetJobs,
  Job,
  JobActionType,
  RequestJobs,
  RequestJobsFailure,
  RequestJobsSuccess,
  SetJobQuery,
} from "./types";

export const getJobs = (page: number, query?: string): GetJobs => {
  return {
    type: JobActionType.GET,
    query: query ?? "",
    page,
  };
};

export const getJobsRequest = (): RequestJobs => {
  return {
    type: JobActionType.REQUEST,
  };
};

export const getJobsSuccess = (
  jobs: Job[],
  total: number
): RequestJobsSuccess => {
  return {
    type: JobActionType.SUCCESS,
    payload: { jobs, total },
  };
};

export const getJobsFailure = (error: unknown): RequestJobsFailure => {
  return {
    type: JobActionType.ERROR,
    payload: error,
  };
};

export const setJobQuery = (query: string): SetJobQuery => {
  return {
    type: JobActionType.SET_QUERY,
    payload: query,
  };
};
