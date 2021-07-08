import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";

export default function Diensten() {
  return (
    <div className="bg-pink-light text-center">
      <div className="container">
      <p className="my-3 text-6xl font-display uppercase text-pink-darkest leading-snug">
        Fotografie diensten
      </p>

      <div className="grid grid-rows-1 md:grid-cols-2 md:gap-6 justify-items-center mx-10">
        <Dienst
          title={"Portret"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/portret.png"} alt={"Portretfotografie"}
        />
        <Dienst
          title={"Loveshoot"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/loveshoot.png"} alt={"Koppelfotografie"}
        />
        <Dienst
          title={"Zwangerschap"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/zwangerschap.png"} alt={"Zwangerschapsfotografie"}
        />
        <Dienst
          title={"Honden"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          }
          img={"/images/diensten/honden.png"} alt={"Hondenfotografie"}
        />
      </div>

      <Fotobewerking/>
      </div>
    </div>
  );
}
