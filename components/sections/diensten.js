// import Section from "../layout/Section";
import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";


export default function Diensten() {
  return (
    // <Section bg={"bg-pink-light md:bg-pink"}>
      <div className="md:bg-pink-light md:p-10 md:mx-auto md:max-w-6xl xl:max-w-full -mt-40">
        <h2 className="my-3 text-6xl text-center font-display uppercase text-pink-darkest leading-snug">
          Fotografie diensten
        </h2>

        <div className="grid grid-rows-1 md:grid-cols-2 md:gap-10 2xl:grid-cols-4 justify-items-center mx-10 text-center">
          <Dienst
            title={"Portrets"}
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
    // </Section>
  );
}
