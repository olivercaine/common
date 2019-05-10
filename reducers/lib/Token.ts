import { IAction, IActionWithPayload } from './ActionCreator';

// ------------------------------------
// Action names
// ------------------------------------
export const DID_GET_TOKEN = 'DID_GET_TOKEN';
export const SHOULD_DELETE_TOKEN = 'SHOULD_DELETE_TOKEN';

// ------------------------------------
// Action definitions
// ------------------------------------
export type TokenAction =
| IActionWithPayload<typeof DID_GET_TOKEN, string>
| IAction<typeof SHOULD_DELETE_TOKEN>;

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
      const copy = {...state};
      delete copy.token;
      return copy;
    default:
      return state;
  }
}
