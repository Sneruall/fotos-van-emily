import Image from "next/image";
import Section from "../layout/Section";
import Button from "../ui/button";

function pageIntro() {
  return (
    <Section bg={"bg-grey-light"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-charcoal text-5xl md:text-6+xl text-center my-10">
          LORUM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR
        </h2>
        <Image
          src="/images/portretfotografie/portret-1.png"
          alt="Emily"
          width={334}
          height={502}
          priority
        />
        <div className="border border-white">
          <div className="bg-white m-1 p-2">
            <p>
              Of het nu gaat om sociale media zoals LinkedIn of je eigen
              website, er zijn talloze plekken waar een professionele foto een
              must is. Een goed portret zet jou krachtig neer en laat zien wie
              jij bent, zo laat jij een buitengewone indruk achter!
            </p>
            <Button text="Boek een shoot" link="#" button="button-1 my-5" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default pageIntro;
