import { CheckIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import Button from "../../ui/button";

function PricingPlan(props) {
  return (
    <div className="border border-white my-5 grid grid-cols-1 justify-items-stretch">
      <div className="bg-white m-1 px-4 py-2 bg-opacity-70">
        <div className="my-7">
          <h4 className="text-center text-3xl uppercase text-brown-pale mb-1">
            {props.title}
          </h4>
          <div className="border-b-2 border-brown-pale max-w-xs mx-auto"></div>
        </div>
          <div className="mb-8">
            <div className="flex space-x-4 my-2">
              <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
              <p className="leading-snug">
                <span className="font-bold">{props.duur}</span> fotografie op
                locatie
              </p>
            </div>
            <div className="flex space-x-4 my-2">
              <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
              <p className="leading-snug">
                <span className="font-bold">{props.fotos}</span> digitale foto’s
                in hoge kwaliteit
              </p>
            </div>
            <div className="flex space-x-4 my-2">
              <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
              <p className="leading-snug">
                <span className="font-bold">Zorgvuldige nabewerking</span> (alle
                foto’s worden ook in zwart-wit geleverd)
              </p>
            </div>
            <div className="flex space-x-4 my-2">
              <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
              <p className="leading-snug">
                Binnen <span className="font-bold">{props.oplevering}</span>{" "}
                worden alle foto’s via WeTransfer geleverd
              </p>
            </div>
            {props.MetGallerij ? (
              <div className="flex space-x-4 my-2">
                <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                <p className="leading-snug">
                  Online gallerij voor het bekijken en delen van de foto’s
                </p>
              </div>
            ) : (
              <Fragment>
                <div className="lg:h-16 xl:h-10"></div>
                <div className="lg:h-2"></div>
              </Fragment>
            )}
          </div>
          <div className="ml-10">
            <div className="flex lg:justify-between lg:flex-row flex-col">
              <div>
                <p className="font-bold text-xl mb-2">Vanaf:</p>
                <p className="text-4xl">
                  <span className="text-xl">€ </span>
                  {props.prijs}
                </p>
              </div>
              <div className="my-10">
                <Button link="/" button="button-1" text="Boek nu" />
              </div>
            </div>

            <div className="mb-5">
              <p className="text-xs">Incl. BTW</p>
              <p className="text-xs">Excl. reiskosten</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
