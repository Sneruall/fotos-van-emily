import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

function ScrollNavbar(props) {
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
          !scrollNav && props.fade
            ? `${
                props.lightFade ? "text-white" : "text-charcoal-2"
              } bg-opacity-0 shadow-none`
            : "bg-white text-brown-pale shadow-sm"
        } sm:block hidden fixed bg-opacity-90 w-full z-40 top-0`}
      >
        <div
          className={`${
            props.hideLogo && !scrollNav ? "justify-center" : "justify-between"
          } px-2 flex max-w-6xl mx-auto uppercase`}
        >
          {/* Logo */}

          <div
            className={`${
              props.hideLogo && !scrollNav && "hidden "
            }flex flex-col justify-items-center my-1`}
          >
            <h2 className="lg:my-1 my-2 text-4xl lg:text-3xl xl:text-3xl font-display">
              Foto's van Emily
            </h2>
          </div>

          <div className="lg:flex sm:text-xs md:text-sm hidden">
            <ul className="flex justify-items-between gap-10 hover:cursor-pointer">
              <Link href="/">
                <li className="text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Home</a>
                </li>
              </Link>
              <Link href="/#diensten">
                <div
                  onMouseEnter={() => setShowDiensten(true)}
                  onMouseLeave={() => setShowDiensten(false)}
                  className={`text-center hover:underline flex flex-col justify-items-center ${
                    props.hideLogo && !scrollNav && "py-4"
                  }`}
                >
                  <a className="my-auto">Diensten</a>
                  {showDiensten && (
                    <div className="fixed z-40 top-8 md:top-10 lg:top-12 lg:mt-1">
                      <div className="w-full">
                        <div className="flex max-w-6xl mx-auto uppercase text-brown-pale justify-end h-full">
                          <ul className="flex flex-col justify-items-center text-left">
                            <Link href="/portretfotografie">
                              <li
                                onMouseEnter={() => setShowDiensten(true)}
                                onMouseLeave={() => setShowDiensten(false)}
                                className="row-start-1 row-end-2 col-start-2 col-end-3 shadow-sm h-8 lg:h-10"
                              >
                                <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                                  <a className="text-xxs lg:text-xs pl-4">
                                    Portret
                                  </a>
                                </div>
                              </li>
                            </Link>
                            <Link href="/loveshoot">
                              <li
                                onMouseEnter={() => setShowDiensten(true)}
                                onMouseLeave={() => setShowDiensten(false)}
                                className="row-start-2 row-end-3 col-start-2 col-end-3 shadow-sm h-8 lg:h-10"
                              >
                                <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                                  <a className="text-xxs lg:text-xs pl-4">
                                    Loveshoot
                                  </a>
                                </div>
                              </li>
                            </Link>
                            <Link href="/zwangerschapsfotografie">
                              <li
                                onMouseEnter={() => setShowDiensten(true)}
                                onMouseLeave={() => setShowDiensten(false)}
                                className="row-start-3 row-end-4 col-start-2 col-end-3 shadow-sm h-8 lg:h-10"
                              >
                                <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                                  <a className="text-xxs lg:text-xs pl-4">
                                    Zwangerschap
                                  </a>
                                </div>
                              </li>
                            </Link>
                            <Link href="/hondenfotografie">
                              <li
                                onMouseEnter={() => setShowDiensten(true)}
                                onMouseLeave={() => setShowDiensten(false)}
                                className="row-start-4 row-end-5 col-start-2 col-end-3 shadow-sm h-8 lg:h-10"
                              >
                                <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                                  <a className="text-xxs lg:text-xs pl-4">
                                    Honden
                                  </a>
                                </div>
                              </li>
                            </Link>
                            <Link href="/">
                              <li
                                onMouseEnter={() => setShowDiensten(true)}
                                onMouseLeave={() => setShowDiensten(false)}
                                className="row-start-5 row-end-6 col-start-2 col-end-3 shadow-sm h-8 lg:h-10"
                              >
                                <div className="h-full pr-4 bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                                  <a className="text-xxs lg:text-xs pl-4">
                                    Fotobewerking
                                  </a>
                                </div>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
              <Link href="/portfolio">
                <li className="text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Portfolio</a>
                </li>
              </Link>
              <Link href="/fotoshoot-cadeaubon">
                <li className="text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Cadeaubon</a>
                </li>
              </Link>
              <Link href="/over-mij">
                <li className="text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Over mij</a>
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ScrollNavbar;
