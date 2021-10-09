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
          {/* Start pattern FIRST WITH ADDITIONAL MARGIN */}
          <div className="ml-2">
            <PortfolioImage id={0} onClickAction={(id) => openLightbox(id)}/>
          </div>
          <PortfolioImage id={1} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={2} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={3} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={4} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={5} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={6} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={7} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={8} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={9} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={10} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={11} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={12} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={13} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={14} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={15} onClickAction={(id) => openLightbox(id)}/>
          <PortfolioImage id={16} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={17} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={18} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={19} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={20} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={21} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={22} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={23} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={24} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={25} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={26} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={27} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={28} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={29} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={30} onClickAction={(id) => openLightbox(id)}/>
          <PortfolioImage id={31} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={32} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={33} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={34} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={35} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={36} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={37} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={38} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={39} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={40} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={41} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={42} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={43} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={44} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
          {/* Start pattern */}
          <PortfolioImage id={45} onClickAction={(id) => openLightbox(id)}/>
          <PortfolioImage id={46} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={47} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={48} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={49} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={50} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={51} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={52} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={53} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={54} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImage id={55} onClickAction={(id) => openLightbox(id)} />
          <PortfolioImagePortrait id={56} onClickAction={(id) => openLightbox(id)} />
          {/* End pattern */}
        </div>
        <>
          {showModal && (
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
                        <PortfolioLightboxImage id={11} />
                        <PortfolioLightboxImage id={12} />
                        <PortfolioLightboxImage id={13} />
                        <PortfolioLightboxImage id={14} />
                        <PortfolioLightboxImage id={15} />
                        <PortfolioLightboxImage id={16} />
                        <PortfolioLightboxImage id={17} />
                        <PortfolioLightboxImage id={18} />
                        <PortfolioLightboxImage id={19} />
                        <PortfolioLightboxImage id={20} />
                        <PortfolioLightboxImage id={21} />
                        <PortfolioLightboxImage id={22} />
                        <PortfolioLightboxImage id={23} />
                        <PortfolioLightboxImage id={24} />
                        <PortfolioLightboxImage id={25} />
                        <PortfolioLightboxImage id={26} />
                        <PortfolioLightboxImage id={27} />
                        <PortfolioLightboxImage id={28} />
                        <PortfolioLightboxImage id={29} />
                        <PortfolioLightboxImage id={30} />
                        <PortfolioLightboxImage id={31} />
                        <PortfolioLightboxImage id={32} />
                        <PortfolioLightboxImage id={33} />
                        <PortfolioLightboxImage id={34} />
                        <PortfolioLightboxImage id={35} />
                        <PortfolioLightboxImage id={36} />
                        <PortfolioLightboxImage id={37} />
                        <PortfolioLightboxImage id={38} />
                        <PortfolioLightboxImage id={39} />
                        <PortfolioLightboxImage id={40} />
                        <PortfolioLightboxImage id={41} />
                        <PortfolioLightboxImage id={42} />
                        <PortfolioLightboxImage id={43} />
                        <PortfolioLightboxImage id={44} />
                        <PortfolioLightboxImage id={45} />
                        <PortfolioLightboxImage id={46} />
                        <PortfolioLightboxImage id={47} />
                        <PortfolioLightboxImage id={48} />
                        <PortfolioLightboxImage id={49} />
                        <PortfolioLightboxImage id={50} />
                        <PortfolioLightboxImage id={51} />
                        <PortfolioLightboxImage id={52} />
                        <PortfolioLightboxImage id={53} />
                        <PortfolioLightboxImage id={54} />
                        <PortfolioLightboxImage id={55} />
                        <PortfolioLightboxImage id={56} />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </Fragment>
  );
}

export default portfolio;
