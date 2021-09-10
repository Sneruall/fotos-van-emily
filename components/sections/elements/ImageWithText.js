import Button from "../../ui/button";
import Image from "next/image";

function ImageWithText(props) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 mt-20">
      <div className={`flex-shrink-0 self-center md:self-start order-first ${props.mirrored ? "lg:order-last" : ""}`}>
        <Image
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>

      <div>
        <div className="w-1/2 my-5">
          <h3 className="uppercase text-brown-pale text-3xl border-b-2 border-brown-pale">
            {props.title}
          </h3>
        </div>

        <p className="text-charcoal">{props.text}</p>

        <Button text="Boek een shoot!" link="#" button="button-1 my-5" />
     
      </div>
    </div>
  );
}

export default ImageWithText;
