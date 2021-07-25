import Link from "next/link";

function navItem(props) {
  return (
    <li className="uppercase text-grey-darkest font-display text-center group w-32">
      <Link href={props.link}>
        <a className="hover:text-black hover:underline">{props.text}</a>
      </Link>
      {props.dropdown && (
        <ul>
          <li className="hidden group-hover:block">
            <Link href="/portretfotografie">
              <a className="hover:text-black hover:underline">Portret</a>
            </Link>
          </li>
          <li className="hidden group-hover:block">
            <Link href="/loveshoot">
              <a className="hover:text-black hover:underline">Loveshoot</a>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default navItem;
