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
          <div className="bg-white m-1 px-4 py-2 bg-opacity-70">
              <p className="font-display text-9xl text-white stroke-1">1</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WerkwijzeSection;
