import Section from "../layout/Section";
import Dienst from "./elements/dienst";
import Fotobewerking from "./elements/fotobewerking";
import Link from "next/link";

export default function Diensten() {
  return (
    <Section bg={"bg-pink-light md:bg-pink"}>
      <div className="md:bg-pink-lightest md:p-10 md:mx-auto md:max-w-6xl 3xl:max-w-full -mt-40">
        <h2 className="mt-40 md:mt-0 text-6xl text-center font-display uppercase text-pink-darkest leading-snug">
          Fotografie diensten
        </h2>

        <div className="grid grid-rows-1 md:grid-cols-2 md:gap-10 3xl:grid-cols-4 justify-items-center mx-10 text-center">
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
        <div className="pt-20 md:pb-10 text-center">
          <Link href="/">
            <button class="bg-white hover:bg-pink-darkest hover:text-white text-pink-darkest font-semibold uppercase py-4 px-6 rounded-full">
              Bekijk mijn portfolio
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
