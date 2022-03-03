export interface PaginationState {
  totalPages: number;
  currentPage: number;
}

export enum PaginationActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  SELECT = "SELECT",
  SET_TOTAL = "SET_TOTAL",
}

export interface IncrementPage {
  type: PaginationActionType.INCREMENT;
}

export interface DecrementPage {
  type: PaginationActionType.DECREMENT;
}

export interface SelectPage {
  type: PaginationActionType.SELECT;
  payload: number;
}

export interface SetTotalPages {
  type: PaginationActionType.SET_TOTAL;
  payload: number;
}

export type PaginationAction =
  | IncrementPage
  | DecrementPage
  | SelectPage
  | SetTotalPages;
