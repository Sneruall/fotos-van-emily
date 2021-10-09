import Image from "next/image";
import { photos } from "../../data/photos";

function PortfolioImage(props) {
  return (
    <div className="hover:cursor-pointer" onClick={() => props.onClickAction(props.id)}>
      <Image
        src={photos[props.id]}
        alt="portfolio foto"
        width={1200}
        height={800}
      />
    </div>
  );
}

export default PortfolioImage;
