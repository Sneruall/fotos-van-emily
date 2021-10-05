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
      <ScrollNavbar fade lightFade />

      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/loveshoot/hero.png"
              alt="love shoot"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
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
                    heading="NATUURLIJK IN DE SPOTLIGHT"
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
                    img="/images/loveshoot/spotlight.png"
                    alt="loveshoot"
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
                    imgE1="/images/loveshoot/e1.png"
                    imgE2="/images/loveshoot/e2.png"
                    imgE3="/images/loveshoot/e1.png"
                    imgE4="/images/loveshoot/e2.png"
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
            <ContactFormSection bg="bg-grey-pinkish2"/>
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}

export default loveshoot;
