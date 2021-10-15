import { Fragment, useEffect, useRef, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Section from "../components/layout/Section";
import Button from "../components/ui/button";
import { CheckIcon } from "@heroicons/react/solid";
import CustomPricingSection from "../components/sections/CustomPricingSection";
import ContactFormSection from "../components/sections/ContactFormSection";
import { Controller, Scene } from "react-scrollmagic";
import { NextSeo } from "next-seo";
import FadeInEffect from "../components/sections/elements/FadeInEffect";

function fotobewerkingservice() {
  const [section1Height, setSection1Height] = useState(0);
  const section1Ref = useRef(null);
  const [section2Height, setSection2Height] = useState(0);
  const section2Ref = useRef(null);
  const [section3Height, setSection3Height] = useState(0);
  const section3Ref = useRef(null);

  useEffect(() => {
    setSection1Height(section1Ref.current.clientHeight);
    setSection2Height(section2Ref.current.clientHeight);
    setSection3Height(section3Ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSection1Height(section1Ref.current.clientHeight);
      setSection2Height(section2Ref.current.clientHeight);
      setSection3Height(section3Ref.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <NextSeo
        title="Fotobewerking service | De Foto's van Emily"
        description="Fotobewerking service door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.fotosvanemily.nl/fotobewerking-service",
          title: "Fotobewerking service | De Foto's van Emily",
          description:
            "Fotobewerking service door professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Fotobewerking",
            },
            {
              url: "/images/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Fotobewerking",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} lightFade />

      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/fotobewerking/hero.png"
              alt="Fotobewerking Service"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/images/fotobewerking/hero-mobile.png"
              alt="Fotobewerking Service"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="px-5 relative max-w-6xl mx-auto min-h-screen">
            <div className="max-w-3xl absolute top-10 sm:top-20">
              <h1 className="hidden sm:block text-7xl md:text-8xl lg:text-9xl leading-tight font-display uppercase py-4 text-white">
                Fotobewerking Service
              </h1>
              <h1 className="sm:hidden text-6xl leading-tight font-display uppercase py-4 text-white">
                Foto- Bewerking Service
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* VOORBEELDEN SECTIE */}
      <Controller>
        <div className="bg-grey-pinkish2">
          <div id="page" className="transition ease-linear duration-1000">
            <Section>
              <div className="mx-auto max-w-6xl">
                <h2 className="title-1 my-0 lg:my-10 text-white leading-tight">
                  JOUW FOTO’S, PROFESSIONEEL BEWERKT
                </h2>
                <div className="border border-white my-5">
                  <div className="bg-white m-1 p-2 bg-opacity-70">
                    <div className="p-2 sm:p-10 max-w-6xl mx-auto text-center">
                      <p className="max-w-3xl mx-auto mb-6 sm:mb-10">
                        Wil je graag dat jouw foto’s er verbluffend uitzien,
                        maar heb je geen idee hoe? Gelukkig ben ik er voor je om
                        je een handje te helpen. Het omtoveren van een ‘mooie’
                        foto tot een ‘fantastische’ foto doe je via nabewerking.
                        Het nabewerken van een foto betekent niet urenlang
                        zoeken naar een mooi filter maar professionele
                        nabewerking in Adobe Lightroom en Photoshop. Het is
                        begrijpelijk dat je hierin niet thuis bent, het goed
                        nabewerken van een foto is echt een vak apart. Dus laten
                        we de handen bijeen slaan: jij maakt de foto’s, ik doe
                        de rest!
                      </p>
                      <Button
                        link="#werkwijze"
                        button="button-1"
                        text="Werkwijze"
                      />
                      <div>
                        <div className="border-b-2 border-brown-pale inline-block my-12 sm:px-10 ">
                          <h3 className="uppercase text-brown-pale text-3xl">
                            Voorbeelden
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-col lg:grid grid-cols-2 gap-4 lg:gap-14 mb-8 justify-items-center">
                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/1e.jpg"
                                alt="nabewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/1.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>
                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/2e.jpg"
                                alt="bewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/2.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>

                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/3e.jpg"
                                alt="nabewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/3.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>

                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/4e.jpg"
                                alt="nabewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/4.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>
                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/5e.jpg"
                                alt="nabewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/5.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>
                        <FadeInEffect
                          effect="fade-in-effect-bottom"
                          fade
                          bottom
                          offset={0}
                        >
                          <ReactCompareSlider
                            handle={
                              <ReactCompareSliderHandle
                                buttonStyle={{
                                  WebkitBackdropFilter: undefined,
                                  backdropFilter: undefined,
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: 0,
                                  boxShadow: undefined,
                                  color: "#777",
                                  opacity: 0.9,
                                  width: "50px",
                                  height: "50px",
                                }}
                                linesStyle={{ opacity: 0.5 }}
                              />
                            }
                            itemOne={
                              <Image
                                src="/images/fotobewerking/6e.jpg"
                                alt="nabewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                            itemTwo={
                              <Image
                                src="/images/fotobewerking/6.jpg"
                                alt="onbewerkte foto"
                                width="524"
                                height="363"
                              />
                            }
                          />
                        </FadeInEffect>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="mx-auto text-center text-5xl font-sans my-10 lg:mt-16 text-white">
                EXTRA SERVICE: SKIN RETOUCHING
              </h2>
              <p className="max-w-3xl mx-auto mb-6 sm:mb-10 text-white text-center">
                Skin retouching kan op verzoek worden aangevraagd. Dit houdt in
                dat oneffenheden van de huid worden weggewerkt en eventuele
                donkere kringen onder de ogen worden opgelicht. Je wilt
                natuurlijk geen baby face, daarom wordt er veel aandacht besteed
                aan het zo natuurlijk mogelijk houden van de huid. Zo krijg je
                een gebalanceerd en fris resultaat! Skin retouching is vooral
                geschikt bij headshots, in overleg kijken we welke foto’s het
                meest geschikt hiervoor zijn (tarieven en meer informatie vind
                je op de fotobewerking pagina).
              </p>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <FadeInEffect
                    effect="fade-in-effect-bottom"
                    fade
                    bottom
                    offset={0}
                  >
                    <ReactCompareSlider
                      handle={
                        <ReactCompareSliderHandle
                          buttonStyle={{
                            WebkitBackdropFilter: undefined,
                            backdropFilter: undefined,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            border: 0,
                            boxShadow: undefined,
                            color: "#777",
                            opacity: 0.9,
                            width: "50px",
                            height: "50px",
                          }}
                          linesStyle={{ opacity: 0.5 }}
                        />
                      }
                      itemOne={
                        <Image
                          src="/images/portretfotografie/sk1.jpg"
                          alt="skin retouching"
                          width="651"
                          height="434"
                        />
                      }
                      itemTwo={
                        <Image
                          src="/images/portretfotografie/sk2.jpg"
                          alt="skin retouching result"
                          width="651"
                          height="434"
                        />
                      }
                    />
                  </FadeInEffect>
                </div>
              </div>
            </Section>

            {/* WERKWIJZE SECTIE */}
            <Scene
              triggerElement="#section1"
              classToggle={["#page", "bg-grey-light2"]}
              duration={section1Height}
            >
              <div>
                <div id="section1" ref={section1Ref}>
                  <Section id="werkwijze">
                    <div className="mx-auto max-w-6xl">
                      <h2 className="title-1 my-0 lg:my-10 leading-tight">
                        WERKWIJZE FOTOBEWERKING
                      </h2>
                    </div>
                    <FadeInEffect
                      effect="fade-in-effect-bottom"
                      fade
                      bottom
                      offset={0}
                    >
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
                                <p className="leading-snug">
                                  Bijsnijden en roteren
                                </p>
                              </div>
                              <div className="flex space-x-4 my-2">
                                <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                                <p className="leading-snug">
                                  Aanpassen van basis licht instellingen zoals
                                  belichting, contrast en schaduwen.
                                </p>
                              </div>
                              <div className="flex space-x-4 my-2">
                                <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                                <p className="leading-snug">
                                  Aanpassen van de totale kleur balans en
                                  individuele kleuren
                                </p>
                              </div>
                              <div className="flex space-x-4 my-2">
                                <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                                <p className="leading-snug">
                                  Overige nabewerking zodat de foto's nog mooier
                                  worden of specifieke verzoeken op aanvraag.
                                </p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <p>
                                Naast het bewerken van de totale foto is het op
                                aanvraag ook nog mogelijk de huid te
                                retoucheren. Dit houdt in dat oneffenheden van
                                de huid worden weggewerkt en eventuele donkere
                                kringen onder de ogen worden opgelicht. Deze
                                retouch wordt nauwkeurig en zo natuurlijk
                                mogelijk gedaan, je wilt natuurlijk geen baby
                                face. Zo krijg je een gebalanceerd en fris
                                resultaat!
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
                                De foto moet van voldoende kwaliteit zijn. Het
                                heeft geen zin om lage kwaliteit foto’s te
                                bewerken omdat er te weinig informatie is
                                opgeslagen in de foto. Dit betekent over het
                                algemeen dat foto’s van mobiele telefoons niet
                                geschikt zijn om te laten bewerken. Er zijn
                                natuurlijk uitzonderingen, stuur mij een
                                berichtje en we bekijken samen of nabewerking
                                mogelijk is.
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
                                Maak je de foto’s met een fotocamera? Kies
                                ervoor om de foto’s in RAW formaat op te slaan.
                                Dit houdt in dat er meer informatie wordt
                                opgeslagen waardoor er meer mogelijk is in de
                                nabewerking (let op, hierdoor wordt het
                                bestandsformaat ook groter). Je kunt dit
                                aanpassen in de instellingen van je camera.
                              </p>
                            </div>
                            <div className="mt-5">
                              <p>
                                Gooi donkere foto’s of te lichte foto’s niet
                                meteen weg! Vaak zijn deze foto’s nog te redden
                                in de nabewerking!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeInEffect>
                  </Section>
                </div>
              </div>
            </Scene>

            <Scene
              triggerElement="#section2"
              classToggle={["#page", "bg-grey-light"]}
              duration={section2Height}
            >
              <div>
                <div id="section2" ref={section2Ref}>
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
                </div>
              </div>
            </Scene>

            <Scene
              triggerElement="#section3"
              classToggle={["#page", "bg-brown-pale2"]}
              duration={section3Height}
            >
              <div>
                <div id="section3" ref={section3Ref}>
                  {/* SAMENWERKING SECTIE */}
                  <Section>
                    <div className="mx-auto max-w-6xl">
                      <h2 className="title-1 text-white leading-tight mb-4">
                        Ben jij professioneel fotograaf?
                      </h2>
                      <h3 className="text-white text-3xl lg:text-4xl text-center uppercase mb-10">
                        Laten we samenwerken!
                      </h3>
                      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mx-auto text-center">
                        <div>
                        <FadeInEffect
                          effect="fade-in-effect-left"
                          fade
                          left
                          offset={0}
                        >
                          <Image
                            src="/images/fotobewerking/camera.png"
                            alt="Professionele fotograaf"
                            width={540}
                            height={361}
                          />
                          </FadeInEffect>
                        </div>
                        <div className="px-2 max-w-lg xl:max-w-2xl mx-auto text-center lg:text-left text-white">
                          <p>
                            De nabewerking, de één heeft er een hekel aan, de
                            ander kan er geen genoeg van krijgen. Wel een must
                            als professioneel fotograaf want door nabewerking
                            blaas je leven in een foto. Heb jij moeite met de
                            nabewerking of vind je het gewoon verschrikkelijk?
                            Je kunt de nabewerking ook uitbesteden! Ik heb
                            jarenlange ervaring in Adobe Lightroom en Photoshop
                            en ik kan niet anders zeggen dat het bewerken van
                            foto’s mijn grootste passie is. Dus lijkt het jou
                            wat puur te focussen op het fotograferen? Laten we
                            samenwerken! Jij maakt de foto’s bij de klant, ik
                            bewerk ze professioneel voor je na.
                          </p>
                          <p className="mt-5">
                            Neem contact op om een mogelijke samenwerking te
                            bespreken of vraag direct een offerte aan voor je
                            fotografie opdracht. Daarnaast sta ik open voor
                            andere samenwerkingen zoals second shooter of backup
                            fotograaf.
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
                </div>
              </div>
            </Scene>
            <Scene
              triggerElement="#section4"
              classToggle={["#page", "bg-grey-pinkish2"]}
            >
              <div>
                <div id="section4">
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

export default fotobewerkingservice;
