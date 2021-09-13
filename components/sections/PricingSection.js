import Section from "../layout/Section";
import Button from "../ui/button";
import { CheckIcon } from "@heroicons/react/solid";

function PricingSection() {
  return (
    <Section bg="bg-grey-light">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-charcoal font-display text-5xl lg:text-6xl text-center uppercase mb-5">
          WAT KRIJG JE ALS JE EEN PORTRET LAAT MAKEN DOOR MIJ?
        </h2>
        {/* Pricing cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card todo: component with props */}
          <div className="border border-white my-5">
            <div className="bg-white m-1 px-4 py-2 bg-opacity-70">
              <div className="border-b-2 border-brown-pale my-7 mx-10 lg:mx-auto">
                <h4 className="text-center text-3xl uppercase text-brown-pale mb-1">
                  Pakket A
                </h4>
              </div>
              <div className="mb-8">
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">~30 min</span> fotografie op
                    locatie
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
              </div>
              <div className="ml-10 lg:ml-0">
                <div className="flex lg:justify-between lg:flex-row flex-col">
                  <div>
                    <p className="font-bold text-xl mb-2">Vanaf:</p>
                    <p className="text-4xl">
                      <span className="text-xl">€ </span>80
                    </p>
                  </div>
                  <div className="my-10">
                    <Button link="/" button="button-1-xs" text="Boek nu" />
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs">Incl. BTW</p>
                  <p className="text-xs">Excl. reiskosten</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card todo: component with props */}
          <div className="border border-white my-5">
            <div className="bg-white m-1 px-4 py-2 bg-opacity-70">
              <div className="border-b-2 border-brown-pale my-7 mx-10 lg:mx-auto">
                <h4 className="text-center text-3xl uppercase text-brown-pale mb-1">
                  Pakket A
                </h4>
              </div>
              <div className="mb-8">
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">~30 min</span> fotografie op
                    locatie
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
              </div>
              <div className="ml-10 lg:ml-0">
                <div className="flex lg:justify-between lg:flex-row flex-col">
                  <div>
                    <p className="font-bold text-xl mb-2">Vanaf:</p>
                    <p className="text-4xl">
                      <span className="text-xl">€ </span>80
                    </p>
                  </div>
                  <div className="my-10">
                    <Button link="/" button="button-1-xs" text="Boek nu" />
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs">Incl. BTW</p>
                  <p className="text-xs">Excl. reiskosten</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card todo: component with props */}
          <div className="border border-white my-5">
            <div className="bg-white m-1 px-4 py-2 bg-opacity-70">
              <div className="border-b-2 border-brown-pale my-7 mx-10 lg:mx-auto">
                <h4 className="text-center text-3xl uppercase text-brown-pale mb-1">
                  Pakket A
                </h4>
              </div>
              <div className="mb-8">
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">~30 min</span> fotografie op
                    locatie
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
                <div className="flex space-x-4 my-2">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 text-grey-brownish" />
                  <p>
                    <span className="font-bold">10</span> digitale foto’s in
                    hoge kwaliteit
                  </p>
                </div>
              </div>
              <div className="ml-10 lg:ml-0">
                <div className="flex lg:justify-between lg:flex-row flex-col">
                  <div>
                    <p className="font-bold text-xl mb-2">Vanaf:</p>
                    <p className="text-4xl">
                      <span className="text-xl">€ </span>80
                    </p>
                  </div>
                  <div className="my-10">
                    <Button link="/" button="button-1-xs" text="Boek nu" />
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs">Incl. BTW</p>
                  <p className="text-xs">Excl. reiskosten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* caption en button offerte op maat */}
        <div className="flex flex-col justify-center gap-10 my-10">
          <h4 className="text-center text-3xl lg:text-4xl uppercase text-charcoal mb-1">
            Liever een offerte op maat?
          </h4>
          <div className="self-center">
            <Button link="/" button="button-1" text="Neem contact op" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
