import Head from "next/head";
import { Fragment, useState } from "react";
import Welcome from "../components/sections/welcome";
import Diensten from "../components/sections/diensten";
import Werkwijze from "../components/sections/werkwijze";
import Reviews from "../components/sections/reviews";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Image from "next/image";
import parse from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {

  let [transition, setTransition] = useState("")

  const transitionEffect = () => {
    console.log("changed");
    setTransition("transition duration-150 ease-out opacity-0")
    setTimeout(() => {
      setTransition("transition duration-150 ease-out opacity-100")
    }, 200);
  };

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>De Foto's van Emily</title>
        {/* description meta */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* gebruik next-seo npm tool */}
      </Head>

      <ScrollNavbar fade hideLogo />

      {/* HEADER INDEX */}
      <header className="relative">
        <div className="hidden sm:block -mt-28 lg:-mt-14">
          <Image
            src="/images/header/headerIndex.png"
            alt="Foto's van Emily"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />

          <div className="relative mt-14 font-display uppercase text-charcoal mx-auto min-h-screen">
            <div className="absolute top-20 left-0 right-0">
              <h1 className="text-5xl md:text-8xl lg:text-9xl xl:text-10xl text-center">
                Foto's van Emily
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="text-center flex justify-center">
                <Carousel
                  autoPlay={true}
                  infiniteLoop
                  stopOnHover={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  interval={3000}
                  width={380}
                  onChange={transitionEffect}
                >
                  <Image
                    className={transition}
                    src="/images/header/mensen1.png"
                    alt="Foto's van Emily"
                    width={1722}
                    height={2015}
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen2.png"
                    alt="Foto's van Emily"
                    width={1722}
                    height={2015}
                  />
                  <Image
                    className={transition}
                    src="/images/header/mensen3.png"
                    alt="Foto's van Emily"
                    width={1722}
                    height={2015}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden -mt-14">
          <Image
            src="/images/header/header1m.png"
            alt="Foto's van Emily"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="relative z-10 font-display uppercase text-charcoal mx-auto min-h-screen">
            <div className="absolute top-20 left-0 right-0">
              <h1 className="text-7xl-2 leading-none text-center mx-4">
                {parse(`Foto's<br>van<br>Emily`)}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <Welcome />
      <Diensten />

      <Werkwijze />

      <Reviews
        review1={[
          "Lorem ipsum dolor sit amet, consetetur sadipsc amet, consetetur sadip amet, consetetur sadiping elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name1",
        ]}
        review2={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name2",
        ]}
        review3={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name3",
        ]}
        review4={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name4",
        ]}
        review5={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name5",
        ]}
        review6={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.",
          "Name6",
        ]}
      />
    </Fragment>
  );
}
