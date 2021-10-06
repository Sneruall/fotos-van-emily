import { Fragment } from "react";
import Image from "next/image";

function testing() {
  // const divStyle = {
  //   gridTemplateRows: "masonry",
  // };

  return (
    <Fragment>

      <div className="grid grid-cols-3 space-x-1 mr-1">
        <div className="ml-1">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
        <div className="">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
        <div className="row-span-3">
          <Image
            src="/images/portfolio/1.jpg"
            alt="portfolio foto"
            width={800}
            height={1200}
          />
        </div>
        <div className="row-span-3">
          <Image
            src="/images/portfolio/1.jpg"
            alt="portfolio foto"
            width={800}
            height={1200}
          />
        </div>
        <div className="">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
        <div className="row-span-3">
          <Image
            src="/images/portfolio/1.jpg"
            alt="portfolio foto"
            width={800}
            height={1200}
          />
        </div>
        <div className="">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
        <div className="">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
        <div className="">
          <Image
            src="/images/portfolio/6.jpg"
            alt="portfolio foto"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default testing;
