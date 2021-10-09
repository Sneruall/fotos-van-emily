import Link from "next/link";

function navItem(props) {
  return (
    <li className="uppercase text-black text-center group w-32">
      <Link href={props.link}>
        <a className="hover:underline">{props.text}</a>
      </Link>
    </li>
  );
}

export default navItem;
