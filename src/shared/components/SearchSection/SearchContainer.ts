import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getJobs } from "../../../store/jobs/actions";
import { JobAction } from "../../../store/jobs/types";
import SearchSection from "./SearchSection";

const mapDispatchToProps = (dispatch: Dispatch<JobAction>) => {
  return {
    onSearch: (query: string) => {
      dispatch(getJobs(1, query));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchSection);
