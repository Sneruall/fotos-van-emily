import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";
import DroppedDownNavItemXS from "./droppedDownNavItemXS";

function toggleDropdown() {
  document.getElementById("diensten").classList.replace("hidden", "visible");
}

function dropDownNavItemXS(props) {
  return (
    <Fragment>
      <Link href="/">
        <li className="py-2 border-b border-opacity-25 cursor-pointer">
          <div className="flex justify-between">
            <div>
              <h2 className="ml-12">{props.text}</h2>
            </div>
            <ChevronDownIcon
              onClick={toggleDropdown}
              className="h-6 w-6 my-auto mr-4"
            />
            <ChevronUpIcon className="hidden h-6 w-6 my-auto mr-4" />
          </div>
        </li>
      </Link>
      <ul id="diensten" className="hidden">
        <DroppedDownNavItemXS text="portret" link="/" />
        <DroppedDownNavItemXS text="portret" link="/" />
        <DroppedDownNavItemXS text="portret" link="/" />
      </ul>
    </Fragment>
  );
}

export default dropDownNavItemXS;
