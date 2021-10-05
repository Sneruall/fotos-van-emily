import { Fragment } from "react";

function testing() {
  // const divStyle = {
  //   gridTemplateRows: "masonry",
  // };

  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-red-500 h-56"></div>
        <div className="bg-blue-500 h-96"></div>
        <div className="bg-green-500 h-56"></div>
        <div className="bg-yellow-500 h-56"></div>
      </div>
    </Fragment>
  );
}

export default testing;
