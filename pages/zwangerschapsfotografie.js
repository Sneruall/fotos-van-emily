import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import EditingSection from "../components/sections/EditingSection";
import SpotlightSection from "../components/sections/SpotlightSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";
import CustomPricingSection from "../components/sections/CustomPricingSection";
import { Controller, Scene } from "react-scrollmagic";
import { NextSeo } from "next-seo";



function zwangerschapsfotografie() {
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
        title="Zwangerschapsfotografie | De Foto's van Emily"
        description="Zwangerschapsfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl/zwangerschapsfotografie",
          title: "Zwangerschapsfotografie | De Foto's van Emily",
          description:
            "Zwangerschapsfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/zwangerschapsfotografie/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Zwangerschapsfotografie",
            },
            {
              url: "/images/zwangerschapsfotografie/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Zwangerschapsfotografie",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} />
      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/zwangerschapsfotografie/hero.png"
              alt="zwangerschap fotografie"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/zwangerschapsfotografie/hero-mobile.png"
              alt="zwangerschap fotografie"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-10 sm:bottom-20">
              <h1 className="hidden sm:block text-7xl md:text-8xl lg:text-9xl xl:text-10xl leading-tight font-display uppercase py-4 text-white">
                Zwangerschaps fotografie
              </h1>
              <h1 className="sm:hidden text-6xl leading-tight font-display uppercase py-4 text-white">
                Zwanger- schaps fotografie
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Controller>
        <div className="bg-grey-light">
          <div id="page" className="transition ease-linear duration-1000">
            <IntroSection
              heading="VAN HARTE GEFELICITEERD MET DE KOMST VAN JULLIE KLEINTJE!"
              img1="/images/zwangerschapsfotografie/img1.png"
              alt1="loveshoot foto"
              text1={[
                "Een mini mensje groeit nu in jouw buik, hoe ongelovelijk bijzonder! Je wilt natuurlijk zoveel mogelijk herinneringen creëren aan deze tijd, want voor je het weet is de dag aangebroken dat je je kindje zult ontmoeten! Daarom is het zo waardevol dit magische moment vast te leggen, zeker in de vorm van een professionele fotoshoot waar je de rest van je leven van kan genieten (en samen met je kindje op terug kunt kijken)! Je kunt de shoot alleen doen of samen met je partner, dat is helemaal aan jullie.",
                "Een zwangerschaps reportage kun je het beste plannen als je 30 tot 34 weken zwanger bent. In deze periode heb je een mooi gevormde buik en is de kans op fysieke ongemakken die eventueel nog komen kleiner, je wilt de shoot natuurlijk niet missen!",
              ]}
              buttonText1="Boek een zwangerschapsshoot"
              portfolioImages={[
                "/images/zwangerschapsfotografie/p1.png",
                "/images/zwangerschapsfotografie/p2.png",
                "/images/zwangerschapsfotografie/p3.png",
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
                    heading="NATUURLIJK IN DE SPOTLIGHT"
                    text="Ik fotografeer het liefst in de buitenlucht, dit zorgt voor de meest pure en unieke foto’s. Ik zorg voor voldoende afwisseling op locatie zodat jij een diversiteit aan foto’s krijgt. Heb je al een locatie in gedachte? Super! Heb je wat meer inspiratie nodig? Ik denk graag met je mee naar een locatie die bij jou past, het bos, de duinen, de stad of gewoon lekker bij jou thuis, met veel passie zoek ik naar de aller mooiste plekjes en gelukkig ken ik er een heleboel! Tijdens de zwangerschapsshoot zorg ik voor een ontspannen sfeer zodat je je op je gemak voelt, daarom klets ik gezellig en geef ik duidelijke aanwijzingen. Kortom, gewoon een heerlijk momentje in de spotlight. Zo kom jij op een natuurlijke manier prachtig op de foto te staan!"
                    img="/images/zwangerschapsfotografie/spotlight.png"
                    alt="zwangerschapsfotografie"
                    review1={[
                      "Ik ben heel erg blij met de foto's die Emily heeft gemaakt tijdens mijn zwangerschapsshoot. Ik had zelf een locatie gekozen en Emily vond daar de mooiste plekken voor het maken van de foto's. Ze stelde me op mijn gemak, gaf goede tips over poses die ik kon aannemen en nam echt de tijd voor het maken van de foto's. De foto's zijn voor mijn man en mij enorm waardevol als herinnering aan mijn zwangerschap. Ik raad Emily absoluut aan als fotografe!",
                      "Kathelijne & Tim",
                    ]}
                    review2={[
                      "Wij hebben een zwangerschapsshoot gedaan met Emily in de duinen. Wat hebben wij hiervan genoten! Emily hielp ons met leuke poses die de babybuik goed naar voren lieten komen en ze zorgde voor een fijne sfeer. We voelden ons daardoor erg op ons gemak bij haar. Zelf konden we ook al onze ideeën kwijt en Emily nam uitgebreid de tijd om alle probeersels vast te leggen. Het resultaat is mooier dan we konden dromen!",
                      "Gwen & Dexter",
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
                    imgE1="/images/fotobewerking/7e.jpg"
                    imgE2="/images/fotobewerking/7.jpg"
                    imgE4="/images/fotobewerking/7z.jpg"
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
                    heading="WAT KRIJG JE ALS JE EEN ZWANGERSCHAPS REPORTAGE LAAT MAKEN DOOR MIJ?"
                    reiskosten={true}
                    prijsText="Vanaf:"
                    pakketA={[
                      "Pakket A",
                      `<span classname="font-bold">~45 min</span> fotografie op locatie`,
                      `<span classname="font-bold">20</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      `Online gallerij voor het bekijken en delen van de foto’s`,
                      "149",
                    ]}
                    pakketB={[
                      "Pakket B",
                      `<span classname="font-bold">~1 uur</span> fotografie op locatie`,
                      `<span classname="font-bold">30</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      `Online gallerij voor het bekijken en delen van de foto’s`,
                      "219",
                    ]}
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

export default zwangerschapsfotografie;
