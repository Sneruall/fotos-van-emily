import Section from "../layout/Section";
import Image from "next/image";

function FotoshootKadoSection() {
  return (
    <div className="relative">
      <Section bg="bg-pink-200">
        <div>
          <Image
            src="/images/portretfotografie/gift.png"
            alt="portret"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
        <h1 className="title-1 z-50 relative">Een fotoshoot kado doen?</h1>
      </Section>
    </div>
  );
}

export default FotoshootKadoSection;
