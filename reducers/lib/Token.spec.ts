import { expect } from 'chai';
import { createAction } from './ActionCreator';
import { DID_GET_TOKEN, ITokenState, SHOULD_DELETE_TOKEN, tokenReducer } from './Token';

describe('Given a user', () => {
    describe('When receiving a token', () => {
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
    describe('When wanting to delete token', () => {
        it('Then it should no longer be on the state', () => {
            // Given
            const state: ITokenState = {
                token: 'authenticatedToken',
            };
            const action = createAction(SHOULD_DELETE_TOKEN);

            // When
            const newState = tokenReducer(state, action);

            // Then
            expect(newState.token).to.equal(undefined);
        });
    });
});
