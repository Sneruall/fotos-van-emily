import Head from "next/head";
import { Fragment } from "react";
import Welcome from "../components/sections/welcome";
import Diensten from "../components/sections/diensten";
import Werkwijze from "../components/sections/werkwijze";
import Reviews from "../components/sections/reviews";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Header from "../components/layout/header";

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

      {/* <ScrollNavbar2 fade /> */}
      <ScrollNavbar fade />

      <Header
        img="/images/header/header1.png"
        imgMobile="/images/header/header1m.png"
        title="Foto's van Emily"
        subtitle="FOTOGRAFIE &amp; FOTOBEWERKING"
        // integratedNavigation
        // pageTitle2="FOTOGRAFIE &amp; FOTOBEWERKING"
      />

      <Welcome />
      <Diensten />

      <Werkwijze />

      <Reviews />
    </Fragment>
  );
}
