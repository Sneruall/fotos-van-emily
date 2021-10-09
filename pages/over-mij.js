import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Image from "next/image";
import ContactFormSection from "../components/sections/ContactFormSection";
import { Controller, Scene } from "react-scrollmagic";

function overmij() {
  return (
    <Fragment>
      <ScrollNavbar fade={true} />
      <Controller>
        <div className="bg-grey-light2 -mt-14 lg:mt-0">
          <div id="page" className="transition ease-linear duration-1000">
            <div className="mx-auto max-w-6xl pt-20 lg:hidden">
              <h1 className="title-2 mb-2">Over mij</h1>
              <div className="border-b-2 border-brown-pale2 w-full max-w-xs mx-auto mb-10"></div>
            </div>
            <div className="py-10 lg:py-40">
              <div className="hidden lg:block">
                <h1 className="title-2 mb-2">Over mij</h1>
                <div className="border-b-2 border-brown-pale2 w-full max-w-xs mx-auto mb-10"></div>
              </div>
              <div className="mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="text-center">
                    <Image
                      src="/images/overmij/Emilyvanroomen.png"
                      alt="Emily van Roomen"
                      width={458}
                      height={676}
                      priority
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="md:p-10 m-1">
                      <div className="flex flex-col lg:flex-row gap-10">
                        <div className="max-w-md lg:max-w-lg xl:max-w-2xl mx-auto text-center sm:text-left">
                          <p>
                            Sinds mijn 16e ben ik al geïnteresseerd in het maken
                            van foto’s (ik ben nu 24). Op de middelbare school
                            volgde ik kunstvakken waaronder fotografie. Daar
                            kwam ik voor het eerst in aanraking met een
                            spiegelreflex camera. Ik kan me herinneren dat ik
                            veel op de grond heb gelegen om foto’s te maken van
                            onze honden, iets wat ik nu nog steeds doe! Na de
                            middelbare school studeerde ik Biologie en Bos- en
                            Natuurbeheer. Ondertussen verdiepte ik mijn kennis
                            in fotografie en werd ik bekend met professionele
                            camera’s en apparatuur. Na mijn studie wist ik niet
                            zo goed wat ik wilde, ik wilde eigenlijk niet door
                            met een master dus dat deed ik ook niet. Ik ben gaan
                            ondernemen en reizen, en in die tijd realiseerde ik
                            me dat ik fotograaf wilde worden!
                          </p>
                          <p className="mt-5">
                            Ik heb via een eigen weg mijn stijl en vaardigheden
                            ontwikkeld. Het is ongelofelijk hoeveel je kunt
                            leren via het internet, voor mij was dit de manier
                            om te groeien tot de fotograaf die ik nu ben. Ik hou
                            van natuurlijke foto’s, zowel de manier hoe ik
                            iemand op de foto zet als het daadwerkelijk
                            fotograferen in de natuur. Lichte foto’s met een
                            mooie balans aan kleuren. Niet te geposeerd of
                            gemaakt, gewoon hoe het is. Met veel detail zoek ik
                            naar de mooiste plekjes en hoeken om het onderwerp
                            eruit te laten springen, en met veel plezier en zorg
                            bewerk ik al mijn foto’s na tot een kunstwerkje!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Scene
              triggerElement="#section1"
              classToggle={["#page", "bg-grey-pinkish2"]}
            >
              <div>
                <div id="section1">
                  <ContactFormSection />
                </div>
              </div>
            </Scene>
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}

export default overmij;
