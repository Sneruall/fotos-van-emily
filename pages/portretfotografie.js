import { NextSeo } from "next-seo";
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

function portretfotografie() {
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
        title="Portretfotografie | De Foto's van Emily"
        description="Portretfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl/portretfotografie",
          title: "Portretfotografie | De Foto's van Emily",
          description:
            "Portretfotografie door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/portretfotografie/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Hondenfotografie",
            },
            {
              url: "/images/portretfotografie/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Loveshoot",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} lightFade={true} />

      {/* HEADER PORTRETFOTOGRAFIE */}
      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/portretfotografie/hero.png"
              alt="portret fotografie"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/portretfotografie/hero-mobile.png"
              alt="portret fotografie"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-10 sm:bottom-20">
              <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-10xl leading-tight font-display uppercase py-4 text-white">
                portret fotografie
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Controller>
        <div className="bg-grey-light">
          <div id="page" className="transition ease-linear duration-1000">
            <IntroSection
              heading="ALLEEN OF SAMEN OP DE FOTO, HET KAN ALLEMAAL MET PORTRET FOTOGRAFIE!"
              img1="/images/portretfotografie/portret-1.png"
              alt1="zakelijk portret"
              title1="zakelijk"
              text1={[
                "Jezelf professioneel (online) presenteren doe je met een goed portret. Of het nu gaat om sociale media zoals LinkedIn of je eigen website, er zijn talloze plekken waar een professionele foto een must is. Een goed portret zet jou krachtig neer en laat zien wie jij bent, zo laat jij een buitengewone indruk achter!",
                "Het is ook mogelijk binnen foto’s te maken, in het bedrijfspand of in een hip cafe. Vaak raad ik aan om ook een paar foto’s buiten te maken om te zorgen voor genoeg diversiteit.",
              ]}
              buttonText1="Boek een portretshoot!"
              img2="/images/portretfotografie/portret-2.png"
              alt2="Prive portret"
              title2="Prive"
              text2={[
                "Eigenlijk alle shoots die niet behoren tot een specifieke categorie als loveshoot of zwangerschapsshoot vallen hieronder. Denk aan foto’s van je kinderen of samen met je familie bijvoorbeeld. Veel is mogelijk, laat mij even weten om wie en hoeveel mensen het gaat en we stellen samen een plan op.",
              ]}
              mirrored2
              portfolioImages={[
                "/images/portretfotografie/p1.png",
                "/images/portretfotografie/p2.png",
                "/images/portretfotografie/p3.png",
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
                    heading="Natuurlijk op de foto"
                    text="Ik fotografeer het liefst in de buitenlucht, dit zorgt voor de
      meest pure en unieke foto’s. Ik zorg voor voldoende afwisseling op
      locatie zodat jij een diversiteit aan foto’s krijgt. Heb je al een
      locatie in gedachte? Super! Heb je wat meer inspiratie nodig? Ik
      denk graag met je mee naar een locatie die bij jou past, het bos,
      het strand, de heide of de stad, met veel passie zoek ik naar de
      aller mooiste plekjes en gelukkig ken ik er een heleboel! Tijdens
      de shoot zorg ik voor een ontspannen sfeer zodat je je op je gemak
      voelt, daarom klets ik gezellig en geef ik duidelijke
      aanwijzingen. Kortom, gewoon een heerlijk momentje in de
      spotlight! Zo kom jij op een natuurlijke manier prachtig op de
      foto te staan!"
                    img="/images/portretfotografie/portret-4.png"
                    alt="portret"
                    review1={[
                      "Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's! Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen website. Echt een aanrader!",
                      "Rina & Nick",
                    ]}
                    review2={[
                      "Bedankt voor de super leuke gezellige fotoshoot! De foto's zijn echt prachtig geworden! En de kinderen vonden het super leuk! Geen gedwongen foto sessie maar gewoon lekker spelen en tijdens het spelen foto's maken.",
                      "Chantal",
                    ]}
                    review3={[
                      "Ik wilde graag een professionele portretfoto laten maken. Emily had daarbij direct de juiste context in gedachte en nam de tijd om veel verschillende foto’s te maken. Ze sloot goed aan bij mijn wensen en gaf fijne aanwijzingen. Ik voelde me bij haar erg op mijn gemak, waardoor de foto’s natuurlijk overkomen. De foto’s volgde al snel en ik ben erg tevreden met het resultaat! Ik zou zeker bij een volgende gelegenheid terug gaan naar Emily.",
                      "Lisa",
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
                    imgE1="/images/portretfotografie/e1.jpg"
                    imgE2="/images/portretfotografie/e3.jpg"
                    imgE4="/images/portretfotografie/e2.jpg"
                    imgSk1="/images/portretfotografie/sk1.jpg"
                    imgSk2="/images/portretfotografie/sk2.jpg"
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
                    pakketA={[
                      "Pakket A",
                      `<span classname="font-bold">~30 min</span> fotografie op locatie`,
                      `<span classname="font-bold">10</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
                      ,
                      "79",
                    ]}
                    pakketB={[
                      "Pakket B",
                      `<span classname="font-bold">~45 min</span> fotografie op locatie`,
                      `<span classname="font-bold">20</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
                      `Online gallerij voor het bekijken en delen van de foto’s`,
                      "149",
                    ]}
                    pakketC={[
                      "Pakket C",
                      `<span classname="font-bold">~1 uur</span> fotografie op locatie`,
                      `<span classname="font-bold">30</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
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

export default portretfotografie;
