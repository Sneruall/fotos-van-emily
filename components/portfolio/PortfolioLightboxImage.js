import Image from "next/image";
import { photos } from "../../data/photos";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#262626" offset="20%" />
      <stop stop-color="#393939" offset="50%" />
      <stop stop-color="#262626" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#262626" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

function PortfolioLightboxImage(props) {
  return (
    <div className="h-screen80">
      <Image
        src={photos[props.id]}
        alt="Portfolio foto"
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`}
      />
    </div>
  );
}

export default PortfolioLightboxImage;
