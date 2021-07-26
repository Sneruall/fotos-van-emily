import Link from "next/link";
import { useEffect, useState } from "react";

function scrollNavbar() {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
      if (window.pageYOffset > 140) {
          if(!scrollNav){
              setScrollNav(true);
          }
      } else {
          setScrollNav(false);
      }
  };

  return (
    <div className={`${!scrollNav ? "hidden" : "sm:block"} hidden fixed bg-white opacity-90 w-full z-50 top-0`}>
      <div className="px-2 flex max-w-6xl mx-auto uppercase font-display text-brown-pale justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl my-2">Foto's van Emily</h2>
        </div>
        <div className="my-auto">
          <ul className="flex flex-row space-x-10">
            <li>
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li className="group">
              <Link href="/">
                <a className="hover:underline">Diensten</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Over mij</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default scrollNavbar;
