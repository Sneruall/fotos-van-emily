import Image from "next/image";
import { photos } from "../../data/photos";


const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#DEDEDE" offset="20%" />
      <stop stop-color="#E6E6E6" offset="50%" />
      <stop stop-color="#DEDEDE" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#DEDEDE" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

function PortfolioImagePortrait(props) {
  return (
    <div
      className="hover:cursor-pointer row-span-3"
      onClick={() => props.onClickAction(props.id)}
    >
      <Image
        src={photos[props.id]}
        alt="portfolio foto"
        width={600}
        height={900}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 900))}`}
      />
    </div>
  );
}

export default PortfolioImagePortrait;
