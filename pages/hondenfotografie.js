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

function hondenfotografie() {
  return (
    <Fragment>
      <Header
        img="/images/hondenfotografie/hero.png"
        imgMobile="/images/hondenfotografie/hero-mobile.png"
        pageTitle2="Honden fotografie"
        whiteTitle
      />
      <ScrollNavbar fade={true} lightFade />
      <IntroSection
        heading="JOUW TROUWE VIERVOETER OP ZIJN MOOIST VASTGELEGD!"
        img1="/images/hondenfotografie/img1.png"
        alt1="honden foto"
        text1={[
          "Als groot hondenliefhebber weet ik hoe speciaal de band tussen mens en hond is. Het is je beste maatje, je kindje, je trouwe viervoeter, geen enkele hond is zo leuk als de jouwe! Waarschijnlijk heb je dan ook een miljoen foto’s van jouw viervoeter, maar nog geen of nauwelijks professionele foto’s waarop jouw hond op zijn allermooist te zien is. Foto’s die je met trots aan iedereen laat zien en vergroot aan je muur ophangt! Foto’s die jouw hond zo puur en karakteristiek mogelijk laten zien! Het is natuurlijk ook leuk om samen met je hond op de foto te gaan, alles is mogelijk!",
        ]}
        buttonText1="Boek een hondenshoot"
        portfolioImages={[
          "/images/hondenfotografie/p1.png",
          "/images/hondenfotografie/p2.png",
          "/images/hondenfotografie/p3.png",
        ]}
        portfolioButtonLink="/portfolio"
      />
      <SpotlightSection
        heading="HOE ZIET DE SHOOT ERUIT?"
        text="Tijdens een fotoshoot gaan we samen op pad. We maken er een gezellige wandeling waarbij we opzoek gaan naar mooie plekjes om foto’s te maken. Tijdens het fotograferen zorgen we er samen voor dat jouw hond zo mooi mogelijk gefotografeerd wordt. Neem iets lekkers mee waarvan je weet dat dat de aandacht van jouw hond trekt, of een favoriet speeltje of andere aandacht trekker. Als we naar een andere locatie lopen kan jouw hond lekker zijn ei kwijt: snuffelen, rennen of gewoon lekker gek doen. Ondertussen klik ik gewoon door voor wat gave actie foto’s!"
        img="/images/hondenfotografie/spotlight.png"
        alt="hondenfotografie"
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
        imgE1="/images/hondenfotografie/e1.png"
        imgE2="/images/hondenfotografie/e2.png"
        imgE3="/images/hondenfotografie/e1.png"
        imgE4="/images/hondenfotografie/e2.png"
      />
      <CustomPricingSection
        heading="WAT KRIJG JE ALS JE EEN PORTRET LAAT MAKEN DOOR MIJ?"
        reiskosten={true}
        prijsText="Vanaf:"
        pakketA={[
          "Pakket A",
          `<span classname="font-bold">~1 uur</span> fotografie op locatie`,
          `<span classname="font-bold">10</span> digitale foto’s in hoge kwaliteit`,
          `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
          `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
          `Online gallerij voor het <span classname="font-bold">bekijken en delen</span> van de foto’s`,
          "149",
        ]}
        pakketB={[
          "Pakket B",
          `<span classname="font-bold">~1,5 uur</span> fotografie op locatie`,
          `<span classname="font-bold">20</span> digitale foto’s in hoge kwaliteit`,
          `<span classname="font-bold">Zorgvuldige nabewerking</span> (alle foto’s
            worden ook in zwart-wit geleverd)`,
          `Binnen <span classname="font-bold">1,5 week</span> worden alle foto’s via WeTransfer geleverd`,
          `Online gallerij voor het <span classname="font-bold">bekijken en delen</span> van de foto’s`,
          "219",
        ]}
        cta="SPECIFIEKE WENSEN OF WIL JE GRAAG
        MEERDERE HONDEN OP DE FOTO?
        GEEN PROBLEEM, WE MAKEN SAMEN
        EEN OFFERTE OP MAAT."
      />
      <WerkwijzeSection text3="We meeten elkaar op de afgesproken locatie. We maken kennis en laten jouw hond aan mij en de camera wennen. Daarna gaan we op pad! We zijn ongeveer 1 tot 1,5 uur bezig, ik neem de tijd voor en zorg voor een diversiteit aan foto’s." />
      <FotoshootKadoSection />
      <ContactFormSection />
    </Fragment>
  );
}

export default hondenfotografie;
