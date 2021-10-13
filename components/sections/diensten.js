import Section from "../layout/Section";
import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";
import Button from "../ui/button";
import Image from "next/image";

export default function Diensten() {
  return (
    <Section>
      <div id="diensten" className="md:border border-white my-5 -mt-32 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="md:bg-white md:bg-opacity-70 md:m-1">
          <h2 className="mt-40 md:mt-0 text-6xl text-center font-display uppercase text-clay leading-snug">
            Fotografie diensten
          </h2>

          <div className="grid grid-rows-1 md:grid-cols-2 md:gap-10 3xl:grid-cols-4 justify-items-center mx-10">
            <div className="max-w-xs">
              <Dienst
                title={"Portret"}
                description={
                  "Voor zowel zakelijke als privé shoots kun je bij mij terecht. Denk aan team foto’s voor je bedrijf of een leuke familie fotoshoot."
                }
                img={"/images/diensten/portret.png"}
                alt={"Portretfotografie"}
                imgwidth={421}
                imgheight={434}
                link="/portretfotografie"
              />
            </div>
            <div className="max-w-xs relative">
              <Dienst
                title={"Loveshoot"}
                description={
                  "Prachtige foto’s met je geliefde, wie wilt dat nou niet! Ook leuk om een unieke trouwkaart te creëren."
                }
                img={"/images/diensten/loveshoot.png"}
                alt={"Koppelfotografie"}
                imgwidth={421}
                imgheight={434}
                link="/loveshoot"

              />
              <div className="hidden md:block absolute top-0 right-0 transform scale-75 lg:scale-100 translate-x-10 -translate-y-2 lg:translate-x-4 lg:-translate-y-4">
                <Image
                  src="/images/stars2.png"
                  alt="Stars"
                  width={63}
                  height={82}
                />
              </div>
            </div>
            <div className="max-w-xs relative">
              <Dienst
                title={"Zwangerschap"}
                description={
                  "Een bijzonder moment dat je voor altijd wilt vastleggen zodat je kunt blijven nagenieten."
                }
                img={"/images/diensten/zwangerschap.png"}
                alt={"Zwangerschapsfotografie"}
                imgwidth={421}
                imgheight={434}
                link="/zwangerschapsfotografie"

              />
              <div className="hidden md:block absolute top-0 left-0 transform scale-75 lg:scale-100 -translate-x-20">
                <Image
                  src="/images/stars3.png"
                  alt="Stars"
                  width={88}
                  height={85}
                />
              </div>
            </div>
            <div className="max-w-xs">
              <Dienst
                title={"Honden"}
                description={
                  "Foto’s van jouw beste maatje kunnen natuurlijk niet ontbreken! Zowel apart als van jullie samen."
                }
                img={"/images/diensten/honden.png"}
                alt={"Hondenfotografie"}
                imgwidth={421}
                imgheight={434}
                link="/hondenfotografie"
              />
            </div>
          </div>

          <Fotobewerking link="/fotobewerking-service" />
          <div className="pt-20 md:pb-10 text-center">
            <Button
              link="/portfolio"
              button="button-1"
              text="Bekijk mijn portfolio"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
