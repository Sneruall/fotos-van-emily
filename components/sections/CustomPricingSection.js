import Section from "../layout/Section";
import Button from "../ui/button";
import FadeInEffect from "./elements/FadeInEffect";
import PricingPlan from "./elements/PricingPlan";

function CustomPricingSection(props) {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 leading-tight">{props.heading} </h2>
        {/* Pricing cards */}
        <FadeInEffect effect="fade-in-effect-bottom" fade bottom offset={0}>
          <div
            className={`flex flex-col lg:flex-row ${
              props.pakketC ? "gap-8" : "gap-16"
            }`}
          >
            <PricingPlan
              title={props.pakketA.title}
              features={props.pakketA.features}
              price={props.pakketA.price}
              reiskosten={props.reiskosten}
              prijsText={props.prijsText}
            />
            <PricingPlan
              title={props.pakketB.title}
              features={props.pakketB.features}
              price={props.pakketB.price}
              reiskosten={props.reiskosten}
              prijsText={props.prijsText}
            />
            {props.pakketC && (
              <PricingPlan
                title={props.pakketC.title}
                features={props.pakketC.features}
                price={props.pakketC.price}
                reiskosten={props.reiskosten}
                prijsText={props.prijsText}
              />
            )}
          </div>
        </FadeInEffect>
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
