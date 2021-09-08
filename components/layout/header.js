import Image from "next/image";


function Header(props) {
  return (
    <header className="flex flex-col h-screen">
      <div className="hidden sm:block">
        <Image
          src={props.img}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="sm:hidden">
        <Image
          src={props.imgMobile}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {props.title && 
      <div className="mt-20 z-10 font-display uppercase text-charcoal mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl">{props.title}</h1>
        <h2 className="text-center text-lg sm:hidden">
          {props.subtitle}
        </h2>
      </div>}

    </header>
  );
}

export default Header;
