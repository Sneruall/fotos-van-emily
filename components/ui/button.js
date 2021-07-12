import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <button class="bg-white hover:bg-pink-darkest hover:text-white text-pink-darkest font-semibold uppercase py-4 px-6 rounded-full min-w-170">
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
