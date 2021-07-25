import Link from "next/link";

function droppedDownNavItemXS(props) {
  return (
    <Link href={props.link}>
      <li className="py-2 border-b border-opacity-25 cursor-pointer">
        <h2 className="ml-20">{props.text}</h2>
      </li>
    </Link>
  );
}

export default droppedDownNavItemXS;
