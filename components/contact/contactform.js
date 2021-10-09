import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    // add script to clear the form and show a message that the message was send (or an error occurred..)
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Naam:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email adres:</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Versturen</button>
        </form>
      </main>
    </div>
  );
}

export default ContactForm;
