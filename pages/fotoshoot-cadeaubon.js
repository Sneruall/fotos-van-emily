import { Fragment } from "react";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/scrollNavbar";
import Section from "../components/layout/Section";

function fotoshootCadeaubon() {
  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <Header
        img="/images/cadeaubon/header.png"
        imgMobile="/images/cadeaubon/headerm.png"
        pageTitle2="Fotoshoot Cadeaubon"
      />

      <Section bg={"bg-grey-light"}>
        <div className="mx-auto max-w-6xl">
          <h2 className="title-1 leading-tight">Doe een fotoshoot cadeau</h2>
        </div>
      </Section>
    </Fragment>
  );
}

export default fotoshootCadeaubon;
