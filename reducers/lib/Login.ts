// Trying build a boilerplate feature in Redux. Still needs work - unit tests and figuring out `export type LoginAction`
// https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103

// ------------------------------------
// Action names
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

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
    | { type: 'LOGIN_REQUEST'; payload: ILoginData }
    | { type: 'LOGIN_SUCCESS'; payload: IUser }
    | { type: 'LOGIN_FAILED'; payload: string };

// ------------------------------------
// Actions
// ------------------------------------
export function loginRequest(payload: ILoginData): LoginAction {
    return { type: LOGIN_REQUEST, payload };
}

export function loginSuccess(payload: IUser): LoginAction {
    return { type: LOGIN_SUCCESS, payload };
}

export function loginFailed(payload: string): LoginAction {
    return { type: LOGIN_FAILED, payload };
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
    case LOGIN_REQUEST:
      return {...state, isLoading: true};
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, user: action.payload};
    case LOGIN_FAILED:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
