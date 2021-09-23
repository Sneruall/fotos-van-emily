import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function testing() {
  return (
    <Carousel>
      <div>
        <img src="/images/portretfotografie/portret-3-p1.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/images/portretfotografie/portret-3-p1.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/images/portretfotografie/portret-3-p1.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default testing;
