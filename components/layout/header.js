import Image from "next/image";
import Navigation from "../../components/layout/navigation";

function Header(props) {
  return (
    <header className="flex h-screen">
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

      {props.title && (
        <div className="mt-5 z-10 font-display uppercase text-charcoal mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-center">{props.title}</h1>
            {props.integratedNavigation && <Navigation />}
          <h2 className="text-center text-lg sm:hidden">{props.subtitle}</h2>
        </div>
      )}

      {props.pageTitle && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 max-w-6xl w-full">
          <h1 className="max-w-5xl text-7xl sm:text-10xl leading-tight text-white font-display uppercase mx-2">
            portret fotografie
          </h1>
        </div>
      )}
    </header>
  );
}

export default Header;
