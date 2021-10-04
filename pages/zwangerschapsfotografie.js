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
              quality={100}
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
                    text="Ik fotografeer het liefst in de buitenlucht, dit zorgt voor de meest pure en unieke foto’s. Ik zorg voor voldoende afwisseling op locatie zodat jullie een diversiteit aan foto’s krijgt. Heb je al een locatie in gedachte? Super! Heb je wat meer inspiratie nodig? Ik denk graag met je mee naar een locatie die bij jou past, het bos, het strand, de heide of de stad, met veel passie zoek ik naar de aller mooiste plekjes en gelukkig ken ik er een heleboel! Ik vind het belangrijk dat jullie je op je gemak voelen, daarom klets ik gezellig en geef ik duidelijke aanwijzingen. Kortom, gewoon een heerlijk momentje in de spotlight! Zo komen jullie op een natuurlijke manier prachtig op de foto te staan!"
                    img="/images/zwangerschapsfotografie/spotlight.png"
                    alt="zwangerschapsfotografie"
                    review1={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name1",
                    ]}
                    review2={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name2",
                    ]}
                    review3={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name3",
                    ]}
                    review4={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name4",
                    ]}
                    review5={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name5",
                    ]}
                    review6={[
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
                      "Name6",
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
                    imgE1="/images/zwangerschapsfotografie/e1.png"
                    imgE2="/images/zwangerschapsfotografie/e2.png"
                    imgE3="/images/zwangerschapsfotografie/e1.png"
                    imgE4="/images/zwangerschapsfotografie/e2.png"
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
                      `Online gallerij voor het <span classname="font-bold">bekijken en delen</span> van de foto’s`,
                      "149",
                    ]}
                    pakketB={[
                      "Pakket B",
                      `<span classname="font-bold">~1 uur</span> fotografie op locatie`,
                      `<span classname="font-bold">30</span> digitale foto’s in hoge kwaliteit`,
                      `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
                      `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
                      `Online gallerij voor het <span classname="font-bold">bekijken en delen</span> van de foto’s`,
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
