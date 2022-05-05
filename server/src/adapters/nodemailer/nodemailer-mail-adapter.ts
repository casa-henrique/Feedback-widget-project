import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0b10af1fea6fa8",
    pass: "e7aa94931aca2a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = await transport.sendMail({
      from: "Curriculum <feedget@hcurriculum.com>",
      to: "Henrique Casagrande <riquecasa@gmail.com>",
      subject,
      html: body,
    });
  }
}
