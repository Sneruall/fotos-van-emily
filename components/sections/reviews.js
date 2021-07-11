import Section from "../layout/Section";
import Image from "next/image";

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
          <div className="py-10 max-w-sm">
            <Image
              src="/images/tarieven.png"
              width={342}
              height={513}
              alt="Geldboom"
            />
          </div>
          <h2 className="text-2xl xl:text-3xl uppercase text-pink-darkest transition-all duration-100 ease-in-out group-hover:font-bold">
            Tarieven
          </h2>
          <hr className="border-1 border-pink-darkest" />
          <p className="mt-3 text-lg">Lorum ipsum</p>
        </div>
      </div>
    </Section>
  );
}

export default Reviews;
