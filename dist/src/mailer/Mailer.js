"use strict";
// import * as nodemailer from 'nodemailer'
// import { Mailable } from './Mailable'
// export type EmailConfig = {
//   readonly host: string
//   readonly port: number
//   readonly username: string
//   readonly password: string
// }
// class Mailer implements Mailable {
//   constructor (
//     readonly to?: string,
//     readonly subject?: string,
//     readonly message?: string
//     ) { }
//   createMessage () {
//   }
//   send () {
//     const mailOptions = {
//       from: "portalband@band.com.br",
//       to: this.to,
//       subject: this.subject,
//       html: this.message
//     }
//     const transporter = nodemailer.createTransport({
//       host: config.host,
//       port: config.port,
//       secure: false,
//       auth: {
//         user: config.username,
//         pass: config.password
//       },
//       tls: { rejectUnauthorized: false }
//     })
//     console.log(mailOptions)
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return error
//       } else {
//         return 'E-mail enviado com sucesso!'
//       }
//     })
//   }
// }
//# sourceMappingURL=Mailer.js.map