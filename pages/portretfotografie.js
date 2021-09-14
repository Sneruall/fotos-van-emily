import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";
import FotoshootKadoSection from "../components/sections/FotoshootKadoSection";
import PageIntro from "../components/sections/pageIntro";
import PageSectionThree from "../components/sections/PageSectionThree";
import PageSectionTwo from "../components/sections/PageSectionTwo";
import PricingSection from "../components/sections/PricingSection";
import WerkwijzeSection from "../components/sections/WerkwijzeSection";


function portretfotografie() {
  return (
    <Fragment>
      <Header
        img="/images/portretfotografie/hero.png"
        imgMobile="/images/portretfotografie/hero-mobile.png"
        pageTitle="portret fotografie"
      />

      <ScrollNavbar />
      <PageIntro />
      <PageSectionTwo />
      <PageSectionThree />
      <PricingSection />
      <WerkwijzeSection />
      <FotoshootKadoSection />

    </Fragment>
  );
}

export default portretfotografie;
