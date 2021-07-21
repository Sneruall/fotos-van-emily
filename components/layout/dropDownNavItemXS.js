import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";
import DroppedDownNavItemXS from "./droppedDownNavItemXS";



function toggleDropdown(e) {
  // Als het sub menu niet is uitgeklapt:
  if (document.getElementById("diensten").classList.contains("hidden")){
    document.getElementById("diensten").classList.toggle("hidden");
    document.getElementById("chevrondown").classList.toggle("hidden");
    document.getElementById("chevronup").classList.toggle("hidden");
  }  // Als het sub menu wel is uitgeklapt:
  else if (!document.getElementById("diensten").classList.contains("hidden")){
    document.getElementById("diensten").classList.toggle("hidden");
    document.getElementById("chevrondown").classList.toggle("hidden");
    document.getElementById("chevronup").classList.toggle("hidden");
  }
}

function dropDownNavItemXS(props) {

  return (
    <Fragment>
        <li onClick={toggleDropdown} className="py-2 border-b border-opacity-25 cursor-pointer">
          <div className="flex justify-between">
            <div>
              <h2 className="ml-12">{props.text}</h2>
            </div>
            <ChevronDownIcon id="chevrondown"
              className="h-6 w-6 my-auto mr-4"
            />
            <ChevronUpIcon id="chevronup" className="hidden h-6 w-6 my-auto mr-4" />
          </div>
        </li>
      <ul id="diensten" className="hidden">
        <DroppedDownNavItemXS text="portret" link="/" />
        <DroppedDownNavItemXS text="portret" link="/" />
        <DroppedDownNavItemXS text="portret" link="/" />
      </ul>
    </Fragment>
  );
}

export default dropDownNavItemXS;
