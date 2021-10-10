import Image from "next/image";
import { photos } from "../../data/photos";

function PortfolioImage(props) {
  return (
    <div className="hover:cursor-pointer" onClick={() => props.onClickAction(props.id)}>
      <Image
        src={photos[props.id]}
        alt="portfolio foto"
        width={600}
        height={400}
      />
    </div>
  );
}

export default PortfolioImage;
