// Trying build a boilerplate feature in Redux. Still needs work - unit tests and figuring out `export type LoginAction`
// https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103

// ------------------------------------
// Action names
// ------------------------------------
export const SHOULD_LOGIN = 'SHOULD_LOGIN';
export const DID_LOGIN_SUCCESSFULLY = 'DID_LOGIN_SUCCESSFULLY';
export const DID_FAIL_LOGIN = 'DID_FAIL_LOGIN';

// ------------------------------------
// Definitions
// ------------------------------------
export interface ILoginState {
    error: string | undefined;
    user: IUser | undefined;
    isLoading: boolean;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IUser {
    email: string;
    id: string;
    profilePicture: string;
}

export type LoginAction =
    | { type: 'SHOULD_LOGIN'; payload: ILoginData }
    | { type: 'DID_LOGIN_SUCCESSFULLY'; payload: IUser }
    | { type: 'DID_FAIL_LOGIN'; payload: string };

// ------------------------------------
// Actions
// ------------------------------------
export function shouldLogin(payload: ILoginData): LoginAction {
    return { type: SHOULD_LOGIN, payload };
}

export function didLoginSuccessfully(payload: IUser): LoginAction {
    return { type: DID_LOGIN_SUCCESSFULLY, payload };
}

export function didFailLogin(payload: string): LoginAction {
    return { type: DID_FAIL_LOGIN, payload };
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: ILoginState = {
    error: undefined,
    isLoading: false,
    user: undefined,
};
export function loginReducer(state = initialState, action: LoginAction): ILoginState {
  switch (action.type) {
    case SHOULD_LOGIN:
      return {...state, isLoading: true};
    case DID_LOGIN_SUCCESSFULLY:
      return {...state, isLoading: false, user: action.payload};
    case DID_FAIL_LOGIN:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
