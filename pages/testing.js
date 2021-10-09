import { Fragment } from "react";
import Image from "next/image";

function testing() {
  // const divStyle = {
  //   gridTemplateRows: "masonry",
  // };

  return (
    <Fragment>

      <div className="grid grid-cols-3 space-x-2 mr-2">
        <div className="ml-2">
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
