import Image from "next/image";
import NavItem from "./navItem";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavItemXS from "./navItemXS";
import DropDownNavItemXS from "./dropDownNavItemXS";

function Header() {
  return (
    <header className="flex flex-col h-screen">
      <div className="sm:hidden absolute top-0 bg-brown bg-opacity-50 w-full z-20">
      
      <div className="flex w-full absolute justify-center mb-5 mt-4">
      <h1 className="font-display uppercase text-brown text-3xl">Foto's van Emily</h1>
        </div>

        <div className="flex justify-end mb-5 mt-5">
          <XIcon className="h-8 w-8 mr-4 cursor-pointer text-white my-auto z-50" />
        </div>
        <nav>
          <ul className="flex flex-col text-white uppercase text-2xl font-display">
            <NavItemXS text='home' link='/' />
            <DropDownNavItemXS text='diensten' />
            <NavItemXS text='portfolio' link='/portfolio'/>
            <NavItemXS text='over mij' link='/over-mij'/>
            <NavItemXS text='contact' link='/contact'/>
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
        <MenuIcon className="h-8 w-8 text-grey-darkest" />
      </div>

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
