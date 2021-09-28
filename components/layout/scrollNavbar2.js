import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

function scrollNavbar2(props) {
  const [scrollNav2, setScrollNav2] = useState(true);
  const [showDiensten2, setShowDiensten2] = useState(false);

  useEffect(() => {
    props.fade && window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 140 && scrollNav2===true) {
        setScrollNav2(false);
        console.log("set scrollnav2 false")
    } else {
      setScrollNav2(true);
    }
  };

  return (
    <Fragment>
      <div
        className={`${
          !scrollNav2 && props.fade ? "hidden" : "sm:block"
        } fixed w-full z-40 top-0`}
      >
        <div className="px-2 flex max-w-6xl mx-auto uppercase text-charcoal-2 justify-between">
          <div className="flex flex-col justify-items-center my-1">
            <h2 className="my-2 text-4xl lg:text-3xl xl:text-4xl font-display">
              Foto's van Emily
            </h2>
          </div>
          <div className="lg:flex sm:text-xs md:text-sm lg:text-base hidden">
            <ul className="grid grid-cols-6 justify-items-center hover:cursor-pointer items-stretch">
              <Link href="/">
                <li className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Home</a>
                </li>
              </Link>
              <Link href="/#diensten">
                <li
                  onMouseEnter={() => setShowDiensten2(true)}
                  onMouseLeave={() => setShowDiensten2(false)}
                  className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center"
                >
                  <a className="my-auto">Diensten</a>
                </li>
              </Link>
              <Link href="/portfolio">
                <li className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Portfolio</a>
                </li>
              </Link>
              <Link href="/portfolio">
                <li className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Cadeaubon</a>
                </li>
              </Link>
              <Link href="/over-mij">
                <li className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Over mij</a>
                </li>
              </Link>
              <Link href="/contact">
                <li className="w-24 lg:w-32 text-center hover:underline flex flex-col justify-items-center">
                  <a className="my-auto">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {showDiensten2 && (
        <div className="fixed w-full z-40 top-8 md:top-10 lg:top-12">
          <div className="w-full">
            <div className="px-2 flex max-w-6xl mx-auto uppercase text-brown-pale justify-end h-full">
              <ul className="grid grid-cols-6 grid-rows-5 justify-items-center">
                <Link href="/portretfotografie">
                  <li
                    onMouseEnter={() => setShowDiensten2(true)}
                    onMouseLeave={() => setShowDiensten2(false)}
                    className="row-start-1 row-end-2 col-start-2 col-end-3 w-24 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Portret</a>
                    </div>
                  </li>
                </Link>
                <Link href="/loveshoot">
                  <li
                    onMouseEnter={() => setShowDiensten2(true)}
                    onMouseLeave={() => setShowDiensten2(false)}
                    className="row-start-2 row-end-3 col-start-2 col-end-3 w-24 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Loveshoot</a>
                    </div>
                  </li>
                </Link>
                <Link href="/zwangerschapsfotografie">
                  <li
                    onMouseEnter={() => setShowDiensten2(true)}
                    onMouseLeave={() => setShowDiensten2(false)}
                    className="row-start-3 row-end-4 col-start-2 col-end-3 w-24 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Zwangerschap</a>
                    </div>
                  </li>
                </Link>
                <Link href="/hondenfotografie">
                  <li
                    onMouseEnter={() => setShowDiensten2(true)}
                    onMouseLeave={() => setShowDiensten2(false)}
                    className="row-start-4 row-end-5 col-start-2 col-end-3 w-24 lg:w-32 text-center shadow-sm h-8 lg:h-10"
                  >
                    <div className="h-full bg-white bg-opacity-90 pt-1 lg:pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xxs lg:text-xs">Honden</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten2(true)}
                    onMouseLeave={() => setShowDiensten2(false)}
                    className="row-start-5 row-end-6 col-start-2 col-end-3 w-24 lg:w-32 text-center shadow-sm h-8 lg:h-10"
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

export default scrollNavbar2;
