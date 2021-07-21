import Image from "next/image";
import NavItem from "./navItem";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavItemXS from "./navItemXS";
import DropDownNavItemXS from "./dropDownNavItemXS";
import { useEffect, useState } from "react";

function Header() {
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);
  let mobileMenu = null;

  useEffect(() => {
    if (!mobileMenu) {
      mobileMenu = document.getElementById("mobilemenu");
    }

    if (mobileMenuExtended) {
      mobileMenu.classList.remove("hidden");
    } else if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  }, [mobileMenuExtended]);

  function toggleMobileMenu() {
    if (!mobileMenuExtended) {
      setMobileMenuExtended(true);
    } else {
      setMobileMenuExtended(false);
    }
  }

  return (
    <header className="flex flex-col h-screen">
      <div
        id="mobilemenu"
        className="hidden sm:hidden absolute top-0 bg-brown bg-opacity-50 w-full z-20"
      >
        <div className="flex w-full absolute justify-center mb-5 mt-4">
          <h1 className="font-display uppercase text-brown text-3xl">
            Foto's van Emily
          </h1>
        </div>

        <div className="flex justify-end mb-5 mt-5">
          <XIcon
            onClick={toggleMobileMenu}
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

      <Image
        src="/images/header/hero.png"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="sm:hidden self-end z-10 mt-5 mr-4 cursor-pointer">
        {!mobileMenuExtended && (
          <MenuIcon
            onClick={toggleMobileMenu}
            className="h-8 w-8 text-grey-darkest"
          />
        )}
      </div>

      {!mobileMenuExtended && (
        <div className="mx-10 mt-2 sm:mt-10 md:mx-auto">
          <Image
            className="object-contain"
            src="/images/header/fotosvanemily-logo.png"
            width={800}
            height={140}
            alt="Foto's van Emily logo"
            priority
          />
        </div>
      )}

      <nav>
        <ul className="hidden sm:flex flex-row container mx-auto m-5 justify-evenly max-w-3xl items-center relative">
          <NavItem text={"Home"} />
          <NavItem text={"Diensten"} />
          <NavItem text={"Portfolio"} />
          <NavItem text={"Over mij"} />
          <NavItem text={"Contact"} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
