import Section from "../layout/Section";

function WerkwijzeSection() {
  return (
    <Section bg="bg-grey-light2">
      <div className="mx-auto max-w-6xl">
        {/* Todo: van h2 captions een global style maken net zoals een button */}
        <h2 className="text-charcoal font-display text-5xl lg:text-6xl text-center uppercase mb-5">
          HOE GA IK TE WERK?
        </h2>
        {/* Todo van zo'n wit vlakje een style maken net zoals een button (of component) */}
        <div className="border border-white my-5">
          <div className="bg-white m-1 px-8 py-2 bg-opacity-70">
            {/* Stap */}
            <div className="grid grid-cols-2 lg:grid-cols-6">
              <div className="justify-self-end col-end-1">
                <p className="font-display text-9xl text-white text-stroke-grey-warm text-stroke-2">
                  1
                </p>
              </div>
              <div className="col-start-1 lg:col-start-2 col-end-3 lg:col-end-7 mb-3 self-end lg:self-start ml-8 mr-2 lg:ml-0 lg:mt-4">
                <h4 className=" text-brown-pale text-xl uppercase border-b-2 border-brown-pale2">
                  Contact vooraf
                </h4>
              </div>
              <div className="lg:col-start-2 col-span-3 lg:col-end-7">
                <p>
                  Neem contact met mij op, dat kan via het contactformulier maar
                  je mag me ook bellen of whatsappen. Ik laat zo snel mogelijk
                  van mij horen, altijd binnen 24 uur. Samen bespreken we jouw
                  wensen en vragen, we gaan op zoek naar een locatie en we
                  prikken een datum. Ik stuur een overzichtelijk mailtje met
                  alle info/details die we besproken hebben en wat extra tips en
                  adviezen voor de shoot.
                </p>
              </div>
            </div>
            {/* Einde stap */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WerkwijzeSection;
