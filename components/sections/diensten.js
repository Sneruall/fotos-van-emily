import Section from "../layout/Section";
import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";
import Button from "../ui/button";

export default function Diensten() {
  return (
    <Section>
      <div id="diensten" className="md:bg-white md:p-10 md:mx-auto md:max-w-6xl 3xl:max-w-full -mt-40">
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
            />
          </div>
          <div className="max-w-xs">
            <Dienst
              title={"Loveshoot"}
              description={
                "Prachtige foto’s met je geliefde, wie wilt dat nou niet! Ook leuk om een unieke trouwkaart te creëren."
              }
              img={"/images/diensten/loveshoot.png"}
              alt={"Koppelfotografie"}
              imgwidth={421}
              imgheight={434}
            />
          </div>
          <div className="max-w-xs">
            <Dienst
              title={"Zwangerschap"}
              description={
                "Een bijzonder moment dat je voor altijd wilt vastleggen zodat je kunt blijven nagenieten."
              }
              img={"/images/diensten/zwangerschap.png"}
              alt={"Zwangerschapsfotografie"}
              imgwidth={421}
              imgheight={434}
            />
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
            />
          </div>
        </div>

        <Fotobewerking />
        <div className="pt-20 md:pb-10 text-center">
              <Button link="/portfolio" button="button-1" text="Bekijk mijn portfolio"/>
        </div>
      </div>
    </Section>
  );
}
