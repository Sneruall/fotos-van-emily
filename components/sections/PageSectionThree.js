import Section from "../layout/Section";
import Image from "next/image";
import Button from "../ui/button";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function PageSectionThree() {
  return (
    <Section bg="bg-brown-pale2">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-3xl lg:text-5xl text-center uppercase mb-5 lg:leading-tight">
          ZORGVULDIGE NABEWERKING VOOR EEN VERBLUFFEND RESULAAT
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto mb-20">
          Alle foto’s worden met veel zorg en passie nabewerkt zodat jij
          uitblinkt op de foto! Mijn stijl kenmerkt zich door veel licht,
          warmte, kleur en een moderne look. Alle foto’s worden ook in zwart wit
          nabewerkt.
        </p>
        <div className="flex flex-col lg:flex-row gap-14 mb-24 justify-items-center">
          <ReactCompareSlider
            itemOne={
              <Image
                src="/images/portretfotografie/portret-5.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
            itemTwo={
              <Image
                src="/images/portretfotografie/portret-4.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
          />

          <ReactCompareSlider
            itemOne={
              <Image
                src="/images/portretfotografie/portret-5.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
            itemTwo={
              <Image
                src="/images/portretfotografie/portret-4.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
          />
        </div>
        <h2 className="text-white text-3xl lg:text-5xl text-center uppercase mb-5">
          EXTRA SERVICE: SKIN RETOUCHING
        </h2>
        <p className="text-white text-center mb-10 max-w-4xl mx-auto">
          Skin retouching kan op verzoek worden aangevraagd. Dit houdt in dat
          oneffenheden van de huid worden weggewerkt en eventuele donkere
          kringen onder de ogen worden opgelicht. Je wilt natuurlijk geen baby
          face, daarom wordt er veel aandacht besteed aan het zo natuurlijk
          mogelijk houden van de huid. Zo krijg je een gebalanceerd en fris
          resultaat! Skin retouching is vooral geschikt bij headshots, in
          overleg kijken we welke foto’s het meest geschikt hiervoor zijn
          (tarieven en meer informatie vind je op de fotobewerking pagina).
        </p>
        <div className="pb-10 text-center">
          <Button link="/" button="button-3" text="Meer informatie" />
        </div>
        <div className="flex justify-center">
          <ReactCompareSlider
            itemOne={
              <Image
                src="/images/portretfotografie/portret-5.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
            itemTwo={
              <Image
                src="/images/portretfotografie/portret-4.png"
                alt="portret"
                width="651"
                height="434"
              />
            }
          />
        </div>
      </div>
    </Section>
  );
}

export default PageSectionThree;
