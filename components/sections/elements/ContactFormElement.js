import { useState, useRef } from "react";
import { useRouter } from "next/router";
import * as ga from "../../../lib/ga";

function ContactFormElement(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const myFormRef = useRef(null);

  const router = useRouter();

  const generateLead = () => {
    ga.event({
      action: "generate_lead",
    });
  };

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
    })
      .then((res) => {
        clearForm();
        if (res.status == "200") {
          generateLead();
          router.push("/bericht-verzonden");
        } else {
          console.log(res);
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const clearForm = () => {
    myFormRef.current.reset();
  };

  return (
    <form ref={myFormRef} onSubmit={handleSubmit}>
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
          placeholder={props.textPlaceholder}
          rows="12"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="max-w-xl mx-auto">
        <button
          className="border-2 border-brown-pale bg-brown-pale hover:bg-transparent hover:text-brown-pale text-white font-semibold uppercase py-2 px-6 rounded-full"
          type="submit"
        >
          Verstuur
        </button>
        {error && (
          <p className="my-5 text-red-600">
            Oeps, er gaat iets mis! Neem anders even contact op via mail of
            telefoon:
            <a
              href="mailto:info@fotosvanemily.nl"
              className="hover:underline text-charcoal"
            >
              info@fotosvanemily.nl
            </a>
            <span className="text-charcoal"> / </span>
            <a
              href="tel:+31652331778"
              className="text-charcoal hover:underline"
            >
              06 52 33 17 78
            </a>
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactFormElement;
