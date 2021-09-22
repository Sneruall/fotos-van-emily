import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Fragment, useState } from "react";

function testing() {
  return (
    <Menu>
      <div className="flex justify-between">
        <div className="my-5 mx-2">
          <h1 className="font-display uppercase text-brown-pale text-3xl">
            Foto's van Emily
          </h1>
        </div>
        <div className="sm:hidden z-10 mt-5 mr-4 cursor-pointer">
          <Menu.Button>
            <MenuIcon className="h-8 w-8 text-black" />
          </Menu.Button>
        </div>
      </div>

      <nav>
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
            <Menu.Button className="w-full text-left">
              <span className="uppercase ml-12">Diensten</span>
            </Menu.Button>
            <Menu.Items as="ul">
              <Menu.Item as="li" className="h-10 mt-4">
                <a className="ml-24" href="/">Portret</a>
              </Menu.Item>
              <Menu.Item as="li" className="h-10">
                <a className="ml-24" href="/">Zwangerschap</a>
              </Menu.Item>
            </Menu.Items>
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
