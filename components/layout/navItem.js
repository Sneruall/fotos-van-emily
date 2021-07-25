import Link from "next/link";

function navItem(props) {
  return (
    <li className="uppercase text-black font-display text-center group w-32">
      <Link href={props.link}>
        <a className="hover:underline">{props.text}</a>
      </Link>
      {props.dropdown && (
        <ul>
          <li className="hidden group-hover:block">
            <Link href="/portretfotografie">
              <a className="hover:underline">Portret</a>
            </Link>
          </li>
          <li className="hidden group-hover:block">
            <Link href="/loveshoot">
              <a className="hover:underline">Loveshoot</a>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default navItem;
