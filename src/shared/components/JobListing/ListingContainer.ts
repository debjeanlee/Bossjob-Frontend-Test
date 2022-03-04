import { Dispatch } from "react";
import { connect } from "react-redux";
import { getJobs } from "../../../store/jobs/actions";
import { JobAction } from "../../../store/jobs/types";
import { AppState } from "../../../store/root/reducer";
import JobListing from "./JobListing";

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobs.jobs,
});

const mapDispatchToProps = (dispatch: Dispatch<JobAction>) => {
  return {
    fetchJobs: () => {
      dispatch(getJobs(1, ""));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JobListing);
