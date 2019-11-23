import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Change email
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ebs.mailer@gmail.com",
    pass: "Obsession1987"
  }
});

app.post("/", (req, res) => {
  const mailBody = req.body.body;
  const mailOptions = {
    from: "contact@e-b-s.ro", // sender address
    to: "contact@e-b-s.ro", // list of receivers
    subject: req.body.subject, // Subject line
    html: mailBody // plain text body
  };

  transporter.sendMail(mailOptions);
  res.status(200).send();
});

export default app;
