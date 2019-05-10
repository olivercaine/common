import { IAction, IActionWithPayload } from './ActionCreator';

/* --------------------------------------------------
This Redux component is based on *interfaces*.

Pros:
    - Good type checking when setting state from payload in reducer

Cons:
    - "payload" and "type" are barely repeated
-------------------------------------------------- */

// ------------------------------------
// Action names
// ------------------------------------
export const SHOULD_DELETE_TOKEN = 'SHOULD_DELETE_TOKEN';
export const DID_GET_TOKEN = 'DID_GET_TOKEN';

// ------------------------------------
// Action definitions
// ------------------------------------
export interface IShouldGetTokenAction extends IAction<typeof SHOULD_DELETE_TOKEN> { }

export interface IDidGetTokenAction extends IActionWithPayload<typeof DID_GET_TOKEN, string> {
  payload: string;
}

export type TokenAction =
  | IShouldGetTokenAction
  | IDidGetTokenAction;

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
