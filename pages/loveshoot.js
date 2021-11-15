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

function loveshoot() {
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
        title="Loveshoot | De Foto's van Emily"
        description="Loveshoot door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl/loveshoot",
          title: "Loveshoot | De Foto's van Emily",
          description:
            "Loveshoot door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/loveshoot/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Loveshoot",
            },
            {
              url: "/images/loveshoot/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Loveshoot",
            },
          ],
        }}
      />
      <ScrollNavbar fade />

      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/loveshoot/hero.png"
              alt="love shoot"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/loveshoot/hero-mobile.png"
              alt="love shoot"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-10 sm:bottom-20">
              <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-10xl leading-tight font-display uppercase py-4 text-white">
                love shoot
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Controller>
        <div className="bg-grey-light">
          <div id="page" className="transition ease-linear duration-1000">
            <IntroSection
              heading="EEN MOOIE HERINNERING AAN DEZE TIJD IN JULLIE RELATIE!"
              img1="/images/loveshoot/loveshoot-1.png"
              alt1="loveshoot foto"
              text1={[
                "Prachtige foto’s met je geliefde, wie wil dat nou niet! Om een jubilieum te vieren, voor het trouwen of als cadeautje aan de ander, genoeg leuke redenen om een loveshoot te doen! Een gezellig momentje samen, jullie liefde uniek vastgelegd: ongeposeerd, puur en natuurlijk. Kortom, samen creëren we een prachtige herinnering aan deze tijd in jullie relatie!",
                "Je kunt bij mij ook terecht voor het laten ontwerpen van trouwkaarten. Neem contact met mij voor wat voorbeelden en het bespreken van jullie wensen.",
              ]}
              buttonText1="Boek een loveshoot!"
              portfolioImages={[
                "/images/loveshoot/p1.png",
                "/images/loveshoot/p2.png",
                "/images/loveshoot/p3.png",
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
                    heading="SAMEN IN DE SPOTLIGHT"
                    text="Ik fotografeer het liefst in de buitenlucht, dit zorgt voor de meest pure en unieke foto’s. Ik zorg voor voldoende afwisseling op locatie zodat jullie een diversiteit aan foto’s krijgen. Hebben jullie al een locatie in gedachte? Super! Hebben jullie wat meer inspiratie nodig? Ik denk graag met jullie mee naar een locatie die bij jullie past, het bos, een kasteel, de heide of de stad, met veel passie zoek ik naar de aller mooiste plekjes en gelukkig ken ik er een heleboel! Tijdens de loveshoot zorg ik voor een ontspannen sfeer zodat jullie je op je gemak voelen, daarom klets ik gezellig en geef ik duidelijke aanwijzingen. Kortom, gewoon een heerlijk momentje in de spotlight. Zo komen jullie op een natuurlijke manier samen prachtig op de foto te staan!"
                    img="/images/loveshoot/spotlight.png"
                    alt="loveshoot"
                    review1={[
                      "Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's! Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen website. Echt een aanrader!",
                      "Rina & Nick",
                    ]}
                    review2={[
                      "Per toeval kwamen we bij Emily terecht. Ze was heel betrokken en kwam met leuke ideeën. Ze zorgde ervoor dat we ons zelf waren voor de camera en mede daardoor zijn de foto’s heel puur geworden. Wij zijn heel blij met het resultaat. Echt een aanrader :)",
                      "Shannon & Gerben",
                    ]}
                    review3={[
                      "Wij hebben een zwangerschapsshoot gedaan met Emily in de duinen. Wat hebben wij hiervan genoten! Emily hielp ons met leuke poses die de babybuik goed naar voren lieten komen en ze zorgde voor een fijne sfeer. We voelden ons daardoor erg op ons gemak bij haar. Zelf konden we ook al onze ideeën kwijt en Emily nam uitgebreid de tijd om alle probeersels vast te leggen. Het resultaat is mooier dan we konden dromen!",
                      "Gwen & Dexter",
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
                    imgE1="/images/fotobewerking/5e.jpg"
                    imgE2="/images/fotobewerking/5.jpg"
                    imgE4="/images/fotobewerking/5z.jpg"
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
                    heading="WAT KRIJG JE ALS JE EEN LOVESHOOT LAAT MAKEN DOOR MIJ?"
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
                    cta="Liever een offerte op maat?"
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
                  <WerkwijzeSection />
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

export default loveshoot;
