import { CheckIcon } from "@heroicons/react/solid";
import Button from "../../ui/button";
import parse from "html-react-parser";

function PricingPlan(props) {
  const featureList = props.features.map((feature, index) => {
    return (
      <li key={index} className="flex space-x-4 my-2">
        <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
        <p className="leading-snug">{parse(feature)}</p>
      </li>
    );
  });

  return (
    <div className="border border-white my-5 grid grid-cols-1 justify-items-stretch">
      <div className="bg-white m-1 px-4 py-2 bg-opacity-70 flex flex-col">
        <div className="my-7">
          <h4 className="text-center text-3xl uppercase text-brown-pale mb-1">
            {props.title}
          </h4>
          <div className="border-b-2 border-brown-pale max-w-xs mx-auto"></div>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="mb-5">{featureList}</div>
          <div className="ml-10 my-5">
            <div className="flex lg:justify-between lg:flex-row flex-col">
              <div>
                <p className="font-bold mb-2">{props.prijsText}</p>
                <p className="text-4xl">
                  <span className="text-xl">€ </span>
                  {props.price}
                </p>
              </div>
              <div className="my-10">
                <Button link="#contact" button="button-1" text="Boek nu" />
              </div>
            </div>
            <div className="mb-5">
              <p className="text-xs">Incl. BTW</p>
              {props.reiskosten && <p className="text-xs">Excl. reiskosten</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
