import { expect } from 'chai';
import { createAction } from './ActionCreator';
import { DID_LOGIN_SUCCESSFULLY, ILoginState, IUser, LoginAction, loginReducer } from './Login';

describe('Given no user exists', () => {
    describe('When successfully logging in', () => {
        it('Then user should exist on state', () => {
            // Given
            const state: ILoginState = {
                error: undefined,
                isLoading: false,
                user: undefined,
            };
            const payload: IUser = {
                email: 'me@mail.com',
                id: '123',
                profilePicture: 'me.jpg',
            };
            const action = createAction<IUser>(DID_LOGIN_SUCCESSFULLY, payload) as LoginAction;

            // When
            const result = loginReducer(state, action);

            // Then
            expect(result.user!.email).to.equal('me@mail.com');
        });
    });
});
