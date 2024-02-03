const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aladhanriz@gmail.com",
    pass: "tkznbdpoyjsgljhf",
  },
});

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const user = "aladhanriz@gmail.com";

  const data = {
    name,
    email,
    message,
  };

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: user,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Could not send the email. Your message was not sent" });
  }
}

