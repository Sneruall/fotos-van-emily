import { Fragment } from "react";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";
import React, { useState, useCallback } from "react";
import { photos } from "../data/photos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PortfolioImage from "../components/portfolio/PortfolioImage";
import PortfolioImagePortrait from "../components/portfolio/PortfolioImagePortrait";
import PortfolioLightboxImage from "../components/portfolio/PortfolioLightboxImage";

function portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setShowModal(true);
  }, []);

  return (
    <Fragment>
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
          {/* Start pattern */}
          <div className="ml-2" onClick={() => openLightbox(0)}>
            <PortfolioImage id={0} />
          </div>
          <div onClick={() => openLightbox(0)}>
            <PortfolioImage id={1} />
          </div>
          <PortfolioImagePortrait id={2} />
          <PortfolioImagePortrait id={3} />
          <PortfolioImagePortrait id={4} />
          <PortfolioImage id={5} />
          <PortfolioImage id={6} />
          <PortfolioImagePortrait id={7} />
          <PortfolioImagePortrait id={8} />
          <PortfolioImagePortrait id={9} />
          <PortfolioImage id={10} />
          <PortfolioImagePortrait id={11} />
          <PortfolioImagePortrait id={12} />
          <PortfolioImagePortrait id={13} />
          <PortfolioImage id={14} />
          {/* End pattern */}
        </div>
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-h-screen">
                <div className="relative mx-auto w-full h-screen">
                  {/*content*/}
                  <div className="relative flex flex-col h-full bg-black">
                    {/*header*/}
                    <div className="absolute top-0 right-0 z-50 px-2">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white w-6 text-5xl block">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="h-full">
                      <Carousel
                        className="flex flex-col h-full justify-center"
                        selectedItem={currentImage}
                        showStatus={false}
                        showIndicators={false}
                        showArrows={true}
                        showThumbs={false}
                      >
                        <PortfolioLightboxImage id={0} />
                        <PortfolioLightboxImage id={1} />
                        <PortfolioLightboxImage id={2} />
                        <PortfolioLightboxImage id={3} />
                        <PortfolioLightboxImage id={4} />
                        <PortfolioLightboxImage id={5} />
                        <PortfolioLightboxImage id={6} />
                        <PortfolioLightboxImage id={7} />
                        <PortfolioLightboxImage id={8} />
                        <PortfolioLightboxImage id={9} />
                        <PortfolioLightboxImage id={10} />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      </div>
    </Fragment>
  );
}

export default portfolio;
