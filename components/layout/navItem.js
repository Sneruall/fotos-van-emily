import Link from "next/link";

function navItem(props) {
  return (
    <li>
      <Link href="/">
        <a className="uppercase text-grey-darkest hover:text-black hover:underline font-display">{props.text}</a>
      </Link>
    </li>
  );
}

export default navItem;
