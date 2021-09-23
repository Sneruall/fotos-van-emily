import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";

function portfolio() {
  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <div className="flex flex-col items-center my-20 gap-10 max-w-5xl text-center mx-auto">
        <h1 className="text-5xl">Mijn portfolio</h1>
        <p>
          Kijk rond in mijn portfolio om een beeld te krijgen van mijn
          fotografie stijl. Wil je graag foto's laten maken? Neem vrijblijvend
          contact met mij op en we plannen samen een afspraak!
        </p>
        <Button link="/" button="button-1" text="Neem contact op" />
      </div>
    </Fragment>
  );
}

export default portfolio;
