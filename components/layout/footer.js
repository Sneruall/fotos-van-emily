import * as ga from "../../lib/ga"

  const callAction = () => {
    ga.event({
      action: "click_phone_number",
    });
  };

  const emailAction = () => {
    ga.event({
      action: "click_email_address",
    });
  };

function Footer() {
  return (
    <footer className="w-full bg-grey-light">
      <div className="flex flex-col lg:flex-row text-center justify-around max-w-3xl mx-auto">
        <div>
          <h4 className="font-semibold uppercase text-clay mt-10 mb-5">
            Locatie
          </h4>
          <p>Godfried van Seijstlaan 27 D1</p>
          <p>3703 BR Zeist</p>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-clay mt-10 mb-5">
            Contact
          </h4>
          <a href="mailto:info@fotosvanemily.nl" className="hover:underline text-mocha" onClick={emailAction}>
            info@fotosvanemily.nl
          </a>
          <p>
            <span>Tel: </span>
            <a href="tel:+31652331778" className="text-mocha hover:underline" onClick={callAction}>
              06 52 33 17 78
            </a>
          </p>
        </div>
      </div>
      <div className="pb-5 mt-10 text-center text-xs">
        <p>© 2021 Media Modes | KVK: 75986272</p>
        <p>BTW: NL860468379B01</p>
      </div>
    </footer>
  );
}

export default Footer;
