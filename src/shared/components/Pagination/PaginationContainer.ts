import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getJobs } from "../../../store/jobs/actions";
import { JobAction } from "../../../store/jobs/types";
import {
  nextPage,
  prevPage,
  selectPage,
} from "../../../store/pagination/actions";
import { PaginationAction } from "../../../store/pagination/types";
import { AppState } from "../../../store/root/reducer";
import Pagination from "./Pagination";

const mapStateToProps = (state: AppState) => {
  return {
    currentPage: state.pagination.currentPage,
    totalPages: state.pagination.totalPages,
    query: state.jobs.query,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<PaginationAction | JobAction>
) => {
  return {
    onNextClick: () => dispatch(nextPage()),
    onPrevClick: () => dispatch(prevPage()),
    onPageClick: (page: number) => dispatch(selectPage(page)),
    fetchJobs: (page: number, query: string) => dispatch(getJobs(page, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
