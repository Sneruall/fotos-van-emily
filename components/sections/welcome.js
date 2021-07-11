import Image from "next/image";
// import Section from "../layout/Section";

export default function Welcome() {
  return (
    // <Section bg={"bg-pink"}>
      <div className="flex md:items-stretch mx-auto flex-col md:flex-row relative md:gap-10 md:max-w-5xl">

        <div className="flex-auto">
        <p className="font-display text-white text-center text-5xl mx-5 md:hidden">
          Hee, welkom op mijn site!
        </p>
        <div className="w-3/5 self-start mx-auto md:w-auto relative my-5 md:my-0">
          <Image src="/images/emily.png" alt="Emily" width={370} height={553} priority />

          <p className="w-full text-center hidden md:block font-display text-white text-5xl uppercase absolute">
              De fotograaf
            </p>

          <div className="absolute top-0 right-0 md:left-0 transform translate-x-14 md:-translate-x-10 2xl:-translate-x-20 -translate-y-5">
            <Image
              src="/images/stars1.png"
              alt="Stars"
              width={81}
              height={93}
            />
          </div>
        </div>
        </div>


        <div className="flex-auto self-end md:w-3/5">
          <p className="font-display text-white text-5xl mx-5 md:mx-0 md:mt-10 hidden md:block">
            Hee, welkom op mijn site!
          </p>

          <div className="bg-white md:bg-opacity-0 py-20 md:py-0 md:m-0 rounded-t-full -mt-60 -mb-40 -mx-5">
            <p className="font-display text-pink-darkest md:text-white text-center md:text-left text-3xl uppercase md:normal-case mb-4 mt-40 md:mt-0">
              Mijn naam is
            </p>

            <h2 className="font-display text-grey-darkest md:text-pink-darkest text-center md:text-left text-5xl md:text-7xl uppercase">
              Emily van Roomen
            </h2>

            <p className="font-sans normal-case text-black text-center md:text-left text-lg mx-6 md:mx-0 mt-7">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy e
            </p>
          </div>
        </div>
      </div>
    // </Section>
  );
}
