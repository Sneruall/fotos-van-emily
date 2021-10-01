import Section from "../layout/Section";
import Button from "../ui/button";
import ImageWithText from "./elements/ImageWithText";
import PagePortfolioElement from "./elements/PagePortfolioElement";

function IntroSection(props) {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 leading-tight">
          {props.heading}
        </h2>
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
              />
              {props.img2 && <ImageWithText
                img={props.img2}
                alt={props.alt2}
                width={400}
                height={267}
                title={props.title2}
                text={props.text2}
                mirrored={props.mirrored2}
              />}
            </div>

            <PagePortfolioElement
              images={props.portfolioImages}
            />

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
    </Section>
  );
}

export default IntroSection;
