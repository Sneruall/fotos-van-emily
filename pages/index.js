import Head from "next/head";
import { Fragment } from "react";
import Welcome from "../components/sections/welcome";
import Diensten from "../components/sections/diensten";
import Werkwijze from "../components/sections/werkwijze";
import Reviews from "../components/sections/reviews";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>De Foto's van Emily</title>
        {/* description meta */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* gebruik next-seo npm tool */}
      </Head>

      <main>
        <Welcome />
        <Diensten />

        <Werkwijze />

        <Reviews />
      </main>

     
    </Fragment>
  );
}
