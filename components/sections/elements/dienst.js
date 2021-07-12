import Image from "next/image";

export default function Dienst(props) {
  return (
    <div className="mt-10 group cursor-pointer text-center">
      <div className="my-3 transition duration-200 ease-in transform group-hover:scale-105">
        <Image
          src={props.img}
          width={props.imgwidth}
          height={props.imgheight}
          alt={props.alt}
        />
      </div>
      <h2 className="text-2xl xl:text-3xl uppercase text-pink-darkest transition-all duration-100 ease-in-out group-hover:font-bold">
        {props.title}
      </h2>
      <hr className="border-1 border-pink-darkest" />
      {!props.showDescriptionOnMobile ? (
        <p className="hidden md:block mt-3 text-lg">{props.description}</p>
      ) : (
        <p className="mt-3 text-lg flex">{props.description}</p>
      )}
    </div>
  );
}
