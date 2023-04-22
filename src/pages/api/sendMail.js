// this is node mailer
import nodemailer from "nodemailer";
const emailValidator = require("deep-email-validator");

export default async function handler(req, res) {
  const { valid } = await emailValidator.validate(req.body.email);

  if (!valid) {
    res.status(200).json({ sent: false });
  } else {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rudradev252@gmail.com",
        pass: "pdzpvkuhrmgahgxx",
      },
    });
    const mailOptions = {
      from: "devrudra825@gmail.com",
      to: req.body.email,
      subject: `We recived your message - Code Blog`,
      text: `Thank you ${req.body.name} for contacting me. I will try to reach out to you as soon as possible`,
      html: `<div
      style="
        max-width: 30rem;
        display: grid;
        place-items: center;
        padding: 2rem;
        border: 2px solid #000;
        border-radius: 20px;
        margin: 0px auto;
      "
    >
      <h1>Thank you ${req.body.name} for contacting me!</h1>
      <p style="width: 30em">
        I wanted to take a moment to express my gratitude for reaching out to
        me. Your message means a lot to me, and I appreciate you taking the time
        to contact me. I got your message and I will try to response to it as
        soon as I can!
      </p>
    </div>`,
    };

    const mymailOptions = {
      from: "devrudra825@gmail.com",
      to: "devrudra825@gmail.com",
      subject: "A new contact form submited!",
      html: `This mail is from ${req.body.name}. <br> Email: ${req.body.email} <br> Message: ${req.body.message}`,
    };

    try {
      await transporter.sendMail(mymailOptions);
      await transporter.sendMail(mailOptions);
      res.status(200).json({ sent: true });
    } catch (error) {
      res.status(200).json({ sent: false });
    }
  }
}
