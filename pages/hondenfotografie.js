import { Fragment, useEffect, useRef, useState } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import EditingSection from "../components/sections/EditingSection";
import SpotlightSection from "../components/sections/SpotlightSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";
import CustomPricingSection from "../components/sections/CustomPricingSection";
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { NextSeo } from "next-seo";

function hondenfotografie() {
  const [section1Height, setSection1Height] = useState(0);
  const section1Ref = useRef(null);
  const [section2Height, setSection2Height] = useState(0);
  const section2Ref = useRef(null);
  const [section3Height, setSection3Height] = useState(0);
  const section3Ref = useRef(null);

  useEffect(() => {
    setSection1Height(section1Ref.current.clientHeight);
    setSection2Height(section2Ref.current.clientHeight);
    setSection3Height(section3Ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSection1Height(section1Ref.current.clientHeight);
      setSection2Height(section2Ref.current.clientHeight);
      setSection3Height(section3Ref.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <NextSeo
        title="Hondenfotografie | De Foto's van Emily"
        description="Hondenfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl/hondenfotografie",
          title: "Hondenfotografie | De Foto's van Emily",
          description:
            "Hondenfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/hondenfotografie/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Hondenfotografie",
            },
            {
              url: "/images/hondenfotografie/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Hondenfotografie",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} lightFade />
      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/hondenfotografie/hero.png"
              alt="Honden fotografie"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/hondenfotografie/hero.png"
              alt="Honden fotografie"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute top-64 sm:bottom-7">
              <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-10xl leading-tight font-display uppercase py-4 text-white">
                Honden fotografie
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Controller>
        <div className="bg-grey-light">
          <div id="page" className="transition ease-linear duration-1000">
            <IntroSection
              heading="JOUW TROUWE VIERVOETER OP ZIJN MOOIST VASTGELEGD!"
              img1="/images/hondenfotografie/img1.png"
              alt1="honden foto"
              text1={[
                "Als groot hondenliefhebber weet ik hoe speciaal de band tussen mens en hond is. Het is je beste maatje, je kindje, je trouwe viervoeter, geen enkele hond is zo leuk als de jouwe! Waarschijnlijk heb je dan ook een miljoen foto’s van jouw viervoeter, maar nog geen of nauwelijks professionele foto’s waarop jouw hond op zijn allermooist te zien is. Foto’s die je met trots aan iedereen laat zien en vergroot aan je muur ophangt! Foto’s die jouw hond zo puur en karakteristiek mogelijk laten zien! Het is natuurlijk ook leuk om samen met je hond op de foto te gaan, alles is mogelijk!",
              ]}
              buttonText1="Boek een hondenshoot"
              portfolioImages={[
                "/images/hondenfotografie/p1.png",
                "/images/hondenfotografie/p2.png",
                "/images/hondenfotografie/p3.png",
              ]}
              portfolioButtonLink="/portfolio"
            />
            <Scene
              triggerElement="#section1"
              classToggle={["#page", "bg-grey-pinkish"]}
              duration={section1Height}
            >
              <div>
                <div id="section1" ref={section1Ref}>
                  <SpotlightSection
                    heading="HOE ZIET EEN HONDENSHOOT ERUIT?"
                    text="Tijdens de fotoshoot gaan we samen op pad. We maken een gezellige wandeling waarbij we opzoek gaan naar mooie plekjes om foto’s te maken. Tijdens het fotograferen zorgen we er samen voor dat jouw hond zo mooi mogelijk gefotografeerd wordt. Neem iets lekkers mee waarvan je weet dat het de aandacht van jouw hond trekt, een favoriet speeltje of andere aandacht trekker. Als we naar een andere locatie lopen kan jouw hond lekker zijn ei kwijt: snuffelen, rennen of gewoon lekker gek doen. Ondertussen klik ik gewoon door voor wat gave actie foto’s!"
                    img="/images/hondenfotografie/spotlight.png"
                    alt="hondenfotografie"
                    review1={[
                      "Emily is een enthousiaste fotografe, die mij en mijn hond Câline mooi op de foto heeft gezet. Zij ziet met haar creatieve blik overal mooie plekjes en kansen voor een leuke foto in. Ze stopt niet tot jij tevreden bent. En dat kan je zien... de foto’s zijn natuurlijk, ongedwongen en brengen de wow factor met zich mee!",
                      "Gaëlla",
                    ]}
                    review2={[
                      "Bedankt voor de super leuke gezellige fotoshoot! De foto's zijn echt prachtig geworden! En de kinderen vonden het super leuk! Geen gedwongen foto sessie maar gewoon lekker spelen en tijdens het spelen foto's maken.",
                      "Chantal",
                    ]}
                    review3={[
                      "Per toeval kwamen we bij Emily terecht. Ze was heel betrokken en kwam met leuke ideeën. Ze zorgde ervoor dat we ons zelf waren voor de camera en mede daardoor zijn de foto’s heel puur geworden. Wij zijn heel blij met het resultaat. Echt een aanrader :)",
                      "Shannon & Gerben",
                    ]}
                  />
                </div>
              </div>
            </Scene>

            <Scene
              triggerElement="#section2"
              classToggle={["#page", "bg-brown-pale2"]}
              duration={section2Height}
            >
              <div>
                <div id="section2" ref={section2Ref}>
                  <EditingSection
                    imgE1="/images/fotobewerking/3e.jpg"
                    imgE2="/images/fotobewerking/3.jpg"
                    imgE4="/images/fotobewerking/3z.jpg"
                  />
                </div>
              </div>
            </Scene>

            <Scene
              triggerElement="#section3"
              classToggle={["#page", "bg-grey-light"]}
              duration={section3Height}
            >
              <div>
                <div id="section3" ref={section3Ref}>
                  <CustomPricingSection
                    heading="WAT KRIJG JE ALS JE EEN PORTRET LAAT MAKEN DOOR MIJ?"
                    reiskosten={true}
                    prijsText="Vanaf:"
                    pakketA={{
                      title: "Pakket A",
                      features: [
                        `<span classname="font-bold">~30 min</span> fotografie op locatie`,
                        `<span classname="font-bold">10</span> digitale foto’s in hoge kwaliteit`,
                        `<span classname="font-bold">Foto's zelf uit te kiezen</span> vanuit een online galerij​`,
                        `<span classname="font-bold">Extra foto's</span> bij te bestellen (€7 p/st.)`,
                        `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                        `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      ],
                      price: "89",
                    }}
                    pakketB={{
                      title: "Pakket B",
                      features: [
                        `<span classname="font-bold">~45 min</span> fotografie op locatie`,
                        `<span classname="font-bold">20</span> digitale foto’s in hoge kwaliteit`,
                        `<span classname="font-bold">Foto's zelf uit te kiezen</span> vanuit een online galerij
                      ​`,
                        `<span classname="font-bold">Extra foto's</span> bij te bestellen (€7 p/st.)`,
                        `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                        `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      ],
                      price: "149",
                    }}
                    pakketC={{
                      title: "Pakket C",
                      features: [
                        `<span classname="font-bold">~1 uur</span> fotografie op locatie`,
                        `<span classname="font-bold">30</span> digitale foto’s in hoge kwaliteit`,
                        `<span classname="font-bold">Foto's zelf uit te kiezen</span> vanuit een online galerij
                      ​`,
                        `<span classname="font-bold">Extra foto's</span> bij te bestellen (€7 p/st.)`,
                        `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                        `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      ],
                      price: "199",
                    }}
                    cta="SPECIFIEKE WENSEN OF WIL JE GRAAG
        MEERDERE HONDEN OP DE FOTO?
        GEEN PROBLEEM, WE MAKEN SAMEN
        EEN OFFERTE OP MAAT."
                  />
                </div>
              </div>
            </Scene>
            <Scene
              triggerElement="#section4"
              classToggle={["#page", "bg-grey-light2"]}
            >
              <div>
                <div id="section4">
                  <WerkwijzeSection text3="We meeten elkaar op de afgesproken locatie. We maken kennis en laten jouw hond aan mij en de camera wennen. Daarna gaan we op pad! We zijn ongeveer 1 tot 1,5 uur bezig, ik neem de tijd voor en zorg voor een diversiteit aan foto’s." />
                </div>
              </div>
            </Scene>
            <FotoshootKadoSection />
            <ContactFormSection bg="bg-grey-pinkish2" />
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}

export default hondenfotografie;
