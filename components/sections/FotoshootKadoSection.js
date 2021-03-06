import Image from "next/image";
import Button from "../ui/button";

function FotoshootKadoSection() {
  return (
    <div className="relative h-screen80">
      <Image
        src="/images/portretfotografie/fotoshoot-cadeaubon-sectie.png"
        alt="fotoshoot cadeaubon"
        layout="fill"
        objectFit="cover"
        quality={50}
      />
      <div className="px-5 relative h-full max-w-6xl mx-auto flex items-center">
        <div className="max-w-sm">
          <h4 className="title-1-left py-4 lg:pb-5">Een fotoshoot cadeau doen?</h4>
          <h5 className="text-brown-pale text-2xl py-4 lg:pb-5 leading-7">
            DAT KAN IN DE VORM VAN EEN CADEAUBON!
          </h5>
          <div className="pb-10 pt-5">
            <Button link="/fotoshoot-cadeaubon" button="button-1" text="Meer informatie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoshootKadoSection;
