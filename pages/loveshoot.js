import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import ContactFormSection from "../components/sections/ContactFormSection";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import IntroSection from "../components/sections/IntroSection";
import EditingSection from "../components/sections/EditingSection";
import SpotlightSection from "../components/sections/SpotlightSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";
import CustomPricingSection from "../components/sections/CustomPricingSection";

function loveshoot() {
  return (
    <Fragment>
      <Header
        img="/images/loveshoot/hero.png"
        imgMobile="/images/loveshoot/hero-mobile.png"
        pageTitle2="love shoot"
        whiteTitle
      />
      <ScrollNavbar fade />
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
      <EditingSection
        imgE1="/images/loveshoot/e1.png"
        imgE2="/images/loveshoot/e2.png"
        imgE3="/images/loveshoot/e1.png"
        imgE4="/images/loveshoot/e2.png"
      />
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

export default loveshoot;
