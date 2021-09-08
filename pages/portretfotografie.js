import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";

function portretfotografie() {
  return (
    <Fragment>
      <Header
        img="/images/portretfotografie/hero.png"
        imgMobile="/images/portretfotografie/hero-mobile.png"
        pageTitle="portret fotografie"
      />

      <ScrollNavbar />
      <div>hoi</div>
    </Fragment>
  );
}

export default portretfotografie;
