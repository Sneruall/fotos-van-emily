import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import PageSectionThree from "../components/sections/PageSectionThree";
import PageSectionTwo from "../components/sections/PageSectionTwo";
import PricingSection from "../components/sections/PricingSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";

function zwangerschapsfotografie() {
  return (
    <Fragment>
      <Header
        img="/images/zwangerschapsfotografie/hero.png"
        imgMobile="/images/zwangerschapsfotografie/hero-mobile.png"
        pageTitle="Zwangerschaps fotografie"
        pageTitleMobile="Zwanger- schaps fotografie"
      />
      <ScrollNavbar fade={false} />
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
      <PageSectionTwo
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
      <PageSectionThree
        imgE1="/images/zwangerschapsfotografie/e1.png"
        imgE2="/images/zwangerschapsfotografie/e2.png"
        imgE3="/images/zwangerschapsfotografie/e1.png"
        imgE4="/images/zwangerschapsfotografie/e2.png"
      />
      <PricingSection
        heading="WAT KRIJG JE ALS JE EEN ZWANGERSCHAPS REPORTAGE LAAT MAKEN DOOR MIJ?"
        pakketA={["~45 min", "20", "1,5 week", "149", true]}
        pakketB={["~1 uur", "30", "1,5 week", "219", true]}
      />
      <WerkwijzeSection />
      <FotoshootKadoSection />
      <ContactFormSection />
    </Fragment>
  );
}

export default zwangerschapsfotografie;
