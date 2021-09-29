import Head from "next/head";
import { Fragment } from "react";
import Welcome from "../components/sections/welcome";
import Diensten from "../components/sections/diensten";
import Werkwijze from "../components/sections/werkwijze";
import Reviews from "../components/sections/reviews";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Header from "../components/layout/header";
import Image from "next/image";


export default function Home() {
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
            src="/images/header/header1.png"
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
              <div className="absolute top-40 left-0 right-0">
                <h1 className="text-5xl text-center">Foto's van Emily</h1>
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
