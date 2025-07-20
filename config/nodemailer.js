import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from './env.js'
const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'shreyamregmi5@gmail.com',
        pass: EMAIL_PASSWORD
    }

})