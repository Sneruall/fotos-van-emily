import Section from "../layout/Section";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Review from "./elements/review";

function PageSectionTwo() {
  return (
    <Section bg={"bg-grey-pale"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-3xl md:text-6xl text-center uppercase mb-2">
          Natuurlijk op de foto
        </h2>
        <div className="border border-white w-full mb-5"></div>
        <div className="border border-white w-3/5 mx-auto"></div>

        <div className="my-10 flex flex-col">
          <div className="border border-white self-center p-1 pb-0">
            <Image
              src="/images/portretfotografie/portret-4.png"
              alt="portret"
              width="801"
              height="534"
            />
          </div>

          <div className="lg:order-first text-center text-charcoal my-5">
            <p>
              Ik fotografeer het liefst in de buitenlucht, dit zorgt voor de
              meest pure en unieke foto’s. Ik zorg voor voldoende afwisseling op
              locatie zodat jij een diversiteit aan foto’s krijgt. Heb je al een
              locatie in gedachte? Super! Heb je wat meer inspiratie nodig? Ik
              denk graag met je mee naar een locatie die bij jou past, het bos,
              het strand, de heide of de stad, met veel passie zoek ik naar de
              aller mooiste plekjes en gelukkig ken ik er een heleboel in
              Nederland! Ik vind het belangrijk dat je je op je gemak voelt,
              daarom klets ik gezellig en geef ik duidelijke aanwijzingen.
              Tijdens de shoot zorg ik voor een ontspannen sfeer zodat je je op
              je gemak voelt, daarom klets ik gezellig en geef ik duidelijke
              aanwijzingen. Kortom, gewoon een heerlijk momentje in de
              spotlight! Zo kom jij op een natuurlijke manier prachtig op de
              foto te staan! Voor een zakelijke shoot is het soms leuker om
              binnen te fotograferen, om ……………………………. fksjflk\k ksfljsdkf\kslfj
            </p>
          </div>
        </div>
        {/* reviews mobile */}
        <div className="lg:hidden border border-white my-5">
          <div className="bg-white m-1 p-2 bg-opacity-70">
            <h3 className="text-brown-pale uppercase font-display text-5xl text-center my-10">
              Reviews
            </h3>
            <div className="p-2">
              <div className="flex justify-center">
                <Carousel
                  autoplay
                  infiniteLoop
                  showArrows={true}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  interval={5000}
                  width={300}
                >
                  <div className="py-10 px-10">
                    <p className="text-brown-pale text-center">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <p className="text-center mt-6 italic text-brown-pale">
                      Rina
                    </p>
                  </div>
                  <div className="py-10 px-10">
                    <p className="text-brown-pale text-center">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <p className="text-center mt-6 italic text-brown-pale">
                      Rina
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        {/* reviews desktop */}
        <div className="w-full absolute left-0">
          <h3 className="text-white uppercase font-display text-7xl my-10 truncate">
            Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews
          </h3>
        </div>
      </div>
    </Section>
  );
}

export default PageSectionTwo;
