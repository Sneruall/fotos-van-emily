import Image from "next/image";
import Section from "../layout/Section";
import FadeInEffect from "./elements/FadeInEffect";

export default function Werkwijze() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <p className="font-display text-white text-center text-5xl mb-10 mt-0 md:mt-10 mx-0 md:mx-40 uppercase">
            Professioneel Fotograaf VS Mobiele Telefoon
          </p>
          <div className="hidden md:block absolute bottom-0 left-0 transform scale-75 lg:scale-100 -translate-x-8 lg:-translate-x-12 lg:translate-y-24 xl:translate-y-16 translate-y-10">
            <Image
              src="/images/stars5.png"
              alt="Stars"
              width={164}
              height={125}
            />
          </div>
        </div>
        <div className="my-3 md:hidden flex justify-center">
          <Image
            src="/images/fotograaf-met-camera.png"
            width={413}
            height={232}
            alt="Fotograaf met camera"
          />
        </div>
        <p className="mt-5 md:mt-20 md:my-10 mx-0 md:mx-16 text-center text-white">
          Ik snap dat je misschien denkt “kan ik niet gewoon zelf foto’s maken
          met mijn telefoon”. Natuurlijk, de kwaliteit van telefoon camera’s
          worden steeds beter en beter. Super leuk om herinneringen vast te
          leggen on the fly. Maar een goede foto bestaat uit meer dan alleen
          technische kwaliteit. Iedereen is in staat een foto te maken, maar die
          spreken niet allemaal 1000 woorden. Juist dat extra’s, die laatste
          paar 100 woorden, zijn lastig zelf te realiseren. Hiervoor heb je de
          expertise van een fotograaf nodig. Denk aan composite, lichtgebruik,
          nabewerking etc. Dus voor het vastleggen van speciale gelegenheden kan
          de mobiel niet tippen aan de fotograaf!
        </p>
        <div className="hidden md:flex justify-center relative">
          <FadeInEffect effect="fade-in-effect-bottom" fade bottom>
            <Image
              className="rounded"
              src="/images/fotograaf-met-camera.png"
              width={413}
              height={232}
              alt="Fotograaf met camera"
            />
          </FadeInEffect>
          <div className="hidden md:block absolute top-0 right-0 transform scale-75 lg:scale-100 -translate-x-16 lg:-translate-x-36 xl:-translate-x-48">
            <Image
              src="/images/stars6.png"
              alt="Stars"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
