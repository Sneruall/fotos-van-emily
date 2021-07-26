import { Fragment } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavItemXS from "./navItemXS";
import DropDownNavItemXS from "./dropDownNavItemXS";
import { useState } from "react";

function mobileNavigation() {
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-end">
        <div className="sm:hidden z-10 mt-5 mr-4 cursor-pointer">
          {!mobileMenuExtended && (
            <MenuIcon
              onClick={() => setMobileMenuExtended(true)}
              className="h-8 w-8 text-black"
            />
          )}
        </div>
      </div>

      <div
        className={`${
          !mobileMenuExtended && "hidden"
        } sm:hidden absolute top-0 bg-sandstone w-full z-50`}
      >
        <div className="flex w-full absolute justify-center mb-5 mt-4">
          <h1 className="font-display uppercase text-brown-pale text-3xl">
            Foto's van Emily
          </h1>
        </div>

        <div className="flex justify-end mb-5 mt-5">
          <XIcon
            onClick={() => setMobileMenuExtended(false)}
            className="h-8 w-8 mr-4 cursor-pointer text-white my-auto z-50"
          />
        </div>
        <nav>
          <ul className="flex flex-col text-white uppercase text-2xl font-display">
            <NavItemXS text="home" link="/" />
            <DropDownNavItemXS text="diensten" />
            <NavItemXS text="portfolio" link="/portfolio" />
            <NavItemXS text="over mij" link="/over-mij" />
            <NavItemXS text="contact" link="/contact" />
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default mobileNavigation;
