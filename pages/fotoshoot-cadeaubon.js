import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Section from "../components/layout/Section";
import Image from "next/image";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import ContactFormElement from "../components/sections/elements/ContactFormElement";
import { NextSeo } from "next-seo";
import FadeInEffect from "../components/sections/elements/FadeInEffect";
import { Controller } from "react-scrollmagic";

function fotoshootCadeaubon() {
  return (
    <Fragment>
      <NextSeo
        title="Fotoshoot cadeaubon | De Foto's van Emily"
        description="Fotoshoot cadeaubon van professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.fotosvanemily.nl/fotoshoot-cadeaubon",
          title: "Fotoshoot cadeaubon | De Foto's van Emily",
          description:
            "Fotoshoot cadeaubon van professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Fotoshoot cadeaubon",
            },
            {
              url: "/images/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Fotoshoot cadeaubon",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} />

      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/cadeaubon/header.png"
              alt="Fotoshoot Cadeaubon"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/cadeaubon/headerm.png"
              alt="Fotoshoot Cadeaubon"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-40 sm:bottom-20">
              <h1 className="text-6xl sm:text-8xl md:text-9xl leading-tight font-display uppercase py-4 text-charcoal-2">
                Fotoshoot Cadeaubon
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Section bg={"bg-grey-pinkish2"}>
        <div className="mx-auto max-w-6xl">
          <div className="border-white border relative z-10">
            <div className="bg-white bg-opacity-70 px-2 py-5 lg:p-10 m-1">
              <div className="mx-auto">
                {/* Cadeaukaart */}
                <h1 className="title-2 text-3xl mb-2 text-center">
                  OP ZOEK NAAR EEN ORIGNEEL CADEAU?
                </h1>
                <div className="max-w-xs mx-10 lg:mx-auto">
                  <div className="border-b-2 border-brown-pale2 w-full max-w-xs mx-auto"></div>
                </div>
                <h2 className="title-1 my-5 text-5xl sm:text-6xl leading-tight text-center ">
                  Doe een fotoshoot cadeau!
                </h2>
                <div className="flex flex-col lg:flex-row gap-10 my-16 max-w-4xl mx-auto">
                  <div>
                    <Controller>
                      <FadeInEffect
                        effect="fade-in-effect-left"
                        fade
                        left
                        offset={-80}
                      >
                        <Image
                          src="/images/cadeaubon/Business-A4-Mockup3.png"
                          alt="Emily van Roomen"
                          width={1800}
                          height={1628}
                        />
                      </FadeInEffect>
                    </Controller>
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
