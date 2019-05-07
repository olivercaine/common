import { expect } from 'chai';
import { ILoginState, IUser, loginReducer, loginSuccess } from './Login';

describe('Given no user exists', () => {
    describe('When successfully logging in', () => {
        it('Then user should exist on state', () => {
            // Given
            const state: ILoginState = {
                error: undefined,
                isLoading: false,
                user: undefined,
            };
            const user: IUser = {
                email: 'me@mail.com',
                id: '123',
                profilePicture: 'me.jpg',
            };
            const action = loginSuccess(user);

            // When
            const result = loginReducer(state, action);

            // Then
            expect(result.user!.email).to.equal('me@mail.com');
        });
    });
});
