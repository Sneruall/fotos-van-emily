import Image from "next/image";
import Link from "next/link";
import FadeInEffect from "./FadeInEffect";

export default function Fotobewerking(props) {
  return (
    <FadeInEffect effect="fade-in-effect-bottom" fade bottom offset={0}>
      <Link href={props.link}>
        <div className="flex justify-center mt-10">
          <div className="group cursor-pointer text-center max-w-xs md:max-w-sm">
            <div className="relative">
              <div className="my-3 transition duration-200 ease-in transform group-hover:scale-105">
                <Image
                  src="/images/diensten/fotobewerking.png"
                  width={568}
                  height={394}
                  alt="Fotobewerking"
                />
              </div>
              <div className="hidden md:block absolute top-0 right-0 transform scale-75 lg:scale-100 translate-x-8 lg:translate-x-12 -translate-y-10">
                <Image
                  src="/images/stars4.png"
                  alt="Stars"
                  width={64}
                  height={83}
                />
              </div>
            </div>
            <h2 className="text-2xl xl:text-3xl uppercase text-brown-pale">
              Fotobewerking
            </h2>
            <hr className="border-t-2 border-brown-pale2 md:mt-2" />
            <p className="hidden md:block mt-3">
              Professionele nabewerking om jouw foto’s er verbluffend uit te
              laten zien!
            </p>
          </div>
        </div>
      </Link>
    </FadeInEffect>
  );
}
