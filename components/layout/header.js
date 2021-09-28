import Image from "next/image";
import Navigation from "../../components/layout/navigation";

function Header(props) {
  return (
    <header className="relative">
      <div className="hidden sm:block py-32 -mt-14">
        <Image
          src={props.img}
          alt={"Hero image"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="sm:hidden max-h-screen -mt-14 pt-32 pb-64">
        <Image
          src={props.imgMobile}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {props.title && (
        <div className="mt-24 sm:mt-5 z-10 font-display uppercase text-charcoal mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-center">
            {props.title}
          </h1>
          {props.integratedNavigation && <Navigation />}
          <h2 className="text-center text-lg sm:hidden">{props.subtitle}</h2>
        </div>
      )}

      {props.title2 && (
        <div className="z-10 font-display uppercase text-white max-w-6xl w-full mx-auto">
          <h1 className="hidden sm:block mt-32 text-7xl md:text-8xl max-w-3xl">
            {props.title2}
          </h1>
          <h1 className="sm:hidden text-7xl mt-16 max-w-3xl m-2">
            {props.titleMobile2}
          </h1>
        </div>
      )}

      {props.pageTitle2 && (
        <div className="px-5 relative sm:pt-32 pb-28 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1
              className={`sm:hidden text-6xl md:text-8xl lg:text-9xl text-center sm:text-left leading-tight font-display uppercase py-4 ${
                props.whiteTitle ? "text-white" : "text-charcoal-2"
              }`}
            >
              {props.pageTitleMobile ? props.pageTitleMobile : props.pageTitle2}
            </h1>
            <h1
              className={`hidden sm:block text-6xl md:text-8xl lg:text-9xl text-center sm:text-left leading-tight font-display uppercase py-4 ${
                props.whiteTitle ? "text-white" : "text-charcoal-2"
              }`}
            >
              {props.pageTitle2}
            </h1>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
