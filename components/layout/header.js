import Image from "next/image";
import NavItem from './navItem';

function Header() {
  return (
    <header className="flex flex-col justify-between">
      <Image className="object-contain"
        src="/images/header/fotosvanemily-logo.png"
        width={800}
        height={140}
        alt="Foto's van Emily logo"
      />
      <nav className="flex flex-grow md:flex-row m-5 justify-evenly items-center">
        <NavItem />
        <NavItem />
      </nav>
    </header>
  );
}

export default Header;
