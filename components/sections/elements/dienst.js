import Image from "next/image";

export default function Dienst(props) {
  return (
    <div className="w-4/5 md:w-3/5">
      <div className="my-3">
        <Image
          src={props.img}
          width={421}
          height={434}
          alt={props.alt}
        />
      </div>
      <p className="text-xl md:text-2xl lg:text-3xl uppercase text-pink-darkest">{props.title}</p>
      <hr className="border-1 border-pink-darkest" />
      <p className="hidden md:block mt-3 text-lg">{props.description}</p>
    </div>
  );
}
