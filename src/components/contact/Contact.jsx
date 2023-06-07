//imports
import "./contact.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [message, setMessage] = useState(""); //seteo mensaje vacio

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Mensaje enviado:", message); //reemplazar por sweet alert
    setMessage("");
  };

  const handleChange = (evt) => {
    setMessage(evt.target.value);
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
