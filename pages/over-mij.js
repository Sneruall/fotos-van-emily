import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Image from "next/image";

function overmij() {
  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <div className=" min-h-screen">
        <div className="border-white border max-w-6xl mx-auto relative z-10">
          <div className="bg-white bg-opacity-70 p-10 m-1 mt-40">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="">
                <Image
                  src="/images/overmij/Emilyvanroomen.png"
                  alt="bloemen achtergrond"
                  width={458}
                  height={744}
                  priority
                />
              </div>
              <div className="max-w-md lg:max-w-lg xl:max-w-2xl">
                <div className="border-b-2 border-brown-pale2 inline-block pr-10 mb-5">
                  <h1 className="title-2 text-left mb-2">OVER MIJ</h1>
                </div>
                <p>
                  Sinds mijn 16e ben ik al geïnteresseerd in het maken van
                  foto’s (ik ben nu 24). Op de middelbare school volgde ik
                  kunstvakken waaronder fotografie. Daar kwam ik voor het eerst
                  in aanraking met een spiegelreflex camera. Ik kan me
                  herinneren dat ik veel op de grond heb gelegen om foto’s te
                  maken van onze honden, iets wat ik nu nog steeds doe! Na de
                  middelbare school studeerde ik Biologie en Bos- en
                  Natuurbeheer. Ondertussen verdiepte ik mijn kennis in
                  fotografie en werd ik bekend met professionele camera’s en
                  apparatuur. Na mijn studie wist ik niet zo goed wat ik wilde,
                  ik wilde eigenlijk niet door met een master dus dat deed ik
                  ook niet. Ik ben gaan ondernemen en reizen, en in die tijd
                  realiseerde ik me dat ik fotograaf wilde worden!
                </p>
                <p className="mt-5">
                  Ik heb via een eigen weg mijn stijl en vaardigheden
                  ontwikkeld. Het is ongelofelijk hoeveel je kunt leren via het
                  internet, voor mij was dit de manier om te groeien tot de
                  fotograaf die ik nu ben. Ik hou van natuurlijke foto’s, zowel
                  de manier hoe ik iemand op de foto zet als het daadwerkelijk
                  fotograferen in de natuur. Lichte foto’s met een mooie balans
                  aan kleuren. Niet te geposeerd of gemaakt, gewoon hoe het is.
                  Met veel detail zoek ik naar de mooiste plekjes en hoeken om
                  het onderwerp eruit te laten springen, en met veel plezier en
                  zorg bewerk ik al mijn foto’s na tot een kunstwerkje!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/overmij/bg.png"
          alt="bloemen achtergrond"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </Fragment>
  );
}

export default overmij;
