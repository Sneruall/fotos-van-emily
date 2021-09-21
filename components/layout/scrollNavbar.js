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
        } hidden fixed bg-white w-full z-50 top-0 shadow-sm`}
      >
        <div className="px-2 flex max-w-6xl mx-auto uppercase text-brown-pale justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl my-2 font-display">
              Foto's van Emily
            </h2>
          </div>
          <div className="flex items-stretch">
            <ul className="grid grid-cols-5 justify-items-center pt-4 hover:cursor-pointer">
              <Link href="/">
                <li className="w-32 text-center hover:underline">
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/">
                <li
                  onMouseEnter={() => setShowDiensten(true)}
                  onMouseLeave={() => setShowDiensten(false)}
                  className="w-32 text-center hover:underline"
                >
                  <a className="">Diensten</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-32 text-center hover:underline">
                  <a>Portfolio</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-32 text-center hover:underline">
                  <a>Over mij</a>
                </li>
              </Link>
              <Link href="/">
                <li className="w-32 text-center hover:underline">
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {showDiensten && (
        <div className="fixed w-full z-40 top-14">
          <div className="w-full">
            <div className="px-2 flex max-w-6xl mx-auto uppercase text-brown-pale justify-end h-full">
              <ul className="grid grid-cols-5 grid-rows-3 justify-items-center">
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-1 row-end-2 col-start-2 col-end-3 w-32 text-center shadow-sm h-10"
                  >
                    <div className="h-full bg-white pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xs">Portret</a>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onMouseEnter={() => setShowDiensten(true)}
                    onMouseLeave={() => setShowDiensten(false)}
                    className="row-start-2 row-end-3 col-start-2 col-end-3 w-32 text-center shadow-sm"
                  >
                    <div className="h-full bg-white pt-2 shadow-sm hover:underline hover:cursor-pointer">
                      <a className="text-xs">Zwangerschap</a>
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
