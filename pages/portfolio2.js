import { Fragment } from "react";
import Image from "next/image";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../data/photos";
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

function portfolio2() {
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
        <div className="grid grid-cols-3 space-x-2 mr-2">
          <div className="ml-2 hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
              onClick={()=>openLightbox(0)}
            />
          </div>
          <div className="hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
              onClick={()=>openLightbox(1)}
            />
          </div>
          <div className="row-span-3 hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/1.jpg"
              alt="portfolio foto"
              width={800}
              height={1200}
              onClick={()=>openLightbox(2)}
            />
          </div>
          <div className="row-span-3 hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/1.jpg"
              alt="portfolio foto"
              width={800}
              height={1200}
            />
          </div>
          <div className="hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
            />
          </div>
          <div className="row-span-3 hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/1.jpg"
              alt="portfolio foto"
              width={800}
              height={1200}
            />
          </div>
          <div className="hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
            />
          </div>
          <div className="hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
            />
          </div>
          <div className="hover:cursor-pointer hover:scale-105 hover:z-50 transition duration-300 ease-in-out">
            <Image
              src="/images/portfolio/6.jpg"
              alt="portfolio foto"
              width={1200}
              height={800}
            />
          </div>
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
                        showIndicators={true}
                        showArrows={true}
                        showThumbs={false}
                      >
                        <div className="h-screen80">
                          <Image
                            src="/images/portfolio/6.jpg"
                            alt="Portretfoto"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>

                        <div className="h-screen80">
                          <Image
                            src="/images/portfolio/6.jpg"
                            alt="Portretfoto"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="h-screen80">
                          <Image
                            src="/images/portfolio/1.jpg"
                            alt="Portretfoto"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
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

export default portfolio2;
