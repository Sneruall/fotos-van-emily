import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from "next/image";

function PagePortfolioElement(props) {
  return (
    <div className="p-2 md:p-0">
      <div className="lg:hidden flex justify-center">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showArrows={false}
          showThumbs={false}
          interval={5000}
          width={318}
        >
          <div className="py-10 px-7">
            <Image
              src={props.images[1]}
              alt="Portretfoto"
              width="318"
              height="477"
            />
          </div>
          <div className="py-10 px-7">
            <Image
              src={props.images[0]}
              alt="Portretfoto"
              width="318"
              height="477"
            />
          </div>
          <div className="py-10 px-7">
            <Image
              src={props.images[2]}
              alt="Portretfoto"
              width="318"
              height="477"
            />
          </div>
        </Carousel>
      </div>

      <div className="hidden my-10 lg:grid grid-cols-3 gap-x-4">
        <Image
          src={props.images[0]}
          alt="Portretfoto"
          width="318"
          height="477"
          layout="responsive"
        />
        <Image
          src={props.images[1]}
          alt="Portretfoto"
          width="318"
          height="477"
          layout="responsive"
        />
        <Image
          src={props.images[2]}
          alt="Portretfoto"
          width="318"
          height="477"
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default PagePortfolioElement;
