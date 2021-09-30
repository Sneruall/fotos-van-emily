import { Fragment } from "react";
import { Controller, Scene } from "react-scrollmagic";

function testing() {
  return (
    <Fragment>
      <Controller>
        <div className="h-screen bg-blue-900">
          <h1 className="text-10xl">Dit is een titel</h1>
        </div>
        <Scene triggerElement="#spotlight" classToggle={("#spotlight", "bg-red-900")} indicators>
          <div id="spotlight" className="h-screen bg-blue-900 transition duration-500 ease-in-out">
            <h1 className="text-10xl text-black">Dit is een titel</h1>
          </div>
        </Scene>
        <Scene classToggle="bg-indigo-500">
          <div className="h-screen bg-red-900 transition duration-500 ease-in-out">
            <h1 className="text-10xl">Dit is een titel</h1>
          </div>
        </Scene>
        <div className="h-screen bg-red-900">
          <h1 className="text-10xl">Dit is een titel</h1>
        </div>
      </Controller>
    </Fragment>
  );
}

export default testing;
