import { Fragment } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Section from "../components/layout/Section";
import Button from "../components/ui/button";

function fotobewerkingservice() {
  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <Header
        img="/images/fotobewerking/hero.png"
        imgMobile="/images/fotobewerking/hero-mobile.png"
        title2="Fotobewerking Service"
        titleMobile2="Foto- Bewerking Service"
      />

      <Section bg={"bg-grey-pinkish2"}>
        <div className="mx-auto max-w-6xl">
          <h2 className="title-1 my-0 lg:my-10 text-white leading-tight">
            JOUW FOTO’S, PROFESSIONEEL BEWERKT
          </h2>
          <div className="border border-white my-5">
            <div className="bg-white m-1 p-2 bg-opacity-70">
              <div className="p-2 sm:p-10 max-w-5xl mx-auto text-center">
                <p className="max-w-3xl mx-auto mb-6 sm:mb-10">
                  Wil je graag dat jouw foto’s er verbluffend uitzien, maar heb
                  je geen idee hoe? Gelukkig ben ik er voor je om je een handje
                  te helpen. Het omtoveren van een ‘mooie’ foto tot een
                  ‘fantastische’ foto doe je via nabewerking. Het nabewerken van
                  een foto betekent niet urenlang zoeken naar een mooi filter
                  maar professionele nabewerking in Adobe Lightroom en
                  Photoshop. Het is begrijpelijk dat je hierin niet thuis bent,
                  het goed nabewerken van een foto is echt een vak apart. Dus
                  laten we de handen bijeen slaan: jij maakt de foto’s, ik doe
                  de rest!
                </p>
                <Button link="/#werkwijze" button="button-1" text="Werkwijze" />
                <div>
                  <div className="border-b-2 border-brown-pale inline-block my-12 sm:px-10 ">
                    <h3 className="uppercase text-brown-pale text-3xl">
                      Voorbeelden
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 mb-8 lg:mb-24 justify-items-center">
                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="651"
                        height="434"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="651"
                        height="434"
                      />
                    }
                  />

                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="651"
                        height="434"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="651"
                        height="434"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Fragment>
  );
}

export default fotobewerkingservice;
