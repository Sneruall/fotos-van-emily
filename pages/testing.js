import { Fragment, useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

function testing() {
  const [section1Height, setSection1Height] = useState(0);
  const section1Ref = useRef(null);
  const [section2Height, setSection2Height] = useState(0);
  const section2Ref = useRef(null);
  const [section3Height, setSection3Height] = useState(0);
  const section3Ref = useRef(null);

  useEffect(() => {
    setSection1Height(section1Ref.current.clientHeight);
    setSection2Height(section2Ref.current.clientHeight);
    setSection3Height(section3Ref.current.clientHeight);
    console.log(
      section1Ref.current.clientHeight + "",
        section2Ref.current.clientHeight +"",
        section3Ref.current.clientHeight
    );
  }, []); //empty dependency array so it only runs once at render

  useEffect(() => {
    const handleResize = () => {
      setSection1Height(section1Ref.current.clientHeight);
      setSection2Height(section2Ref.current.clientHeight);
      setSection3Height(section3Ref.current.clientHeight);
      console.log(
        section1Ref.current.clientHeight + "",
          section2Ref.current.clientHeight +"",
          section3Ref.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <Controller>
        <div className="bg-blue-900">
          <div id="page" className="transition duration-500 ease-in-out">
            <div className="h-screen bg-blue-900">
              <h1 className="text-10xl">Dit is een titel 1</h1>
            </div>
            <Scene
              triggerElement="#section1"
              classToggle={["#page", "bg-red-900"]}
              indicators
              duration={section1Height}
            >
              <div>
                <div id="section1" ref={section1Ref}>
                  <h1 className="text-10xl text-black">Dit is een titel 2a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 2a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 2a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 2a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 2b</h1>
                </div>
              </div>
            </Scene>
            <Scene
              triggerElement="#section2"
              classToggle={["#page", "bg-red-100"]}
              indicators
              duration={section2Height}
            >
              <div>
                <div id="section2" ref={section2Ref}>
                  <h1 className="text-10xl text-black">Dit is een titel 3a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 3b</h1>
                </div>
              </div>
            </Scene>
            <Scene
              triggerElement="#section3"
              classToggle={["#page", "bg-blue-100"]}
              indicators
              duration={section3Height}
            >
              <div>
                <div id="section3" ref={section3Ref}>
                  <h1 className="text-10xl text-black">Dit is een titel 4a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4a</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4b</h1>
                  <h1 className="text-10xl text-black">Dit is een titel 4b</h1>
                </div>
              </div>
            </Scene>
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}

export default testing;
