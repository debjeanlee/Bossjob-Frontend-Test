export interface Job {
  id: number;
  degree: string;
  job_title: string;
  job_country: string;
  job_type: string;
  job_location: string;
  salary_range_from: number;
  salary_range_to: number;
  company_name: string;
  company_location: string;
  xp_lvl: string;
  updated_at: string;
  company_logo: string;
}

export interface JobsState {
  total: number;
  jobs: Job[];
  query: string;
}

export enum JobActionType {
  SET_QUERY = "SET_QUERY",
  GET = "GET",
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface SetJobQuery {
  type: JobActionType.SET_QUERY;
  payload: string;
}

export interface GetJobs {
  type: JobActionType.GET;
  query: string;
  page: number;
}

export interface RequestJobs {
  type: JobActionType.REQUEST;
}

export interface RequestJobsSuccess {
  type: JobActionType.SUCCESS;
  payload: {
    jobs: Job[];
    total: number;
  };
}

export interface RequestJobsFailure {
  type: JobActionType.ERROR;
  payload: unknown;
}

export type JobAction =
  | SetJobQuery
  | GetJobs
  | RequestJobs
  | RequestJobsSuccess
  | RequestJobsFailure;
