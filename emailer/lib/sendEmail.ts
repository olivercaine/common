import { createTransport, SendMailOptions } from 'nodemailer';

export function sendEmail(auth, mailOptions: SendMailOptions) {

    const transporter = createTransport({
        auth,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
    });

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('Error', err);
        } else {
            console.log('Email Sent');
        }
    });

}
