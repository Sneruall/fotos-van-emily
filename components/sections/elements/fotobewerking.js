import Image from "next/image";

export default function Fotobewerking(props) {
  return (
    <div className="flex justify-center mt-10">
      <div className="group cursor-pointer text-center max-w-xs md:max-w-sm">
        <div className="my-3 transition duration-200 ease-in transform group-hover:scale-105">
          <Image
            src="/images/diensten/fotobewerking.png"
            width={568}
            height={394}
            alt="Fotobewerking"
          />
        </div>
        <h2 className="text-2xl xl:text-3xl uppercase text-brown-pale transition-all duration-100 ease-in-out group-hover:font-bold">
          Fotobewerking
        </h2>
        <hr className="border-t-2 border-brown-pale2 md:mt-2" />
        <p className="hidden md:block mt-3">
          Professionele nabewerking om jouw foto’s er verbluffend uit te laten
          zien!
        </p>
      </div>
    </div>
  );
}
