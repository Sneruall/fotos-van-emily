import Image from "next/image";
import NavItem from "./navItem";

function Header() {
  return (
    <header className="flex flex-col my-10 h-screen">
      <Image
        src="/images/header/hero.png"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Image
        className="object-contain"
        src="/images/header/fotosvanemily-logo.png"
        width={800}
        height={140}
        alt="Foto's van Emily logo"
        priority
      />
      <nav>
        <ul className="flex flex-col md:flex-row container mx-auto m-5 justify-evenly max-w-3xl items-center relative">
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
