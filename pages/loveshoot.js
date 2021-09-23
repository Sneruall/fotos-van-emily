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

function loveshoot() {
  return (
    <Fragment>
      <Header
        img="/images/loveshoot/hero.png"
        imgMobile="/images/portretfotografie/hero-mobile.png"
        pageTitle="love shoot"
      />
      <ScrollNavbar fade={false} />
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
      <PageSectionTwo
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
        img="/images/portretfotografie/portret-4.png"
        alt="portret"
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
        imgE1="/images/loveshoot/e1.png"
        imgE2="/images/loveshoot/e2.png"
        imgE3="/images/loveshoot/e1.png"
        imgE4="/images/loveshoot/e2.png"
      />
      <PricingSection
        heading="WAT KRIJG JE ALS JE EEN PORTRET LAAT MAKEN DOOR MIJ?"
        pakketA={["~45 min", "20", "1,5 week", "149", true]}
        pakketB={["~1 uur", "30", "1,5 week", "219", true]}
      />
      <WerkwijzeSection />
      <FotoshootKadoSection />
      <ContactFormSection />
    </Fragment>
  );
}

export default loveshoot;
