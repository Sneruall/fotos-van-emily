import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";
import React, { useState, useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PortfolioImage from "../components/portfolio/PortfolioImage";
import PortfolioImagePortrait from "../components/portfolio/PortfolioImagePortrait";
import LightboxModal from "../components/sections/elements/LightboxModal";
import { NextSeo } from "next-seo";


function portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setShowModal(true);
  }, []);

  return (
    <Fragment>
      <NextSeo
        title="Portfolio | De Foto's van Emily"
        description="Portfolio van professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden"
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
          url: "https://www.fotosvanemily.nl/portfolio",
          title: "Portfolio | De Foto's van Emily",
          description:
            "Portfolio van professioneel fotograaf in Utrecht en omgeving ✓ Binnen- en buiten foto's ✓ Nabewerking ✓ Portretfotografie ✓ Loveshoot ✓ Zwangerschap ✓ Honden",
          locale: "nl_NL",
          site_name: "De Foto's van Emily",
          images: [
            {
              url: "/images/OG-1.jpg",
              width: 1200,
              height: 630,
              alt: "Portfolio",
            },
            {
              url: "/images/OG-2.jpg",
              width: 1200,
              height: 630,
              alt: "Portfolio",
            },
          ],
        }}
      />
      <ScrollNavbar fade={true} />
      <div className="mx-auto max-w-3xl text-center my-12 lg:my-24">
        <div className="border-b-2 border-brown-pale inline-block sm:px-10 my-6">
          <h2 className="title-2 leading-tight">Portfolio</h2>
        </div>
        <p className="mb-6 mx-2">
          Kijk rond en krijg een beeld van mijn fotografie stijl. Wil je graag
          foto’s laten maken? Neem vrijblijvend contact met mij op en we plannen
          samen een afspraak!
        </p>
        <Button
          link="/over-mij#contact"
          button="button-1"
          text="Neem contact op"
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 mr-2">
          {/* Start pattern FIRST WITH ADDITIONAL MARGIN */}
          <div className="ml-2">
            <PortfolioImage id={0} onClickAction={(id) => openLightbox(id)} />
          </div>
          <PortfolioImage id={1} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={2}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={3}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={4}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={5} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={6} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={7}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={8}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={9}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={10} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={11}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={12}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={13}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={14} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={15} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={16} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={17}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={18}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={19}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={20} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={21} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={22}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={23}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={24}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={25} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={26}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={27}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={28}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={29} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={30} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={31} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={32}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={33}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={34}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={35} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={36} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={37}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={38}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={39}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={40} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={41}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={42}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={43}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={44} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={45} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={46} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={47}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={48}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={49}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={50} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={51} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={52}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={53}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImagePortrait
            id={54}
            onClickAction={(id) => openLightbox(id)}
          />
          <PortfolioImage id={55} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait
            id={56}
            onClickAction={(id) => openLightbox(id)}
          />
          {/* End pattern */}
        </div>
        <>{showModal && <LightboxModal id={currentImage} closeAction={() => {setShowModal(false)}} />}</>
      </div>
    </Fragment>
  );
}

export default portfolio;
