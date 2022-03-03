import { connect } from "react-redux";
import { AppState } from "../../../store/root/reducer";
import JobListing from "./JobListing";

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobs.jobs,
});

export default connect(mapStateToProps, null)(JobListing);
