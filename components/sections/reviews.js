import Section from "../layout/Section";
import Dienst from "./elements/dienst";

function Reviews() {
  return (
    <Section bg={"bg-brown-light"}>
      <div className=" border border-grey-dark p-2 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="border border-grey-dark p-16">
          <h2 className="text-center md:text-left text-6xl font-display uppercase text-white leading-snug">
            Reviews
          </h2>
          <div className="py-10 max-w-sm">
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet.
            </p>
            <p className="text-center mt-6 italic text-grey-dark">Name</p>
          </div>
          <Dienst
            img="/images/tarieven.png"
            imgwidth={342}
            imgheight={513}
            alt="Geldboom"
            title="Tarieven"
            description="Benieuwd naar mijn tarieven? Neem contact op of ga naar één van de diensten pagina’s voor meer informatie."
            showDescriptionOnMobile
          />
        </div>
      </div>
    </Section>
  );
}

export default Reviews;
