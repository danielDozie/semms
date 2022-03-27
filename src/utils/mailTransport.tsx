import nodemailer from 'nodemailer';

const config = {
    //pool: true,
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  }
const mailTransport = nodemailer.createTransport(config);


export default mailTransport;
