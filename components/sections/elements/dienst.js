import Image from "next/image";
import Link from "next/link";
import FadeInEffect from "./FadeInEffect";

export default function Dienst(props) {
  return (
    <FadeInEffect effect="fade-in-effect-bottom" fade bottom>
      <Link href={props.link}>
        <div className="mt-10 group cursor-pointer text-center">
          <div className="my-3 transition duration-200 ease-in transform group-hover:scale-105">
            <Image
              src={props.img}
              width={props.imgwidth}
              height={props.imgheight}
              alt={props.alt}
            />
          </div>
          <h2 className="text-2xl xl:text-3xl uppercase text-brown-pale">
            {props.title}
          </h2>
          <hr className="border-t-2 border-brown-pale2 md:mt-2" />
          {!props.showDescriptionOnMobile ? (
            <p className="hidden md:block mt-3">{props.description}</p>
          ) : (
            <p className="mt-3 flex">{props.description}</p>
          )}
        </div>
      </Link>
    </FadeInEffect>
  );
}
