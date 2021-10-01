import { Fragment } from "react";
import { Controller, Scene } from "react-scrollmagic";

function testing() {
  return (
    <Fragment>
      <Controller>
        <div
          id="page"
          className="bg-blue-900 transition duration-500 ease-in-out"
        >
          <div className="h-screen bg-blue-900">
            <h1 className="text-10xl">Dit is een titel 1</h1>
          </div>
          <Scene
            triggerElement="#spotlight"
            classToggle={["#page", "bg-red-900"]}
            indicators
          >
            <div>
              <div id="spotlight" className="">
                <div className="h-screen">
                  <h1 className="text-10xl text-black">Dit is een titel 2a</h1>
                </div>
                <div className="h-screen">
                  <h1 className="text-10xl text-black">Dit is een titel 2b</h1>
                </div>
              </div>
            </div>
          </Scene>
          <Scene indicators classToggle={["#page", "bg-red-300"]}>
            <div className="h-screen ">
              <h1 className="text-10xl">Dit is een titel 3</h1>
            </div>
          </Scene>
          <div className="h-screen bg-red-900">
            <h1 className="text-10xl">Dit is een titel 4</h1>
          </div>
        </div>
      </Controller>
    </Fragment>
  );
}

export default testing;
