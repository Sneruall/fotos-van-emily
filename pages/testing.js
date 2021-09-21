import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";


import { Fragment, useState } from "react";

function testing() {
  return (
    <Menu>
      <div className="sm:hidden flex justify-end sticky top-0 z-50">
        {/* <div className="my-5 mx-2">
          <h1 className="font-display uppercase text-brown-pale text-3xl">
            Foto's van Emily
          </h1>
        </div> */}
        <div className="sm:hidden z-10 mt-5 mr-4 cursor-pointer">
          <Menu.Button>
            <MenuIcon className="h-8 w-8 text-black" />
          </Menu.Button>
        </div>
      </div>

      <nav className="z-40 sticky top-0 bg-white opacity-90 w-full">
        <Menu.Items
          as="ul"
          className="flex flex-col uppercase text-lg text-brown-pale"
        >
          <Menu.Item className="py-2 border-b border-opacity-25" as="li">
            {({ active }) => (
              <a className={`${active && "bg-blue-500"} ml-12`} href="/">
                Home
              </a>
            )}
          </Menu.Item>
          <Menu as="li" className="py-2 border-b border-opacity-25">
            {({ open }) => (
              <>
                <Menu.Button className="flex w-full justify-between text-brown-pale">
                  <span className="uppercase ml-12">Diensten</span>
                  {open ? (
                    <ChevronUpIcon
                      id="chevronup"
                      className="h-6 w-6 my-auto mr-5"
                    />
                  ) : (
                    <ChevronDownIcon
                      id="chevrondown"
                      className="h-6 w-6 my-auto mr-5"
                    />
                  )}
                </Menu.Button>

                <Menu.Items as="ul">
                  <Menu.Item as="li" className="h-10 mt-4">
                    <Link className="ml-24" href="/portretfotografie">
                      Portret
                    </Link>
                  </Menu.Item>
                  <Menu.Item as="li" className="h-10">
                    <a className="ml-24" href="/">
                      Zwangerschap
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </>
            )}
          </Menu>
          <Menu.Item className="py-2 border-b border-opacity-25" as="li">
            {({ active }) => (
              <a className={`${active && "bg-blue-500"} ml-12`} href="/testing">
                Portfolio
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </nav>
    </Menu>
  );
}

export default testing;
