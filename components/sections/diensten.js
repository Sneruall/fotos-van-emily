import Section from "../layout/Section";
import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";
import Button from "../ui/button";

export default function Diensten() {
  return (
    <Section bg={"bg-grey-light"}>
      <div className="md:bg-white md:p-10 md:mx-auto md:max-w-6xl 3xl:max-w-full -mt-40">
        <h2 className="mt-40 md:mt-0 text-6xl text-center font-display uppercase text-clay leading-snug">
          Fotografie diensten
        </h2>

        <div className="grid grid-rows-1 md:grid-cols-2 md:gap-10 3xl:grid-cols-4 justify-items-center mx-10">
          <div className="max-w-xs">
            <Dienst
              title={"Portret"}
              description={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
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
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
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
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
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
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
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
              <Button link="/" button="button-1" text="Bekijk mijn portfolio"/>
        </div>
      </div>
    </Section>
  );
}
