import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import EditingSection from "../components/sections/EditingSection";
import SpotlightSection from "../components/sections/SpotlightSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";
import CustomPricingSection from "../components/sections/CustomPricingSection";

function portretfotografie() {
  return (
    <Fragment>
      <Header
        img="/images/portretfotografie/hero.png"
        imgMobile="/images/portretfotografie/hero-mobile.png"
        pageTitle2="portret fotografie"
        whiteTitle={true}
      />
      <ScrollNavbar fade={true} lightFade={true} />
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
          "/images/portretfotografie/portret-3-p1.png",
          "/images/portretfotografie/portret-3-p2.png",
          "/images/portretfotografie/portret-3-p3.png",
        ]}
        portfolioButtonLink="/portfolio"
      />
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
          "Lorem ipsum dolor sit amet, consetetur sadipsc amet, consetetur sadip amet, consetetur sadiping elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
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
        imgE1="/images/portretfotografie/e1.png"
        imgE2="/images/portretfotografie/e2.png"
        imgE3="/images/portretfotografie/e1.png"
        imgE4="/images/portretfotografie/e2.png"
        imgSk1="/images/portretfotografie/e1.png"
        imgSk2="/images/portretfotografie/e2.png"
      />


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
          `Online gallerij voor het <span classname="font-bold">bekijken en delen</span> van de foto’s`,
          "149",
        ]}
        pakketC={[
          "Pakket C",
          `<span classname="font-bold">1 uur</span> fotografie op locatie`,
          `<span classname="font-bold">30</span> digitale foto’s in hoge kwaliteit`,
          `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
          `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
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

export default portretfotografie;
