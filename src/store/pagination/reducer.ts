import { PaginationAction, PaginationActionType } from "./types";

export interface PaginationState {
  totalPages: number;
  currentPage: number;
}

const initialState: PaginationState = {
  totalPages: 10,
  currentPage: 1,
};

const paginationReducer = (
  state: PaginationState = initialState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case PaginationActionType.INCREMENT:
      const nextPage =
        state.currentPage < state.totalPages
          ? state.currentPage + 1
          : state.currentPage;
      return { ...state, currentPage: nextPage };
    case PaginationActionType.DECREMENT:
      const prevPage =
        state.currentPage > 1 ? state.currentPage - 1 : state.currentPage;
      return { ...state, currentPage: prevPage };
    case PaginationActionType.SELECT:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default paginationReducer;
