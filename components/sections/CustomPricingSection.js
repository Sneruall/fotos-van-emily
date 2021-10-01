import Section from "../layout/Section";
import Button from "../ui/button";
import PricingPlan from "./elements/PricingPlan";

function CustomPricingSection(props) {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 leading-tight">{props.heading} </h2>
        {/* Pricing cards */}
        <div
          className={`flex flex-col lg:flex-row ${
            props.pakketC ? "gap-8" : "gap-16"
          }`}
        >
          <PricingPlan
            title={props.pakketA[0]}
            feature1={props.pakketA[1]}
            feature2={props.pakketA[2]}
            feature3={props.pakketA[3]}
            feature4={props.pakketA[4]}
            feature5={props.pakketA[5]}
            prijs={props.pakketA[6]}
            reiskosten={props.reiskosten}
            prijsText={props.prijsText}
          />
          <PricingPlan
            title={props.pakketB[0]}
            feature1={props.pakketB[1]}
            feature2={props.pakketB[2]}
            feature3={props.pakketB[3]}
            feature4={props.pakketB[4]}
            feature5={props.pakketB[5]}
            prijs={props.pakketB[6]}
            reiskosten={props.reiskosten}
            prijsText={props.prijsText}
          />
          {props.pakketC && (
            <PricingPlan
              title={props.pakketC[0]}
              feature1={props.pakketC[1]}
              feature2={props.pakketC[2]}
              feature3={props.pakketC[3]}
              feature4={props.pakketC[4]}
              feature5={props.pakketC[5]}
              prijs={props.pakketC[6]}
              reiskosten={props.reiskosten}
              prijsText={props.prijsText}
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

export default CustomPricingSection;
