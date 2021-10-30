import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";
import { NextSeo } from "next-seo";


function berichtVerzonden() {
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <ScrollNavbar fade={true} />
      <div className="h-screen bg-grey-light2 mx-auto text-center my-auto flex items-center -mt-14 lg:mt-0">
        <div className="max-w-6xl lg:px-0 mx-auto">
          <h1 className="text-5xl lg:text-8xl text-brown-pale mb-5 uppercase">
            Bericht verzonden!
          </h1>
          <p className="text-charcoal text-xl mb-5 mx-5">
            Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
          </p>
          <Button link="/" button="button-1" text="terug naar home" />
        </div>
      </div>
    </Fragment>
  );
}

export default berichtVerzonden;
