import { ActionType } from "./redux-store";

const initialAuthState: DataType = {
  id: null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
};
export const authReducer = (
  state: initialAuthStateType = initialAuthState,
  action: ActionType,
): initialAuthStateType => {
  switch (action.type) {
    case "SET-USER-DATA":
      // debugger;
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (data: DataType) => ({ type: "SET-USER-DATA", data }) as const;

export default authReducer;

export type initialAuthStateType = typeof initialAuthState;

export type DataType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
};
