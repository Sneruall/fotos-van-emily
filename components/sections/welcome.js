import Image from "next/image";
import Section from "../layout/Section";

export default function Welcome() {
  return (
    <Section bg={"bg-pink"}>
      <div className="grid grid-rows-1 md:grid-cols-2 md:gap-6 justify-items-center relative">
      <p className="font-display text-white text-center text-5xl mx-5 md:hidden">
          Hee, welkom op mijn site!
        </p>
        <div className="w-3/5 md:w-auto relative my-5">
          <Image src="/images/emily.png" alt="Emily" width={370} height={553} />

          <div className="absolute top-0 right-0 md:left-0 transform translate-x-14 md:-translate-x-10 2xl:-translate-x-20 -translate-y-5">
            <Image
              src="/images/stars1.png"
              alt="Stars"
              width={81}
              height={93}
            />
          </div>
        </div>



        <div>
          <p className="font-display text-pink-darkest text-5xl mx-5 md:mx-0 md:mt-10 uppercase hidden md:block">
            Hee, welkom op mijn site!
          </p>

          {/* <div className="md:hidden">
            <Image
              src="/images/ellipse-1.svg"
              alt="circle"
              width={768}
              height={100}
            />
          </div> */}

          <div className="bg-white md:bg-opacity-0 py-20 md:py-0 md:m-0 rounded-t-full -mt-60 -mb-40 -mx-5">
            <p className="font-display text-pink-darkest text-center md:text-left text-3xl uppercase mb-4 mt-40 md:mt-0">
              Mijn naam is
            </p>

            <p className="font-display text-grey-darkest text-center md:text-left text-5xl uppercase">
              Emily van Roomen
            </p>

            <p className="font-sans normal-case text-black text-center md:text-left text-lg mx-6 md:mx-0 mt-7">
              Ik woon in Zeist maar ben in heel Nederland actief, met mijn tiny
              house opwielen kom ik overal naar toe! Je kunt bij mij terecht
              voor een professionele fotoshoot voor allerlei gelegenheden; van
              bruiloften tot hondenshoots. Met veel aandacht en enthousiasme
              zorg ik voor prachtige foto’s waar jij voor altijd van kan blijven
              genieten. Kijk rond op mijn site en aarzel niet om contact met mij
              op te nemen!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
