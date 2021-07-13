import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <button class="button">
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
