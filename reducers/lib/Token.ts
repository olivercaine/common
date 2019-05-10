import { IAction, IActionWithPayload } from './ActionCreator';

// ------------------------------------
// Action names
// ------------------------------------
export const SHOULD_DELETE_TOKEN = 'SHOULD_DELETE_TOKEN';
export const DID_GET_TOKEN = 'DID_GET_TOKEN';

// ------------------------------------
// Action definitions
// ------------------------------------
export type TokenAction =
  | IAction<typeof SHOULD_DELETE_TOKEN>
  | IActionWithPayload<typeof DID_GET_TOKEN, string>;

// ------------------------------------
// Domain & State
// ------------------------------------
export interface ITokenState {
  token: string | undefined;
}

export const initialState: ITokenState = {
  token: undefined,
};

// ------------------------------------
// Reducer
// ------------------------------------
export function tokenReducer(state: ITokenState = initialState, action: TokenAction): ITokenState {
  switch (action.type) {
    case DID_GET_TOKEN:
      return {...state, token: action.payload };
    case SHOULD_DELETE_TOKEN:
      return {...state};
    default:
      return state;
  }
}
