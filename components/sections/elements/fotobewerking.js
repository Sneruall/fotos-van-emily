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
        <hr className="border-1 border-brown-pale2" />
        <p className="hidden md:block mt-3 text-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero.
        </p>
      </div>
    </div>
  );
}
