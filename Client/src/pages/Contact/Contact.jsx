import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/contact", { message });
      setMessage("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contactDiv">
      <main className="contactMain">
        <form className="contactForm" onSubmit={handleSubmit}>
          <h2>Contacto</h2>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
