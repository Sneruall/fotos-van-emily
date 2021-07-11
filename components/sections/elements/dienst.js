import Image from "next/image";

export default function Dienst(props) {
  return (
    <div className="mt-10 max-w-xs group cursor-pointer">
      <div className="my-3 transition duration-200 ease-in transform group-hover:scale-105">
        <Image
          src={props.img}
          width={421}
          height={434}
          alt={props.alt}
        />
      </div>
      <h2 className="text-xl md:text-2xl uppercase text-pink-darkest transition-all duration-100 ease-in-out group-hover:font-bold">{props.title}</h2>
      <hr className="border-1 border-pink-darkest" />
      <p className="hidden md:block mt-3 text-lg">{props.description}</p>
    </div>
  );
}
