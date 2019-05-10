// ------------------------------------
// Domain
// ------------------------------------
export interface IUser {
  email: string;
  id: string;
  profilePicture: string;
}

// ------------------------------------
// Actions
// ------------------------------------
export const SHOULD_LOGIN = 'SHOULD_LOGIN';
export const DID_LOGIN_SUCCESSFULLY = 'DID_LOGIN_SUCCESSFULLY';
export const DID_FAIL_LOGIN = 'DID_FAIL_LOGIN';

export type LoginAction =
  | { type: typeof SHOULD_LOGIN; }
  | { type: typeof DID_LOGIN_SUCCESSFULLY; payload: IUser }
  | { type: typeof DID_FAIL_LOGIN; payload: string };

// ------------------------------------
// State & Reducer
// ------------------------------------
export interface ILoginState {
  error: string | undefined;
  user: IUser | undefined;
  isLoading: boolean;
}

export const initialState: ILoginState = {
  error: undefined,
  isLoading: false,
  user: undefined,
};

export function loginReducer(state: ILoginState = initialState, action: LoginAction): ILoginState {
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
