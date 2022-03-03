import { connect } from "react-redux";
import { AppState } from "../../../store/root/reducer";
import TotalJobs from "./TotalJobs";

const mapStateToProps = (state: AppState) => {
  return {
    totalListings: state.jobs.total,
  };
};

export default connect(mapStateToProps, null)(TotalJobs);
