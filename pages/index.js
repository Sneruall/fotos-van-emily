import { NextSeo } from "next-seo";
import { Fragment, useEffect, useRef, useState } from "react";
import Welcome from "../components/sections/welcome";
import Diensten from "../components/sections/diensten";
import Werkwijze from "../components/sections/werkwijze";
import Reviews from "../components/sections/reviews";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Image from "next/image";
import parse from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Controller, Scene } from "react-scrollmagic";
import { useRouter } from "next/router";

export default function Home() {
  //index slider
  let [transition, setTransition] = useState("");

  const transitionEffect = () => {
    setTransition("transition duration-100 ease-out opacity-0");
    setTimeout(() => {
      setTransition("transition delay-75 duration-150 ease-out opacity-100");
    }, 220);
  };

  //scrollmagic

  const [section1Height, setSection1Height] = useState(0);
  const section1Ref = useRef(null);

  useEffect(() => {
    setSection1Height(section1Ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSection1Height(section1Ref.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //scroll to diensten seciton

  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/#diensten"&& dienstenRef && dienstenRef.current) {
      console.log("navigate to diensten");
      dienstenRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [router]);

  const dienstenRef = useRef(null);

  return (
    <Fragment>
      <NextSeo
        title="De Foto's van Emily"
        description="Professioneel fotograaf in Utrecht en omgeving, bekijk mijn portfolio. ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl",
          title: "De Foto's van Emily",
          description:
            "Professioneel fotograaf in Utrecht en omgeving, bekijk mijn portfolio. ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Hondenfotografie",
            },
            {
              url: "/images/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Loveshoot",
            },
          ],
        }}
      />

      <ScrollNavbar fade hideLogo />

      {/* HEADER INDEX */}
      <header className="relative">
        <div className="-mt-14 lg:mt-0">
          <div className="hidden sm:block">
            <Image
              src="/images/header/headerIndex.png"
              alt="Foto's van Emily"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCMzdBNUM0MkNEODExRUNBQ0ZDQkU0MTI2M0Q3Mzk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCMzdBNUM1MkNEODExRUNBQ0ZDQkU0MTI2M0Q3Mzk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0IzN0E1QzIyQ0Q4MTFFQ0FDRkNCRTQxMjYzRDczOTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0IzN0E1QzMyQ0Q4MTFFQ0FDRkNCRTQxMjYzRDczOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAHAAoDAREAAhEBAxEB/8QAeQABAQAAAAAAAAAAAAAAAAAABgoBAQEAAAAAAAAAAAAAAAAAAAcGEAAABQIDBwUAAAAAAAAAAAABAgMEBQYHADUJEjNjFGRVCDY3OBlZEQAABAQDBQkAAAAAAAAAAAABAgMFETESBgAhBGEyUmIUkaHhM1M0VRYH/9oADAMBAAIRAxEAPwChptqn+W8o7iajidM/yxh6Ag0Sq1pSs9YC8Clypls5KJWRKAXaQaME4cNSbIqFVQWA5gEphQKIKYMNddt6ldkS6RnUM1nGJ6inBQNlUKSiE8yjGWUI4a7Ys78mcLAdnZ3fldPdujKHSoQTKRcaQEtKZgFRUDDEg0qEFOFZshAMGvuYu7+Q+pD7hcl8drmZL3f0NmnT7vi4vvsDj8c4e34S7vb4c2ALo9J6qfn1TJPh3pd/Lj//2Q=="
            />
          </div>

          <div className="sm:hidden">
            <Image
              src="/images/header/header1m2.jpg"
              alt="Foto's van Emily"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4RkExNDE3MkNEODExRUNBQTAxODAwQjUzNTE5NEM1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4RkExNDE2MkNEODExRUNBQTAxODAwQjUzNTE5NEM1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI2NkJBODhDN0RGNEI1QUZCNjA4REYzM0JGRjAyNzRBMiIgc3RSZWY6ZG9jdW1lbnRJRD0iNjZCQTg4QzdERjRCNUFGQjYwOERGMzNCRkYwMjc0QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAKAAkDAREAAhEBAxEB/8QAhQAAAwEAAAAAAAAAAAAAAAAABwgJCgEAAgMAAAAAAAAAAAAAAAAABgcECAkQAAECBAIIBwAAAAAAAAAAAAIBBBEDBQYANWFiUxQ01DYJlgc3V5cIGREAAQEFBAUNAQAAAAAAAAAAAQIRITIDBAAxEgZh0jMFB/CBUpIjU2NUlBU1FjY4/9oADAMBAAIRAxEAPwDVFTe859AndElXIvmbcDG0paTwd3O7sG6FpNLBoAxKogzYu6m2lGpgIluyihGiEowKAKriRlgV6aFcyaKiYXdmoggvCnNUAX3pa4uuaxZHCfOc/KE/OtJTJnZapGpmzUKaEFLAoMIGLCSkKUjEhJUAVB7AJ++vat96ax8f3dyODH7luvzJ6i9Syd9kn8sWraCs/O7Xznoym+onHZM7zHV2OmGM00/narbbcwRRph0dLntotlP+Td/fI7addDHIg8Dv9OOyneAMQ/XWopb/2Q=="
            />
          </div>

          <div className="relative font-display uppercase text-charcoal mx-auto min-h-screen">
            <div className="absolute top-16 sm:top-24 left-0 right-0">
              <h1 className="hidden sm:block text-5xl md:text-8xl lg:text-9xl xl:text-10xl text-center">
                Foto's van Emily
              </h1>
              <h1 className="sm:hidden text-7xl-2 leading-none text-center mx-4">
                {parse(`Foto's<br>van<br>Emily`)}
              </h1>
            </div>
            <div className="absolute left-0 right-0 -bottom-2">
              <div className="hidden sm:flex justify-center">
                <Carousel
                  autoPlay={true}
                  infiniteLoop
                  stopOnHover={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  swipeable={false}
                  interval={3000}
                  width="45vh"
                  onChange={transitionEffect}
                >
                  <Image
                    className={transition}
                    src="/images/header/mensen1.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                    priority
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen2.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen3.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                  />
                </Carousel>
              </div>
              <div className="flex sm:hidden justify-center">
                <Carousel
                  autoPlay={true}
                  infiniteLoop
                  stopOnHover={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  swipeable={false}
                  interval={3000}
                  width="32vh"
                  onChange={transitionEffect}
                >
                  <Image
                    className={transition}
                    src="/images/header/mensen1.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                    priority
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen2.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen3.png"
                    alt="Foto's van Emily"
                    width={561}
                    height={656}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Controller>
        <div className="bg-grey-light">
          <div id="page" className="transition ease-linear duration-1000">
            <Welcome />

            <div ref={dienstenRef}>
              <Diensten />
            </div>

            <Scene
              triggerElement="#section1"
              classToggle={["#page", "bg-grey-pinkish"]}
              duration={section1Height}
            >
              <div>
                <div id="section1" ref={section1Ref}>
                  <Werkwijze />
                </div>
              </div>
            </Scene>

            <Scene
              triggerElement="#section2"
              classToggle={["#page", "bg-grey-light2"]}
            >
              <div>
                <div id="section2">
                  <Reviews
                    review1={[
                      "Ik wilde graag een professionele portretfoto laten maken. Emily had daarbij direct de juiste context in gedachte en nam de tijd om veel verschillende foto’s te maken. Ze sloot goed aan bij mijn wensen en gaf fijne aanwijzingen. Ik voelde me bij haar erg op mijn gemak, waardoor de foto’s natuurlijk overkomen. De foto’s volgde al snel en ik ben erg tevreden met het resultaat! Ik zou zeker bij een volgende gelegenheid terug gaan naar Emily.",
                      "Lisa",
                    ]}
                    review2={[
                      "Per toeval kwamen we bij Emily terecht. Ze was heel betrokken en kwam met leuke ideeën. Ze zorgde ervoor dat we ons zelf waren voor de camera en mede daardoor zijn de foto’s heel puur geworden. Wij zijn heel blij met het resultaat. Echt een aanrader :)",
                      "Shannon & Gerben",
                    ]}
                    review3={[
                      "Bedankt voor de super leuke gezellige fotoshoot! De foto's zijn echt prachtig geworden! En de kinderen vonden het super leuk! Geen gedwongen foto sessie maar gewoon lekker spelen en tijdens het spelen foto's maken.",
                      "Chantal",
                    ]}
                    review4={[
                      "Ik ben heel erg blij met de foto's die Emily heeft gemaakt tijdens mijn zwangerschapsshoot. Ik had zelf een locatie gekozen en Emily vond daar de mooiste plekken voor het maken van de foto's. Ze stelde me op mijn gemak, gaf goede tips over poses die ik kon aannemen en nam echt de tijd voor het maken van de foto's. De foto's zijn voor mijn man en mij enorm waardevol als herinnering aan mijn zwangerschap. Ik raad Emily absoluut aan als fotografe!",
                      "Kathelijne & Tim",
                    ]}
                    review5={[
                      "Emily zorgt ervoor dat je op je gemak bent en maakt zo hele spontane en natuurlijke foto's! Ze heeft een goed oog voor mooie locaties en creatieve ideeën over de foto's. Nu hebben we mooie portretfoto's, leuke foto's als stel én heb ik professionele foto's voor mijn eigen website. Echt een aanrader!",
                      "Rina & Nick",
                    ]}
                    review6={[
                      "Emily is een enthousiaste fotografe, die mij en mijn hond Câline mooi op de foto heeft gezet. Zij ziet met haar creatieve blik overal mooie plekjes en kansen voor een leuke foto in. Ze stopt niet tot jij tevreden bent. En dat kan je zien... de foto’s zijn natuurlijk, ongedwongen en brengen de wow factor met zich mee!",
                      "Gaëlla",
                    ]}
                  />
                </div>
              </div>
            </Scene>
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}
