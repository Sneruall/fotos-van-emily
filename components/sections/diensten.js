import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";
import Section from "../layout/section";

export default function Diensten() {
  return (
    <Section bg={"bg-pink-light md:bg-pink"}>
      <div className="md:bg-pink-light md:p-10 md:mx-auto md:max-w-6xl -mt-40">
      <p className="my-3 text-6xl text-center font-display uppercase text-pink-darkest leading-snug">
        Fotografie diensten
      </p>

      <div className="grid grid-rows-1 md:grid-cols-2 md:gap-6 justify-items-center mx-10 text-center">
        <Dienst
          title={"Portret"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/portret.png"}
          alt={"Portretfotografie"}
        />
        <Dienst
          title={"Loveshoot"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/loveshoot.png"}
          alt={"Koppelfotografie"}
        />
        <Dienst
          title={"Zwangerschap"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/zwangerschap.png"}
          alt={"Zwangerschapsfotografie"}
        />
        <Dienst
          title={"Honden"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/honden.png"}
          alt={"Hondenfotografie"}
        />
      </div>

      <Fotobewerking />
      </div>
    </Section>
  );
}
