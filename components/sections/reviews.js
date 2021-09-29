import Section from "../layout/Section";
import Button from "../ui/button";
import Dienst from "./elements/dienst";
import Review from "./elements/review";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Reviews() {
  return (
    <Section bg={"bg-grey-light2"}>
      <div className=" border border-brown-pale2 p-2 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="border border-brown-pale2 p-16">
          <h2 className="text-center md:text-left text-5xl lg:text-6xl font-display uppercase text-white leading-snug">
            Reviews
          </h2>
          <div className="md:max-w-md -mx-16 md:m-0">
            <Carousel
              autoplay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
            >
                <Review
                  text="Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's!
            Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we
            mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen
            website. Echt een aanrader!"
                  name="Rina"
                />
                <Review
                  text="Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's!
            Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we
            mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen
            website. Echt een aanrader!"
                  name="Rina2"
                />
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
