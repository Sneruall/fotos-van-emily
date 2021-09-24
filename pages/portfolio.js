import { Fragment } from "react";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";

import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setShowModal(true);
    console.log("set image" + index);
  }, []);

  //   const closeLightbox = () => {
  //     setCurrentImage(0);
  //     setShowModal(false);
  //   };

  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <div className="flex flex-col items-center my-20 gap-10 max-w-5xl text-center mx-auto">
        <h1 className="text-5xl">Mijn portfolio</h1>
        <p>
          Kijk rond in mijn portfolio om een beeld te krijgen van mijn
          fotografie stijl. Wil je graag foto's laten maken? Neem vrijblijvend
          contact met mij op en we plannen samen een afspraak!
        </p>
        <Button link="/" button="button-1" text="Neem contact op" />
      </div>
      <div>
        <Gallery photos={photos} onClick={openLightbox} direction="column" />

        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-h-screen">
                <div className="relative mx-auto w-full h-screen">
                  {/*content*/}
                  <div className="relative flex flex-col h-full bg-black">
                    {/*header*/}
                    <div className="absolute top-0 right-0 p-2 z-50">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white h-6 w-6 text-4xl block">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="p-6 h-full">
                      <Carousel
                        className="flex flex-col h-full justify-center"
                        selectedItem={currentImage}
                        showStatus={false}
                        showIndicators={true}
                        showArrows={true}
                        showThumbs={false}
                      >
                        <div className="">
                          <Image
                            src="/images/loveshoot/p1.png"
                            alt="Portretfoto"
                            width={800}
                            height={1200}
                            objectFit="scale-down"
                          />
                        </div>

                        <div className="">
                          <Image
                            src="/images/loveshoot/e1.png"
                            alt="Portretfoto"
                            width={1200}
                            height={800}
                          />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
            </>
          ) : null}
        </>
      </div>
    </Fragment>
  );
}

export default portfolio;
