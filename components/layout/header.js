import Image from "next/image";
import NavItem from "./navItem";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col h-screen">
      <Image
        src="/images/header/hero.png"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="sm:hidden self-end z-50 mt-2 mr-2">
          <MenuIcon className="h-10 w-10 text-grey-darkest" />
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
