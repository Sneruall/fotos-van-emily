import Section from "../layout/Section";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import ReviewElement from "./elements/ReviewElement";
import ReviewElementDesktop from "./elements/ReviewElementDesktop";

function PageSectionTwo(props) {
  return (
    <Section bg={"bg-grey-pinkish"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-4xl lg:text-6xl text-center uppercase mb-4">
          {props.heading}
        </h2>
        <div className="border-b-2 border-white w-full max-w-2xl mx-auto mb-3"></div>
        <div className="border-b-2 border-white w-3/5 max-w-lg mx-auto"></div>

        <div className="my-5 lg:my-0 flex flex-col">
          <div className="border border-white self-center my-5 lg:mb-24 p-1 pb-0">
            <Image src={props.img} alt={props.alt} width="823" height="551" />
          </div>

          <div className="lg:order-first text-center text-charcoal lg:my-8 max-w-5xl mx-auto">
            <p>{props.text}</p>
          </div>
        </div>
        {/* reviews mobile */}
        <div className="lg:hidden">
          <h3 className="text-brown-pale uppercase font-display text-5xl text-center my-10">
            Reviews
          </h3>
          <div className="flex justify-center">
            <Carousel
              autoplay
              infiniteLoop
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              interval={5000}
              width={350}
            >
              <ReviewElement
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.sed diam voluptua."
                name="Rina"
              />
              <ReviewElement
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores em ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.sed diam voluptua."
                name="Rina2"
              />
            </Carousel>
          </div>
        </div>
        {/* reviews desktop */}
        <div className="hidden w-full lg:block absolute left-0">
          <h3 className="text-white uppercase font-display text-7xl my-10 truncate">
            Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews
            Reviews Reviews Reviews Reviews Reviews
          </h3>
        </div>
        <div className="pt-28 hidden lg:block">
          <Carousel
            autoplay
            infiniteLoop
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
          >
            {/* Review tab */}
            <div className="my-10 mx-10 grid grid-cols-3 gap-x-4">
              <ReviewElementDesktop
                text={props.review1[0]}
                name={props.review1[1]}
              />
              <ReviewElementDesktop
                text={props.review2[0]}
                name={props.review2[1]}
              />
              <ReviewElementDesktop
                text={props.review3[0]}
                name={props.review3[1]}
              />
            </div>
            {/* Review tab */}
            <div className="my-10 mx-10 grid grid-cols-3 gap-x-4">
            <ReviewElementDesktop
                text={props.review4[0]}
                name={props.review4[1]}
              />
              <ReviewElementDesktop
                text={props.review5[0]}
                name={props.review5[1]}
              />
              <ReviewElementDesktop
                text={props.review6[0]}
                name={props.review6[1]}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
}

export default PageSectionTwo;
