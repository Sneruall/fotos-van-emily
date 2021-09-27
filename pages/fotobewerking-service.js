import { Fragment } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";
import Header from "../components/layout/header";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Section from "../components/layout/Section";
import Button from "../components/ui/button";
import { CheckIcon } from "@heroicons/react/solid";
import CustomPricingSection from "../components/sections/CustomPricingSection";
import ContactFormSection from "../components/sections/ContactFormSection";

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

      {/* VOORBEELDEN SECTIE */}
      <Section bg={"bg-grey-pinkish2"}>
        <div className="mx-auto max-w-6xl">
          <h2 className="title-1 my-0 lg:my-10 text-white leading-tight">
            JOUW FOTO’S, PROFESSIONEEL BEWERKT
          </h2>
          <div className="border border-white my-5">
            <div className="bg-white m-1 p-2 bg-opacity-70">
              <div className="p-2 sm:p-10 max-w-6xl mx-auto text-center">
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

                <div className="flex flex-col lg:grid grid-cols-2 gap-4 lg:gap-14 mb-8 justify-items-center">
                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />

                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />

                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />

                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />
                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />
                  <ReactCompareSlider
                    itemOne={
                      <Image
                        src="/images/portretfotografie/e1.png"
                        alt="foto"
                        width="524"
                        height="363"
                      />
                    }
                    itemTwo={
                      <Image
                        src="/images/portretfotografie/e2.png"
                        alt="nabewerkte foto"
                        width="524"
                        height="363"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mx-auto text-center text-5xl font-sans my-10 lg:mt-16 text-white">
          EXTRA SERVICE: SKIN RETOUCHING
        </h2>
        <p className="max-w-3xl mx-auto mb-6 sm:mb-10 text-white text-center">
          Skin retouching kan op verzoek worden aangevraagd. Dit houdt in dat
          oneffenheden van de huid worden weggewerkt en eventuele donkere
          kringen onder de ogen worden opgelicht. Je wilt natuurlijk geen baby
          face, daarom wordt er veel aandacht besteed aan het zo natuurlijk
          mogelijk houden van de huid. Zo krijg je een gebalanceerd en fris
          resultaat! Skin retouching is vooral geschikt bij headshots, in
          overleg kijken we welke foto’s het meest geschikt hiervoor zijn
          (tarieven en meer informatie vind je op de fotobewerking pagina).
        </p>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <ReactCompareSlider
              itemOne={
                <Image
                  src="/images/portretfotografie/e1.png"
                  alt="skin retouching"
                  width="651"
                  height="434"
                />
              }
              itemTwo={
                <Image
                  src="/images/portretfotografie/e2.png"
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
      </Section>

      {/* WERKWIJZE SECTIE */}
      <Section bg={"bg-grey-light2"}>
        <div className="mx-auto max-w-6xl">
          <h2 className="title-1 my-0 lg:my-10 leading-tight">
            WERKWIJZE FOTOBEWERKING
          </h2>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:justify-items-stretch gap-0 lg:gap-8 max-w-6xl mx-auto">
          <div className="border border-white grid grid-cols-1 justify-items-stretch my-5">
            <div className="bg-white m-1 p-4 bg-opacity-70">
              <div className="mb-4">
                <h4 className="border-b-2 border-brown-pale text-2xl xl:text-3xl uppercase text-brown-pale mb-1">
                  WAT IK DOE MET DE FOTO’S
                </h4>
              </div>
              <div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p className="leading-snug">Bijsnijden en roteren</p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p className="leading-snug">
                    Aanpassen van basis licht instellingen zoals belichting,
                    contrast en schaduwen.
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p className="leading-snug">
                    Aanpassen van de totale kleur balans en individuele kleuren
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p className="leading-snug">
                    Overige nabewerking zodat de foto's nog mooier worden of
                    specifieke verzoeken op aanvraag.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  Naast het bewerken van de totale foto is het op aanvraag ook
                  nog mogelijk de huid te retoucheren. Dit houdt in dat
                  oneffenheden van de huid worden weggewerkt en eventuele
                  donkere kringen onder de ogen worden opgelicht. Deze retouch
                  wordt nauwkeurig en zo natuurlijk mogelijk gedaan, je wilt
                  natuurlijk geen baby face. Zo krijg je een gebalanceerd en
                  fris resultaat!
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white my-5 grid grid-cols-1 justify-items-stretch">
            <div className="bg-white m-1 p-4 bg-opacity-70">
              <div className="mb-4">
                <h4 className="border-b-2 border-brown-pale text-2xl xl:text-3xl uppercase text-brown-pale mb-1">
                  VOORWAARDEN VAN DE FOTO’S
                </h4>
              </div>
              <div>
                <p>
                  De foto moet van voldoende kwaliteit zijn. Het heeft geen zin
                  om lage kwaliteit foto’s te bewerken omdat er te weinig
                  informatie is opgeslagen in de foto. Dit betekent over het
                  algemeen dat foto’s van mobiele telefoons niet geschikt zijn
                  om te laten bewerken. Er zijn natuurlijk uitzonderingen, stuur
                  mij een berichtje en we bekijken samen of nabewerking mogelijk
                  is.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white my-5 grid grid-cols-1 justify-items-stretch">
            <div className="bg-white m-1 p-4 bg-opacity-70">
              <div className="mb-4">
                <h4 className="border-b-2 border-brown-pale text-2xl xl:text-3xl uppercase text-brown-pale mb-1">
                  ADVIES BIJ HET MAKEN VAN FOTO’S
                </h4>
              </div>
              <div>
                <p>
                  Maak je de foto’s met een fotocamera? Kies ervoor om de foto’s
                  in RAW formaat op te slaan. Dit houdt in dat er meer
                  informatie wordt opgeslagen waardoor er meer mogelijk is in de
                  nabewerking (let op, hierdoor wordt het bestandsformaat ook
                  groter). Je kunt dit aanpassen in de instellingen van je
                  camera.
                </p>
              </div>
              <div className="mt-5">
                <p>
                  Gooi donkere foto’s of te lichte foto’s niet meteen weg! Vaak
                  zijn deze foto’s nog te redden in de nabewerking!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CustomPricingSection
        heading="Tarieven fotobewerking"
        prijsText="Per foto:"
        pakketA={[
          "Kleur Bewerking",
          `Zorgvuldige <span classname="font-bold">kleur</span> nabewerking`,
          "Overige nabewerking zoals rotatie en bijsnijden",
          `<span classname="font-bold">Zwart-wit</span> variant`,
          `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
          ,
          "1,99",
        ]}
        pakketB={[
          "Skin Retouching",
          `Oneffenheden van de huis nauwkeurig weggewerkt`,
          "Donkere kringen onder de ogen natuurlijk opgelicht",
          `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
          ,
          ,
          "3,99",
        ]}
        pakketC={[
          "Combi",
          `Kleur bewerking`,
          "Skin retouching",
          `Binnen <span classname="font-bold">1 week</span> worden alle foto’s via WeTransfer geleverd`,
          ,
          ,
          "5,50",
        ]}
        cta="Liever een offerte op maat?"
      />

      {/* SAMENWERKING SECTIE */}
      <Section bg={"bg-brown-pale2"}>
        <div className="mx-auto max-w-6xl">
          <h2 className="title-1 text-white leading-tight mb-4">
            Ben jij professioneel fotograaf?
          </h2>
          <h3 className="text-white text-3xl lg:text-4xl text-center uppercase mb-10">
            Laten we samenwerken!
          </h3>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mx-auto text-center">
            <div>
              <Image
                src="/images/fotobewerking/camera.png"
                alt="Professionele fotograaf"
                width={540}
                height={361}
              />
            </div>
            <div className="px-2 max-w-lg xl:max-w-2xl mx-auto text-center lg:text-left text-white">
              <p>
                De nabewerking, de één heeft er een hekel aan, de ander kan er
                geen genoeg van krijgen. Wel een must als professioneel
                fotograaf want door nabewerking blaas je leven in een foto. Heb
                jij moeite met de nabewerking of vind je het gewoon
                verschrikkelijk? Je kunt de nabewerking ook uitbesteden! Ik heb
                jarenlange ervaring in Adobe Lightroom en Photoshop en ik kan
                niet anders zeggen dat het bewerken van foto’s mijn grootste
                passie is. Dus lijkt het jou wat puur te focussen op het
                fotograferen? Laten we samenwerken! Jij maakt de foto’s bij de
                klant, ik bewerk ze professioneel voor je na.
              </p>
              <p className="mt-5">
                Neem contact op om een mogelijke samenwerking te bespreken of
                vraag direct een offerte aan voor je fotografie opdracht.
                Daarnaast sta ik open voor andere samenwerkingen zoals second
                shooter of backup fotograaf.
              </p>
              <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="flex-none">
                  <Button
                    text="Neem Contact op"
                    link="#contact"
                    button="button-3 mt-8"
                  />
                </div>
                <div className="flex-none">
                  <Button
                    text="Bekijk portfolio"
                    link="/portfolio"
                    button="button-3 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ContactFormSection />
    </Fragment>
  );
}

export default fotobewerkingservice;
