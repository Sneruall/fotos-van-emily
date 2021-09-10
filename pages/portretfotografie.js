import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";
import PageIntro from "../components/sections/pageIntro";
import PageSectionTwo from "../components/sections/PageSectionTwo";

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
    </Fragment>
  );
}

export default portretfotografie;
