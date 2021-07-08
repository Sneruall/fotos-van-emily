import Image from "next/image";

export default function Fotobewerking(props){
    return(
        <div className="grid grid-rows-1 md:grid-cols-5 md:gap-6 justify-items-center mx-10 text-center">

        <div className="w-4/5 col-start-2 col-end-5">
          <div className="my-3">
            <Image
              src="/images/diensten/fotobewerking.png"
              width={568}
              height={394}
              alt="Fotobewerking"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl uppercase text-pink-darkest">Fotobewerking</p>
          <hr className="border-1 border-pink-darkest" />
          <p className="hidden md:block mt-3 text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
        </div>
        </div>
    )
}