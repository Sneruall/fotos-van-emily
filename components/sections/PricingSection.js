import Section from "../layout/Section";
import Button from "../ui/button";
import { CheckIcon } from "@heroicons/react/solid";
import PricingPlan from "./elements/PricingPlan";

function PricingSection(props) {
  return (
    <Section bg="bg-grey-light">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 leading-tight">{props.heading} </h2>
        {/* Pricing cards */}
        <div className={`flex flex-col lg:flex-row ${props.pakketC ? "gap-8" : "gap-16"}`}>
          <PricingPlan
            title="Pakket A"
            duur={props.pakketA[0]}
            fotos={props.pakketA[1]}
            oplevering={props.pakketA[2]}
            prijs={props.pakketA[3]}
            MetGallerij={props.pakketA[4]}
          />
          <PricingPlan
            title="Pakket B"
            duur={props.pakketB[0]}
            fotos={props.pakketB[1]}
            oplevering={props.pakketB[2]}
            prijs={props.pakketB[3]}
            MetGallerij={props.pakketB[4]}
          />
          {props.pakketC && (
            <PricingPlan
              title="Pakket C"
              duur={props.pakketC[0]}
              fotos={props.pakketC[1]}
              oplevering={props.pakketC[2]}
              prijs={props.pakketC[3]}
              MetGallerij={props.pakketC[4]}
            />
          )}
        </div>
        {/* caption en button offerte op maat */}
        <div className="flex flex-col justify-center gap-5 lg:gap-10 mt-12 lg:mt-20">
          <h4 className="text-center text-3xl lg:text-4xl uppercase text-charcoal mb-1">
            {props.cta}
          </h4>
          <div className="self-center">
            <Button link="#contact" button="button-1" text="Neem contact op" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
