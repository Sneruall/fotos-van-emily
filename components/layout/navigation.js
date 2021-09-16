import NavItem from "./navItem";
import { Menu } from "@headlessui/react";

function navigation() {
  return (
    <nav className="hidden font-sans sm:block max-w-6xl">
      <ul className="flex flex-row justify-between mt-5 max-w-5xl items-start relative">
        <NavItem text={"Home"} link="/" />
        {/* Menu using headless UI */}
        <div className="w-44">
          <Menu>
            <div className="flex flex-col">
              <Menu.Button><span className="uppercase text-black hover:underline">Diensten</span></Menu.Button>
              <Menu.Items>
                <div className="flex flex-col">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "underline"} w-auto text-black text-center`}
                        href="/portretfotografie"
                      >
                        Portret
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "underline"} w-auto text-black text-center`}
                        href="/account-settings"
                      >
                        Loveshoot
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </div>
          </Menu>
        </div>

        <NavItem text={"Portfolio"} link="/portfolio" />
        <NavItem text={"Over mij"} link="/over-mij" />
        <NavItem text={"Contact"} link="/contact" />
      </ul>
    </nav>
  );
}

export default navigation;
