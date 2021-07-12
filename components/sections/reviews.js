import Section from "../layout/Section";
import Button from "../ui/button";
import Dienst from "./elements/dienst";
import Review from "./elements/review";

function Reviews() {
  return (
    <Section bg={"bg-brown-light"}>
      <div className=" border border-grey-dark p-2 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="border border-grey-dark p-16">
          <h2 className="text-center md:text-left text-6xl font-display uppercase text-white leading-snug">
            Reviews
          </h2>
          <div className="flex justify-center">
            <Review
              text="Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's!
            Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we
            mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen
            website. Echt een aanrader!"
              name="Rina"
            />
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
                <Button link="/" text="Diensten" />
              </div>
            </div>
            <div className="w-60">
              <Dienst
                img="/images/overmij.png"
                imgwidth={342}
                imgheight={513}
                alt="Emily van Roomen"
                title="Over mij"
                description="Hoi, mijn naam is Emily van den Ende. Vanuit mijn zelfgebouwde camperbus rijd ik overal naartoe, geen locatie is te gek!"
                showDescriptionOnMobile
              />
              <div className="pt-10 text-center">
                <Button link="/" text="Lees meer" />
              </div>
            </div>
            <div className="w-60">
              <Dienst
                img="/images/telefoon.png"
                imgwidth={342}
                imgheight={513}
                alt="Geldboom"
                title="Tarieven"
                description="Wil je mij inhuren of heb je vragen? Neem contact op met mij en we bespreken jouw wensen en de mogelijkheden."
                showDescriptionOnMobile
              />
              <div className="pt-10 text-center">
                <Button link="/" text="Neem contact op" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Reviews;
