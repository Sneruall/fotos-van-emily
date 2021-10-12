import { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { Carousel } from "react-responsive-carousel";
import PortfolioLightboxImage from "../../portfolio/PortfolioLightboxImage";

function LightboxModal(props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-h-screen">
        <div className="relative mx-auto w-full h-screen">
          {/*content*/}
          <div className="relative flex flex-col h-full bg-black">
            {/*header*/}
            <div className="absolute top-0 right-0 z-50 px-2">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold"
                onClick={props.closeAction}
              >
                <span className="bg-transparent text-white w-6 text-5xl block">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="h-full">
              <Carousel
                className="flex flex-col h-full justify-center"
                selectedItem={props.id}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                showThumbs={false}
                emulateTouch={true}
              >
                <PortfolioLightboxImage id={0} />
                <PortfolioLightboxImage id={1} />
                <PortfolioLightboxImage id={2} />
                <PortfolioLightboxImage id={3} />
                <PortfolioLightboxImage id={4} />
                <PortfolioLightboxImage id={5} />
                <PortfolioLightboxImage id={6} />
                <PortfolioLightboxImage id={7} />
                <PortfolioLightboxImage id={8} />
                <PortfolioLightboxImage id={9} />
                <PortfolioLightboxImage id={10} />
                <PortfolioLightboxImage id={11} />
                <PortfolioLightboxImage id={12} />
                <PortfolioLightboxImage id={13} />
                <PortfolioLightboxImage id={14} />
                <PortfolioLightboxImage id={15} />
                <PortfolioLightboxImage id={16} />
                <PortfolioLightboxImage id={17} />
                <PortfolioLightboxImage id={18} />
                <PortfolioLightboxImage id={19} />
                <PortfolioLightboxImage id={20} />
                <PortfolioLightboxImage id={21} />
                <PortfolioLightboxImage id={22} />
                <PortfolioLightboxImage id={23} />
                <PortfolioLightboxImage id={24} />
                <PortfolioLightboxImage id={25} />
                <PortfolioLightboxImage id={26} />
                <PortfolioLightboxImage id={27} />
                <PortfolioLightboxImage id={28} />
                <PortfolioLightboxImage id={29} />
                <PortfolioLightboxImage id={30} />
                <PortfolioLightboxImage id={31} />
                <PortfolioLightboxImage id={32} />
                <PortfolioLightboxImage id={33} />
                <PortfolioLightboxImage id={34} />
                <PortfolioLightboxImage id={35} />
                <PortfolioLightboxImage id={36} />
                <PortfolioLightboxImage id={37} />
                <PortfolioLightboxImage id={38} />
                <PortfolioLightboxImage id={39} />
                <PortfolioLightboxImage id={40} />
                <PortfolioLightboxImage id={41} />
                <PortfolioLightboxImage id={42} />
                <PortfolioLightboxImage id={43} />
                <PortfolioLightboxImage id={44} />
                <PortfolioLightboxImage id={45} />
                <PortfolioLightboxImage id={46} />
                <PortfolioLightboxImage id={47} />
                <PortfolioLightboxImage id={48} />
                <PortfolioLightboxImage id={49} />
                <PortfolioLightboxImage id={50} />
                <PortfolioLightboxImage id={51} />
                <PortfolioLightboxImage id={52} />
                <PortfolioLightboxImage id={53} />
                <PortfolioLightboxImage id={54} />
                <PortfolioLightboxImage id={55} />
                <PortfolioLightboxImage id={56} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default LightboxModal;
