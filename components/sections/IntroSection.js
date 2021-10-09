import Section from "../layout/Section";
import Button from "../ui/button";
import ImageWithText from "./elements/ImageWithText";
import PagePortfolioElement from "./elements/PagePortfolioElement";

function IntroSection(props) {
  return (
    <Section>
      <div className="mx-auto max-w-6xl -mt-10">
        <h2 className="title-1 leading-tight">{props.heading}</h2>
        <div className="border border-white my-5">
          <div className="bg-white m-1 p-2 bg-opacity-70">
            <div className="p-2 sm:px-10 max-w-5xl mx-auto">
              <ImageWithText
                img={props.img1}
                alt={props.alt1}
                width={336}
                height={502}
                title={props.title1}
                text={props.text1}
                buttonText={props.buttonText1}
                mirrored={props.mirrored1}
                text2={props.text2}
              />
              {props.text2 && (
                <div>
                  <div className="inline-block my-5">
                    <h3 className="uppercase text-brown-pale text-3xl border-b-2 pr-16 border-brown-pale">
                      {props.title2}
                    </h3>
                  </div>

                  <p className="text-charcoal">{props.text2}</p>
                  {props.buttonText1 && (
                    <div className="lg:hidden">
                    <Button
                      text={props.buttonText1}
                      link="#contact"
                      button="button-1 mt-8"
                    />
                      </div>

                  )}
                </div>
              )}

              <PagePortfolioElement images={props.portfolioImages} />

              <div className="flex justify-center">
                <Button
                  text="Naar uitgebreid portfolio"
                  link={props.portfolioButtonLink}
                  button="button-1 mb-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;
