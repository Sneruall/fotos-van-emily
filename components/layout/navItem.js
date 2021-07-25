import Link from "next/link";

function navItem(props) {
  return (
    <>
      <li className="uppercase text-grey-darkest font-display text-center group w-32">
        <Link href={props.link}>
          <a className="hover:text-black hover:underline">{props.text}</a>
        </Link>
        {props.dropdown && (
          <div className="hidden group-hover:block">
            <li>
              <Link href="/portretfotografie">
                <a className="hover:text-black hover:underline">Portret</a>
              </Link>
            </li>
            <li>
              <Link href="/portretfotografie">
                <a className="hover:text-black hover:underline">Loveshoot</a>
              </Link>
            </li>
            <li>
              <Link href="/portretfotografie">
                <a className="hover:text-black hover:underline">Zwangerschap</a>
              </Link>
            </li>
            <li>
              <Link href="/portretfotografie">
                <a className="hover:text-black hover:underline">Honden</a>
              </Link>
            </li>
            <li>
              <Link href="/portretfotografie">
                <a className="hover:text-black hover:underline">Fotobewerking</a>
              </Link>
            </li>
          </div>
        )}
      </li>
    </>
  );
}

export default navItem;
