import Image from "next/image";

function PortfolioImage(props) {
    return (
        <Image
        src={photos[props.id]}
        alt="portfolio foto"
        width={photos[props.id].width}
        height={photos[props.id].height}
        onClick={() => openLightbox(0)}
      />
    )
}

export default PortfolioImage
