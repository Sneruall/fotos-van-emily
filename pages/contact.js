import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contactform";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        {/* description meta */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ContactForm />
    </Fragment>
  );
}
