const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Message is required" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "", // Reemplaza con tu dirección de correo electrónico
      pass: "", // Reemplaza con tu contraseña de correo electrónico
    },
  });

  try {
    const mailOptions = {
      from: "nviscio@gmail.com",
      to: "hola@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: message,
    };

    await transporter.sendMail(mailOptions);

    console.log("Mensaje enviado:", message);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = router;
