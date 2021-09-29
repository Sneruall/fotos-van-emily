import { Fragment } from "react";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import EditingSection from "../components/sections/EditingSection";
import SpotlightSection from "../components/sections/SpotlightSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";
import CustomPricingSection from "../components/sections/CustomPricingSection";

function zwangerschapsfotografie() {
  return (
    <Fragment>
      <ScrollNavbar fade={true} />
      {/* <Header
        img="/images/zwangerschapsfotografie/hero.png"
        imgMobile="/images/zwangerschapsfotografie/hero-mobile.png"
        pageTitle2="Zwangerschaps fotografie"
        whiteTitle
        pageTitleMobile="Zwanger- schaps fotografie"
      /> */}

      <header className="relative">
        <div className="hidden sm:block -mt-28 lg:-mt-14">
          <Image
            src="/images/zwangerschapsfotografie/hero.png"
            alt="zwangerschap fotografie"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
          <div className="hidden sm:block px-5 relative mt-14 max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-20">
              <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-center sm:text-left leading-tight font-display uppercase py-4 text-white">
                Zwangerschaps fotografie
              </h1>
            </div>
          </div>
        </div>

        <div className="sm:hidden -mt-14">
          <Image
            src="/images/zwangerschapsfotografie/hero-mobile.png"
            alt="zwangerschap fotografie"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute bottom-10">
              <h1 className="sm:hidden text-6xl leading-tight font-display uppercase py-4 text-white">
                Zwanger- schaps fotografie
              </h1>
            </div>
          </div>
        </div>
      </header>

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
      <EditingSection
        imgE1="/images/zwangerschapsfotografie/e1.png"
        imgE2="/images/zwangerschapsfotografie/e2.png"
        imgE3="/images/zwangerschapsfotografie/e1.png"
        imgE4="/images/zwangerschapsfotografie/e2.png"
      />
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
      <WerkwijzeSection />
      <FotoshootKadoSection />
      <ContactFormSection />
    </Fragment>
  );
}

export default zwangerschapsfotografie;
