import Image from "next/image";


function Header() {
  return (
    <header className="flex flex-col h-screen">
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

      <div className="mt-10 z-10 font-display uppercase text-charcoal mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl">Foto's van Emily</h1>
        <h2 className="text-center text-lg sm:hidden">
          FOTOGRAFIE &amp; FOTOBEWERKING
        </h2>
      </div>
    </header>
  );
}

export default Header;
