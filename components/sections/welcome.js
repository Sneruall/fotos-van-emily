import Image from "next/image";
import Section from "../layout/Section";
import FadeInEffect from "./elements/FadeInEffect";

//hier gaat nog iets mis met margins van het witte vlak
export default function Welcome() {
  return (
    <Section>
      <div className="flex md:items-stretch mx-auto flex-col md:flex-row relative md:gap-20 max-w-5xl">
        <div className="flex-auto">
          <div className="w-3/5 self-start mx-auto md:w-auto relative">
            <FadeInEffect effect="fade-in-effect-top" fade top offset={0}>
              <Image
                src="/images/emily.png"
                alt="Emily"
                width={370}
                height={553}
                quality={100}
              />
            </FadeInEffect>

            <div className="absolute md:hidden top-0 right-0 transform translate-x-14 -translate-y-5">
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
          {/* <p className="font-display text-charcoal text-5xl mx-5 md:mx-0 md:mt-10 hidden md:block">
            Hee, welkom op mijn site!
          </p> */}

          <div className="bg-white md:bg-opacity-0 py-20 md:py-0 md:m-0 rounded-t-full -mt-60 -mb-40">
            <p className="text-brown-pale md:text-charcoal text-center md:text-left text-2xl mb-4 mt-40 md:mt-0 uppercase">
              hi! mijn naam is
            </p>

            <div className="relative">
              <h2 className="font-display text-charcoal md:text-clay text-center md:text-left text-5xl md:text-7xl uppercase">
                Emily van Roomen
              </h2>
              <div className="hidden md:block absolute top-0 right-0 transform translate-x-10 -translate-y-10 lg:-translate-x-28 lg:-translate-y-16 xl:translate-x-2">
                <Image
                  src="/images/stars1.png"
                  alt="Stars"
                  width={81}
                  height={93}
                />
              </div>
            </div>

            <p className="font-sans normal-case text-black text-center md:text-left mx-6 md:mx-0 mt-7">
              En ik ben fotograaf gespecialiseerd in buitenfotografie. Ik werk graag in de
              buitenlucht omdat het mij in staat stelt pure foto???s te maken met
              een magisch tintje. De natuur- en stedelijke gebieden zitten vol
              kleur en prachtige plekjes wat zorgt voor de mooiste
              achtergronden, zo krijg jij bijzondere en unieke foto???s! Mijn
              fotografie stijl kenmerkt zich verder door een moderne, warme look
              met veel licht. Je kunt mijn portfolio bekijken om een hier verder
              een goed beeld van te krijgen. Neem gerust contact op als je
              vragen hebt of een fotoshoot wilt boeken, ik reageer altijd binnen
              24 uur. Ik maak foto's in de hele provincie Utrecht en kom zelf uit Zeist. 
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
