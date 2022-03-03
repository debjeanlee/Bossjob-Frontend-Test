import {
  DecrementPage,
  IncrementPage,
  PaginationActionType,
  SelectPage,
  SetTotalPages,
} from "./types";

export const nextPage = (): IncrementPage => {
  return {
    type: PaginationActionType.INCREMENT,
  };
};

export const prevPage = (): DecrementPage => {
  return {
    type: PaginationActionType.DECREMENT,
  };
};

export const selectPage = (page: number): SelectPage => {
  return {
    type: PaginationActionType.SELECT,
    payload: page,
  };
};

export const setTotalPages = (total: number): SetTotalPages => {
  return { type: PaginationActionType.SET_TOTAL, payload: total };
};
