import Section from "../layout/Section";
import Image from "next/image";
import Button from "../ui/button";

function FotoshootKadoSection() {
  return (
    <div className="relative">
      <Section bg="bg-pink-100">
        <div className="">
          <Image
            src="/images/portretfotografie/gift.png"
            alt="portret"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>

        <div className="relative">
          <h4 className="title-1-left">Een fotoshoot kado doen?</h4>
          <h5 className="text-brown-pale text-3xl">
            DAT KAN IN DE VORM VAN EEN CADEAUBON!
          </h5>
          <div className="my-10">
            <Button link="/" button="button-1" text="Neem contact op" />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default FotoshootKadoSection;
