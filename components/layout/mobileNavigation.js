import { Fragment } from "react";
import {
  MenuIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";

function mobileNavigation() {
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);
  const [navExtended, setNavExtended] = useState(false);

  return (
    <Fragment>
      {!mobileMenuExtended && (
        <div className="flex sticky top-0 z-50 justify-end">
          <div className="sm:hidden z-10 mt-5 mr-4 cursor-pointer">
            <MenuIcon
              onClick={() => setMobileMenuExtended(true)}
              className="h-8 w-8 text-black"
            />
          </div>
        </div>
      )}

      <div
        className={`${
          !mobileMenuExtended && "hidden"
        } sm:hidden inline-block sticky top-0 bg-white bg-opacity-90 w-full z-50`}
      >
        <div className="flex w-full absolute justify-center mb-5 mt-4">
          <h1 className="font-display uppercase text-brown-pale text-3xl">
            Foto's van Emily
          </h1>
        </div>

        <div className="flex justify-end mb-5 mt-5">
          <XIcon
            onClick={() => setMobileMenuExtended(false)}
            className="h-8 w-8 mr-4 cursor-pointer text-brown-pale my-auto z-50"
          />
        </div>
        <nav>
          <ul className="flex flex-col uppercase text-lg">
            <Link href="/">
              <li
                onClick={() => setMobileMenuExtended(false)}
                className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
              >
                <h2 className="ml-12">Home</h2>
              </li>
            </Link>
            <li
              onClick={() =>
                navExtended ? setNavExtended(false) : setNavExtended(true)
              }
              className="py-2 border-b border-opacity-25 cursor-pointer"
            >
              <div className="flex justify-between text-brown-pale">
                <div>
                  <h2 className="ml-12">Diensten</h2>
                </div>
                {navExtended ? (
                  <ChevronUpIcon
                    id="chevronup"
                    className="h-6 w-6 my-auto mr-5"
                  />
                ) : (
                  <ChevronDownIcon
                    id="chevrondown"
                    className="h-6 w-6 my-auto mr-5"
                  />
                )}
              </div>
            </li>
            <ul className={`${!navExtended && "hidden"}`}>
              <Link href="/portretfotografie">
                <li
                  onClick={() => {
                    setMobileMenuExtended(false);
                    setNavExtended(false);
                  }}
                  className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
                >
                  <h2 className="ml-20">Portret</h2>
                </li>
              </Link>
              <Link href="/loveshoot">
                <li
                  onClick={() => {
                    setMobileMenuExtended(false);
                    setNavExtended(false);
                  }}
                  className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
                >
                  <h2 className="ml-20">loveshoot</h2>
                </li>
              </Link>
              <Link href="/zwangerschapsfotografie">
                <li
                  onClick={() => {
                    setMobileMenuExtended(false);
                    setNavExtended(false);
                  }}
                  className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
                >
                  <h2 className="ml-20">zwangerschap</h2>
                </li>
              </Link>
              <Link href="/zwangerschapsfotografie">
                <li
                  onClick={() => {
                    setMobileMenuExtended(false);
                    setNavExtended(false);
                  }}
                  className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
                >
                  <h2 className="ml-20">honden</h2>
                </li>
              </Link>
              <Link href="/portretfotografie">
                <li
                  onClick={() => {
                    setMobileMenuExtended(false);
                    setNavExtended(false);
                  }}
                  className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
                >
                  <h2 className="ml-20">fotobewerking</h2>
                </li>
              </Link>
            </ul>
            <Link href="/portfolio">
              <li
                onClick={() => setMobileMenuExtended(false)}
                className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
              >
                <h2 className="ml-12">Portfolio</h2>
              </li>
            </Link>
            <Link href="/over-mij">
              <li
                onClick={() => setMobileMenuExtended(false)}
                className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
              >
                <h2 className="ml-12">over mij</h2>
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMobileMenuExtended(false)}
                className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale"
              >
                <h2 className="ml-12">contact</h2>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default mobileNavigation;
