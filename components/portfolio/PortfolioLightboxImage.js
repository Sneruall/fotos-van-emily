import Image from "next/image";
import { photos } from "../../data/photos";

function PortfolioLightboxImage(props) {
  return (
    <div className="h-screen80">
      <Image
        src={photos[props.id]}
        alt="Portfolio foto"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

export default PortfolioLightboxImage;
