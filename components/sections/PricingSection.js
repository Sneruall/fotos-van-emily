import Section from "../layout/Section";
import Button from "../ui/button";
import { CheckIcon } from "@heroicons/react/solid";
import PricingPlan from "./elements/PricingPlan";

function PricingSection() {
  return (
    <Section bg="bg-grey-light">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 leading-tight">
          WAT KRIJG JE ALS JE EEN PORTRET LAAT MAKEN DOOR MIJ?
        </h2>
        {/* Pricing cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          <PricingPlan title="Pakket A" duur="~30 min" fotos="10" oplevering="1 week" prijs="79" />
          <PricingPlan title="Pakket B" duur="~45 min" fotos="20" oplevering="1 week" MetGallerij prijs="149" />
          <PricingPlan title="Pakket C" duur="~1 uur" fotos="30" oplevering="1 week" MetGallerij prijs="219" />
        </div>
        {/* caption en button offerte op maat */}
        <div className="flex flex-col justify-center gap-10 mt-20">
          <h4 className="text-center text-3xl lg:text-4xl uppercase text-charcoal mb-1">
            Liever een offerte op maat?
          </h4>
          <div className="self-center">
            <Button link="/" button="button-1" text="Neem contact op" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
