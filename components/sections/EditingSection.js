import Section from "../layout/Section";
import Image from "next/image";
import Button from "../ui/button";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function EditingSection(props) {
  return (
    <Section bg="bg-brown-pale2">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-3xl lg:text-5xl text-center uppercase mb-5 lg:leading-tight">
          ZORGVULDIGE NABEWERKING VOOR EEN VERBLUFFEND RESULAAT
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto mb-5 lg:mb-20">
          Alle foto’s worden met veel zorg en passie nabewerkt zodat jij
          uitblinkt op de foto! Mijn stijl kenmerkt zich door veel licht,
          warmte, kleur en een moderne look. Alle foto’s worden ook in zwart wit
          nabewerkt.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 mb-8 lg:mb-24 justify-items-center">
          <ReactCompareSlider
            itemOne={
              <Image src={props.imgE1} alt="foto" width="651" height="434" />
            }
            itemTwo={
              <Image
                src={props.imgE2}
                alt="nabewerkte foto"
                width="651"
                height="434"
              />
            }
          />

          <ReactCompareSlider
            itemOne={
              <Image src={props.imgE3} alt="foto" width="651" height="434" />
            }
            itemTwo={
              <Image
                src={props.imgE4}
                alt="nabewerkte foto"
                width="651"
                height="434"
              />
            }
          />
        </div>
        {props.imgSk1 && (
          <div>
            <h2 className="text-white text-3xl lg:text-5xl text-center uppercase mb-5">
              EXTRA SERVICE: SKIN RETOUCHING
            </h2>
            <p className="text-white text-center mb-10 max-w-4xl mx-auto">
              Skin retouching kan op verzoek worden aangevraagd. Dit houdt in
              dat oneffenheden van de huid worden weggewerkt en eventuele
              donkere kringen onder de ogen worden opgelicht. Je wilt natuurlijk
              geen baby face, daarom wordt er veel aandacht besteed aan het zo
              natuurlijk mogelijk houden van de huid. Zo krijg je een
              gebalanceerd en fris resultaat! Skin retouching is vooral geschikt
              bij headshots, in overleg kijken we welke foto’s het meest
              geschikt hiervoor zijn (tarieven en meer informatie vind je op de
              fotobewerking pagina).
            </p>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <ReactCompareSlider
                  itemOne={
                    <Image
                      src={props.imgSk1}
                      alt="skin retouching"
                      width="651"
                      height="434"
                    />
                  }
                  itemTwo={
                    <Image
                      src={props.imgSk2}
                      alt="skin retouching"
                      width="651"
                      height="434"
                    />
                  }
                />
              </div>
              <div className="mt-5 lg:mt-0 lg:mb-10 text-center lg:order-first">
                <Button link="/" button="button-3" text="Meer informatie" />
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

export default EditingSection;
