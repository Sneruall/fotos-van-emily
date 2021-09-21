import Link from "next/link";

function navItemXS(props) {
  return (
    <Link href={props.link}>
      <li className="py-2 border-b border-opacity-25 cursor-pointer text-brown-pale">
        <h2 className="ml-12">{props.text}</h2>
      </li>
    </Link>
  );
}

export default navItemXS;
