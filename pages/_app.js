import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
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
             url: "/images/OG-1.jpg",
             width: 1200,
             height: 630,
             alt: "Loveshoot",
           },
         ],
       }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
