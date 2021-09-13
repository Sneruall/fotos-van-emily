import { Carousel } from "react-responsive-carousel";
import Section from "../layout/Section";
import Button from "../ui/button";
import ImageWithText from "./elements/ImageWithText";
import Image from "next/image";

function pageIntro() {
  return (
    <Section bg={"bg-grey-light"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-charcoal text-5xl lg:text-6xl text-center my-10">
          LORUM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR
        </h2>

        <div className="border border-white my-5">
          <div className="bg-white m-1 p-2 bg-opacity-70">
            <div className="p-2 sm:px-10 max-w-5xl mx-auto">
              <ImageWithText
                img="/images/portretfotografie/portret-1.png"
                alt="Zakelijk portret"
                width={336}
                height={502}
                title="Zakelijk"
                text="Of het nu gaat om sociale media zoals LinkedIn of je eigen website,
            er zijn talloze plekken waar een professionele foto een must is. Een
            goed portret zet jou krachtig neer en laat zien wie jij bent, zo
            laat jij een buitengewone indruk achter! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
              />
              <ImageWithText
                img="/images/portretfotografie/portret-2.png"
                alt="Prive portret"
                width={400}
                height={267}
                title="Prive"
                text="Of misschien wil je graag een nieuwe leuke profielfoto op je dating site, of je social media feed weer wat opfrissen met gave foto’s! In welke levensfase je ook zit, je bent een prachtig mens en het is zo mooi om dat voor altijd vast te leggen."
                mirrored
              />
            </div>

            <div className="p-2">
              <div className="lg:hidden flex justify-center">
                <Carousel
                  autoplay
                  infiniteLoop
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  interval={5000}
                  width={318}
                >
                  <div className="py-10 px-7">
                    <Image
                      src="/images/portretfotografie/portret-3.png"
                      alt="portret"
                      width="318"
                      height="477"
                    />
                  </div>
                  <div className="py-10 px-7">
                    <Image
                      src="/images/portretfotografie/portret-3.png"
                      alt="portret"
                      width="318"
                      height="477"
                    />
                  </div>
                  <div className="py-10 px-7">
                    <Image
                      src="/images/portretfotografie/portret-3.png"
                      alt="portret"
                      width="318"
                      height="477"
                    />
                  </div>


                </Carousel>
              </div>

              <div className="hidden my-10 lg:grid grid-cols-3 gap-x-4">
                <Image
                  src="/images/portretfotografie/portret-3.png"
                  alt="portret"
                  width="318"
                  height="477"
                  layout="responsive"
                />
                <Image
                  src="/images/portretfotografie/portret-3.png"
                  alt="portret"
                  width="318"
                  height="477"
                  layout="responsive"
                />
                <Image
                  src="/images/portretfotografie/portret-3.png"
                  alt="portret"
                  width="318"
                  height="477"
                  layout="responsive"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                text="Naar uitgebreid portfolio"
                link="#"
                button="button-1 mb-20 w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default pageIntro;
