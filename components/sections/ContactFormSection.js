import Section from "../layout/Section";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import ContactFormElement from "./elements/ContactFormElement";
import * as ga from "../../lib/ga";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const callAction = () => {
  ga.event({
    action: "click_phone_number",
  });
};

const emailAction = () => {
  ga.event({
    action: "click_email_address",
  });
};

function ContactFormSection(props) {
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath.includes("#contact") &&
      contactRef &&
      contactRef.current
    ) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return () => {};
  }, [router]);

  const contactRef = useRef(null);

  return (
    <Section refProp={contactRef} bg={props.bg}>
      <div className="mx-auto max-w-6xl">
        {/* intro text */}
        <h1 className="title-1">Neem contact op</h1>
        <p className="max-w-2xl mx-auto mb-10 text-center">
          Wil je graag meer informatie, heb je vragen of wil je mij inhuren? Je
          kunt mij bereiken via onderstaand contactformulier of per mail,
          whatsapp of telefoon.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex gap-1 items-center">
            <MailIcon className="h-5 text-charcoal" />
            <a
              className="hover:underline"
              href="mailto:info@fotosvanemily.nl"
              onClick={emailAction}
            >
              info@fotosvanemily.nl
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon className="h-5 text-charcoal" />
            <a
              className="hover:underline"
              href="tel:0031652331778"
              onClick={callAction}
            >
              06 52 33 17 78
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <LocationMarkerIcon className="h-5 text-charcoal" />
            <a
              className="hover:underline"
              href="https://goo.gl/maps/y3X547MeEdVqUisX6"
              target="_blank"
            >
              Zeist (provincie Utrecht)
            </a>
          </div>
        </div>
        <ContactFormElement textPlaceholder="Typ hier je bericht...*" />
      </div>
    </Section>
  );
}

export default ContactFormSection;
