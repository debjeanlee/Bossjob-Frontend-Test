import { PaginationAction, PaginationActionType } from "./types";

export const nextPage = (): PaginationAction => {
  return {
    type: PaginationActionType.INCREMENT,
  };
};

export const prevPage = (): PaginationAction => {
  return {
    type: PaginationActionType.DECREMENT,
  };
};

export const selectPage = (page: number): PaginationAction => {
  return {
    type: PaginationActionType.SELECT,
    payload: page,
  };
};
