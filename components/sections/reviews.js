import Section from "../layout/Section";
import Button from "../ui/button";
import Dienst from "./elements/dienst";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewElementDesktop from "./elements/ReviewElementDesktop";
import ReviewElement from "./elements/ReviewElement";

function Reviews(props) {
  return (
    <Section bg={"bg-grey-light2"}>
      <div className=" border border-brown-pale2 p-2 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="border border-brown-pale2 p-16">
                  {/* reviews mobile */}
        <div className="lg:hidden">
          <h3 className="text-brown-pale uppercase font-display text-5xl text-center my-10">
            Reviews
          </h3>
          <div className="flex justify-center">
            <Carousel
              autoPlay
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
                      sit amet. Lorem ipsum dolor sit amet.sed diam voluptues et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsua."
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
        <h3 className="text-brown-pale uppercase font-display text-7xl text-center my-10">
            Reviews
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

          <div className="flex flex-wrap gap-6 justify-evenly">
            <div className="w-60">
              <Dienst
                img="/images/tarieven.png"
                imgwidth={342}
                imgheight={513}
                alt="Geldboom"
                title="Tarieven"
                description="Benieuwd naar mijn tarieven? Neem contact op of ga naar één van de diensten pagina’s voor meer informatie."
                showDescriptionOnMobile
              />
              <div className="pt-10 text-center">
                <Button link="/" button="button-2" text="Diensten" />
              </div>
            </div>
            <div className="w-60">
              <Dienst
                img="/images/overmij.png"
                imgwidth={342}
                imgheight={513}
                alt="Emily van Roomen"
                title="Over mij"
                description="Hoi, mijn naam is Emily van Roomen. Vanuit mijn zelfgebouwde camperbus rijd ik overal naartoe, geen locatie is te gek!"
                showDescriptionOnMobile
              />
              <div className="pt-10 text-center">
                <Button link="/" button="button-2" text="Lees meer" />
              </div>
            </div>
            <div className="w-60">
              <Dienst
                img="/images/telefoon.png"
                imgwidth={342}
                imgheight={513}
                alt="Telefoon"
                title="Contact"
                description="Wil je mij inhuren of heb je vragen? Neem contact op met mij en we bespreken jouw wensen en de mogelijkheden."
                showDescriptionOnMobile
              />
              <div className="pt-10 text-center">
                <Button link="/" button="button-2" text="Neem contact op" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Reviews;
