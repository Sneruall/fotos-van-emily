import Image from "next/image";
import { photos } from "../../data/photos";


function PortfolioImagePortrait(props) {
  return (
    <div className="hover:cursor-pointer row-span-3" onClick={() => props.onClickAction(props.id)}>
      <Image
        src={photos[props.id]}
        alt="portfolio foto"
        width={800}
        height={1200}
      />
    </div>
  );
}

export default PortfolioImagePortrait;
