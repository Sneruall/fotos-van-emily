import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import DroppedDownNavItemXS from "./droppedDownNavItemXS";

function dropDownNavItemXS(props) {
  const [navExtended, setNavExtended] = useState(false);
  let dienstenDropdown = null;

  useEffect(() => {
    if (!dienstenDropdown) {
      dienstenDropdown = document.getElementById("diensten");
    }

    if (navExtended) {
      dienstenDropdown.classList.remove("hidden");
    } else if (!dienstenDropdown.classList.contains("hidden")) {
      dienstenDropdown.classList.add("hidden");
    }
  }, [navExtended]);

  function toggleDropdown() {
    if (!navExtended) {
      setNavExtended(true);
    } else {
      setNavExtended(false);
    }
  }

  return (
    <Fragment>
      <li
        onClick={toggleDropdown}
        className="py-2 border-b border-opacity-25 cursor-pointer"
      >
        <div className="flex justify-between">
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
      <ul id="diensten" className="hidden">
        <DroppedDownNavItemXS text="portret" link="/" />
        <DroppedDownNavItemXS text="loveshoot" link="/" />
        <DroppedDownNavItemXS text="zwangerschap" link="/" />
        <DroppedDownNavItemXS text="honden" link="/" />
        <DroppedDownNavItemXS text="fotobewerking" link="/" />
      </ul>
    </Fragment>
  );
}

export default dropDownNavItemXS;
