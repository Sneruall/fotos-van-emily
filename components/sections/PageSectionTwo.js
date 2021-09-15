import Section from "../layout/Section";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

function PageSectionTwo() {
  return (
    <Section bg={"bg-grey-pinkish"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-3xl lg:text-6xl text-center uppercase mb-4">
          Natuurlijk op de foto
        </h2>
        <div className="border-b-2 border-white w-full max-w-2xl mx-auto mb-3"></div>
        <div className="border-b-2 border-white w-3/5 max-w-lg mx-auto"></div>

        <div className="my-10 lg:my-0 flex flex-col">
          <div className="border border-white self-center my-5 p-1 pb-0">
            <Image
              src="/images/portretfotografie/portret-4.png"
              alt="portret"
              width="801"
              height="534"
            />
          </div>

          <div className="lg:order-first text-center text-charcoal my-8 max-w-5xl mx-auto">
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
        {/* reviews mobile todo van losse reviews component maken (er is al iets..) --> todo: reviews uit het "kaartje" halen en het kaartje als gehele carousel laten bewegen? */}
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
        <div className="hidden w-full lg:block absolute left-0">
          <h3 className="text-white uppercase font-display text-7xl my-10 truncate">
            Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews
            Reviews Reviews Reviews Reviews Reviews
          </h3>
        </div>
        <div className="pt-40 hidden lg:block">
          <Carousel
            autoplay
            infiniteLoop
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
          >
            {/* Review tab -- todo van losse reviews én een tab components maken met props! */}
            <div className="my-10 mx-10 grid grid-cols-3 gap-x-4">
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review tab -- van losse reviews én een tab components maken met props! */}
            <div className="my-10 mx-10 grid grid-cols-3 gap-x-4">
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white my-5">
                <div className="bg-white m-1 p-2 bg-opacity-70">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <div className="py-10 px-10">
                        <p className="text-brown-pale text-center">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet.
                        </p>
                        <p className="text-center mt-6 italic text-brown-pale">
                          Rina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
}

export default PageSectionTwo;
