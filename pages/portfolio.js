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


function portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
        <Carousel>
          <Image
            src="/images/loveshoot/e1.png"
            alt="Portretfoto"
            width="300"
            height="200"
          />
          <Image
            src="/images/loveshoot/e1.png"
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
