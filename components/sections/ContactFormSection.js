import Section from "../layout/Section";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Button from "../ui/button";

function ContactFormSection() {
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
    <Section bg={"bg-grey-pinkish2"}>
      <div className="mx-auto max-w-6xl">
        {/* intro text */}
        <h1 className="title-1">Neem contact op</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex gap-1 items-center">
            <MailIcon className="h-5 text-charcoal" />
            <div>info@fotosvanemily.nl</div>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon className="h-5 text-charcoal" />
            <div>+31 6 52331778</div>
          </div>
        </div>
        {/* contact form todo: los component van maken*/}
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-2 my-10 max-w-xl mx-auto">
            <input
              className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
              id="name"
              type="text"
              placeholder="Naam"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="col-span-full rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
              id="message"
              type="text"
              placeholder="Typ hier je bericht..."
              rows="12"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-brown-pale hover:bg-reddish text-white font-semibold uppercase py-4 px-6 rounded-full min-w-170"
              type="submit"
            >
              Versturen
            </button>
          </div>
        </form>
        {/* contact form */}
      </div>
    </Section>
  );
}

export default ContactFormSection;
