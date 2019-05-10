import { expect } from 'chai';
import { createAction } from './ActionCreator';
import { DID_GET_TOKEN, ITokenState, IUser, tokenReducer } from './Token';

describe('Given no token exists', () => {
    describe('When receiving a token=', () => {
        it('Then it should get set on state', () => {
            // Given
            const state: ITokenState = {
                token: undefined,
            };
            const payload: string = 'MyNewT0ken';
            const action = createAction(DID_GET_TOKEN, payload);

            // When
            const newState = tokenReducer(state, action);

            // Then
            expect(newState.token).to.equal(payload);
        });
    });
});
