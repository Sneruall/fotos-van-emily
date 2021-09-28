import Image from "next/image";
import Navigation from "../../components/layout/navigation";

function Header(props) {
  return (
    <header className="flex flex-col h-screen -mt-14 sm:mt-0">
      <div className="hidden sm:block">
        <Image
          src={props.img}
          alt={"Hero image"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="sm:hidden absolute max-h-screen">
        <Image
          src={props.imgMobile}
          alt="Hero image"
          width={640}
          height={1159}
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

      {props.pageTitle && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 max-w-6xl w-full">
          <h1 className="max-w-5xl sm:hidden text-7xl leading-tight text-white font-display uppercase mx-2">
            {props.pageTitleMobile ? props.pageTitleMobile : props.pageTitle}
          </h1>
          <h1 className="max-w-5xl hidden sm:block md:text-8xl lg:text-9xl xl:text-10xl leading-tight text-white font-display uppercase mx-2">
            {props.pageTitle}
          </h1>
        </div>
      )}

      {props.pageTitle2 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-96 sm:bottom-40 sm:text-left mx-auto text-center max-w-6xl w-full">
          <h1 className="max-w-5xl sm:hidden text-6xl leading-tight text-charcoal-2 font-display uppercase mx-2">
            {props.pageTitleMobile ? props.pageTitleMobile : props.pageTitle2}
          </h1>
          <h1 className="max-w-3xl hidden sm:block md:text-8xl lg:text-9xl leading-tight text-charcoal-2 font-display uppercase mx-2">
            {props.pageTitle2}
          </h1>
        </div>
      )}
    </header>
  );
}

export default Header;
