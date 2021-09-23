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
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Open regular modal
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative mx-auto w-full h-full">
                  {/*content*/}
                  <div className="relative flex flex-col w-full h-full bg-black outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5">
                      <h3 className="text-3xl font-semibold">Modal Title</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Carousel selectedItem={currentImage}>
                        <Image
                          src="/images/loveshoot/p1.png"
                          alt="Portretfoto"
                          layout="fill"
                          objectFit="contain"
                        />
                        <Image
                          src="/images/loveshoot/e1.png"
                          alt="Portretfoto"
                          width="1200"
                          height="800"
                        />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        <Carousel selectedItem="1">
          <Image
            src="/images/loveshoot/e1.png"
            alt="Portretfoto"
            width="300"
            height="200"
          />
          <Image
            src="/images/loveshoot/e2.png"
            alt="Portretfoto"
            width="300"
            height="200"
          />
        </Carousel>

     
        {/* <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway> */}
      </div>
    </Fragment>
  );
}

export default portfolio;
