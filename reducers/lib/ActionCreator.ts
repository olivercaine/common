// ------------------------------------
// Action creator
// ------------------------------------
export function createAction<T>(type: string, payload: T): {
  readonly payload: T;
  readonly type: string;
} {
  return {
    payload,
    type,
  };
}
