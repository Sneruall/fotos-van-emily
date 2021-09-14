import { useState } from "react";

function ContactFormElement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      tel,
      onderwerp,
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
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 my-10 max-w-xl mx-auto">
        <input
          className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
          id="name"
          type="text"
          placeholder="Naam*"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
          id="email"
          type="email"
          placeholder="Email*"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
          id="tel"
          type="tel"
          placeholder="Telefoonnummer"
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
          id="onderwerp"
          type="text"
          placeholder="Onderwerp"
          onChange={(e) => setOnderwerp(e.target.value)}
        />
        <textarea
          className="col-span-full rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
          id="message"
          type="text"
          placeholder="Typ hier je bericht...*"
          rows="12"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="max-w-xl mx-auto">
        <button
          className="bg-brown-pale hover:bg-reddish text-white font-semibold uppercase py-4 px-6 rounded-full min-w-170"
          type="submit"
        >
          Verstuur
        </button>
      </div>
    </form>
  );
}

export default ContactFormElement;
