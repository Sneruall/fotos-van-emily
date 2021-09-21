import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

function scrollNavbar(props) {
  const [scrollNav, setScrollNav] = useState(false);
  const [showDiensten, setShowDiensten] = useState(false);

  useEffect(() => {
    props.fade && window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!scrollNav) {
        setScrollNav(true);
      }
    } else {
      setScrollNav(false);
    }
  };

  return (
    <Fragment>
      <div
        className={`${
          !scrollNav && props.fade ? "hidden" : "sm:block"
        } hidden fixed bg-white bg-opacity-90 w-full z-50 top-0 shadow-sm`}
      >
        <div className="px-2 flex max-w-6xl mx-auto uppercase text-brown-pale justify-between">
          <div className="flex flex-col justify-items-center my-1">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-display">
              Foto's van Emily
            </h2>
          </div>
          <div className="flex sm:text-xs md:text-sm lg:text-base">
            <ul className="grid grid-cols-5 justify-items-center hover:cursor-pointer items-stretch">
              <Link href="/">
                <li className="w-24 md:w-28 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Home</a>
                </li>
              </Link>
              <Link href="/#diensten">
                <li
                  onMouseEnter={() => setShowDiensten(true)}
                  onMouseLeave={() => setShowDiensten(false)}
                  className="w-24 md:w-28 lg:w-32 text-center hover:underline flex flex-col justify-items-center"
                >
                  <a className="my-auto">Diensten</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-24 md:w-28 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Portfolio</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-24 md:w-28 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Over mij</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-24 md:w-28 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {showDiensten && (
        <div className="fixed w-full z-40 top-8 md:top-10 lg:top-12">
          <div className="w-full">
            <div className="px-2 flex max-w-6xl mx-auto uppercase text-brown-pale justify-end h-full">
              <ul className="grid grid-cols-5 grid-rows-5 justify-items-center">
                <Link href="/portretfotografie">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-1 row-end-2 col-start-2 col-end-3 w-24 md:w-28 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Portret</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-2 row-end-3 col-start-2 col-end-3 w-24 md:w-28 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Loveshoot</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-3 row-end-4 col-start-2 col-end-3 w-24 md:w-28 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Zwangerschap</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-4 row-end-5 col-start-2 col-end-3 w-24 md:w-28 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Honden</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-5 row-end-6 col-start-2 col-end-3 w-24 md:w-28 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Fotobewerking</a>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default scrollNavbar;
