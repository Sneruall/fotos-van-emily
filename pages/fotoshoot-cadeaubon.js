import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Section from "../components/layout/Section";
import Image from "next/image";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import ContactFormElement from "../components/sections/elements/ContactFormElement";

function fotoshootCadeaubon() {
  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <Header
        img="/images/cadeaubon/header.png"
        imgMobile="/images/cadeaubon/headerm.png"
        pageTitle2="Fotoshoot Cadeaubon"
      />

      <Section bg={"bg-grey-pinkish2"}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="border-white border relative z-10">
            <div className="bg-white bg-opacity-70 p-10 m-1">
              <div className="mx-auto">
                {/* Cadeaukaart */}
                <h1 className="title-2 text-3xl mb-2 text-center">
                  OP ZOEK NAAR EEN ORIGNEEL CADEAU?
                </h1>
                <div className="border-b-2 border-brown-pale2 w-full max-w-xs mx-auto"></div>
                <h2 className="title-1 my-5 text-6xl leading-tight text-center ">
                  Doe een fotoshoot cadeau!
                </h2>
                <div className="flex flex-col lg:flex-row gap-10 my-16 max-w-4xl mx-auto">
                  <div>
                    <Image
                      src="/images/cadeaubon/Business-A4-Mockup3.png"
                      alt="Emily van Roomen"
                      width={1800}
                      height={1628}
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <p>
                      Je beste vriendin verassen met een zwangerschapsshoot? Of
                      je partner met een loveshoot? Verras ze met een fotoshoot!
                      Een uniek en waardevol cadeau; niet alleen geef je ze een
                      leuke ervaring maar ook een cadeau waar ze voor altijd van
                      kunnen blijven genieten!
                    </p>
                    <p className="mt-5">
                      Je kunt een specifieke shoot cadeau doen zoals een
                      zwangerschap of portret. Maar je kunt ook een bepaald
                      bedrag cadeau doen. De bon komt in de vorm van een mooie
                      kaart die je zelf kunt invullen en personaliseren!
                    </p>
                  </div>
                </div>
                {/* Vraag een cadeaubon aan */}
                <div className="lg:my-10 my-5">
                  <h1 className="title-2 text-2xl lg:text-3xl mb-2 text-center">
                    Vraag een Cadeaubon aan
                  </h1>
                  <div className="border-b-2 border-brown-pale2 w-full max-w-xs mx-auto"></div>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-6 justify-center">
                  <div className="flex gap-1 items-center">
                    <MailIcon className="h-5 text-charcoal" />
                    <a
                      className="hover:underline"
                      href="mailto:info@fotosvanemily.nl"
                    >
                      info@fotosvanemily.nl
                    </a>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIcon className="h-5 text-charcoal" />
                    <a className="hover:underline" href="tel:0031652331778">
                      06 52 33 17 78
                    </a>
                  </div>
                </div>
                <ContactFormElement
                  textPlaceholder="Typ hier je bericht…
Graag hoor ik voor welk bedrag je een bon wilt bestellen. Tot slot graag vermelden op welk adres je de bon wilt ontvangen.*"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Fragment>
  );
}

export default fotoshootCadeaubon;
