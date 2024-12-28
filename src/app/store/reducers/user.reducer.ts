import { UserI } from "src/app/interfaces/user";

export interface AppState {
  tasks: UserI[];
}

export const initialState: AppState = {
  tasks: []
};

export function userReducer(state = initialState, action): AppState {
  switch (action.type) {
    default:
      return state;
  }
}