import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import DroppedDownNavItemXS from "./droppedDownNavItemXS";

function dropDownNavItemXS(props) {
  const [navExtended, setNavExtended] = useState(false);

  return (
    <Fragment>
      <li
        onClick={() => navExtended ? setNavExtended(false) : setNavExtended(true)}
        className="py-2 border-b border-opacity-25 cursor-pointer"
      >
        <div className="flex justify-between text-brown-pale">
          <div>
            <h2 className="ml-12">{props.text}</h2>
          </div>
          {navExtended ? (
            <ChevronUpIcon id="chevronup" className="h-6 w-6 my-auto mr-5" />
          ) : (
            <ChevronDownIcon
              id="chevrondown"
              className="h-6 w-6 my-auto mr-5"
            />
          )}
        </div>
      </li>
      <ul className={`${!navExtended && 'hidden'}`}>
        <DroppedDownNavItemXS onClick={() => navExtended ? setNavExtended(false) : setNavExtended(true)} text="portret" link="/portretfotografie" />
        <DroppedDownNavItemXS text="loveshoot" link="/" />
        <DroppedDownNavItemXS text="zwangerschap" link="/" />
        <DroppedDownNavItemXS text="honden" link="/" />
        <DroppedDownNavItemXS text="fotobewerking" link="/" />
      </ul>
    </Fragment>
  );
}

export default dropDownNavItemXS;
