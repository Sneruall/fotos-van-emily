function Footer() {
  return (
    <footer className="w-full bg-grey-light">
      <div className="flex flex-col lg:flex-row text-center justify-between max-w-5xl mx-auto">
        <div>
          <h4 className="font-semibold uppercase text-clay mt-10 mb-5">
            Locatie
          </h4>
          <p>Godfried van Seijstlaan 27 D1</p>
          <p>3703 BR Zeist</p>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-clay mt-10 mb-5">
            Volg mij
          </h4>
          {/* volg icons */}
        </div>
        <div>
          <h4 className="font-semibold uppercase text-clay mt-10 mb-5">
            Contact
          </h4>
          <a href="mailto:info@fotosvanemily.nl" className="hover:underline">
            info@fotosvanemily.nl
          </a>
          <p>
            Tel:{" "}
            <a href="tel:+31652331778" className="text-mocha hover:underline">
              +31 6 52331778
            </a>
          </p>
        </div>
      </div>
      <div className="pb-5 mt-10 text-center">
        <p>© 2021 Media Modes | KVK: 75986272 | BTW: NL860468379B01</p>
        <p>
          Website ontwikkeld door{" "}
          <a
            href="https://www.laurensvanroomen.nl"
            target="_blank"
            className="text-mocha hover:underline"
          >
            Laurens van Roomen
          </a>
        </p>
        <p>Ontworpen door Emily van Roomen</p>
      </div>
    </footer>
  );
}

export default Footer;
