import Image from "next/image";
import NavItem from "./navItem";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavItemXS from "./navItemXS";
import DropDownNavItemXS from "./dropDownNavItemXS";
import { useState } from "react";

function Header() {
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);

  return (
    <header className="flex flex-col h-screen">
      <div
        className={`${
          !mobileMenuExtended && "hidden"
        } sm:hidden absolute top-0 bg-brown bg-opacity-50 w-full z-20`}
      >
        <div className="flex w-full absolute justify-center mb-5 mt-4">
          <h1 className="font-display uppercase text-brown text-3xl">
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

      <div className="hidden sm:block">
        <Image
          src="/images/header/hero.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="sm:hidden">
        <Image
          src="/images/header/hero-mobile.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="sm:hidden self-end z-10 mt-5 mr-4 cursor-pointer">
        {!mobileMenuExtended && (
          <MenuIcon
            onClick={() => setMobileMenuExtended(true)}
            className="h-8 w-8 text-grey-darkest"
          />
        )}
      </div>

      {!mobileMenuExtended && (
        <div className="mt-10 z-50 font-display uppercase text-grey-charcoal mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl">Foto's van Emily</h1>
          <h2 className="text-center text-lg sm:hidden">
            FOTOGRAFIE &amp; FOTOBEWERKING
          </h2>
        </div>
      )}

      <nav>
        <ul className="hidden sm:flex flex-row container mx-auto justify-between mt-5 max-w-5xl items-start relative">
          <NavItem text={"Home"} link="/" />
          <NavItem text={"Diensten"} link="/" dropdown />
          <NavItem text={"Portfolio"} link="/portfolio" />
          <NavItem text={"Over mij"} link="/over-mij" />
          <NavItem text={"Contact"} link="/contact" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
