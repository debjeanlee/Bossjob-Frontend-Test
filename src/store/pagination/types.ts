export enum PaginationActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  SELECT = "SELECT",
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

export type PaginationAction = IncrementPage | DecrementPage | SelectPage;
