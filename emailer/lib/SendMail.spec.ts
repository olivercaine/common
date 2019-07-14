import { expect } from 'chai';
import { SendMailOptions } from 'nodemailer';
import { SendEmail } from '.';

describe('Given some credentials', () => {
    describe('When sending email', () => {
        it('Should send without exception', () => {
            // Arrange
            const auth = {
                clientId: '************-********************************.apps.googleusercontent.com',
                clientSecret: '************************',
                refreshToken: '*/***********-**************-****************',
                type: 'OAuth2',
                user: '<OAUTH_EMAIL_ADDRESS>',
            };

            const mailOptions: SendMailOptions = {
                from: '<SENDER_NAME> <SENDER_EMAIL_ADDRESS>',
                html: '<a href="https://www.site.com/verify" target="_blank">Verify now</a>',
                subject: 'Verify your email address',
                text: 'Verify now: http://www.site.com/verify',
                to: '<RECIPIENT_EMAIL_ADDRESS>',
            };

            // Act
            const response = SendEmail(auth, mailOptions);

            // Assert
            expect(response).to.equal(undefined);
        });
    });
});
