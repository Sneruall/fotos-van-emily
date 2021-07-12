function Review(props) {
  return (
    <div className="py-10 max-w-sm">
      <p className="text-white text-center">
          {props.text}
      </p>
      <p className="text-center mt-6 italic text-grey-dark">{props.name}</p>
    </div>
  );
}

// todo: add a slider effect: https://devdojo.com/tnylea/creating-a-slider-with-tailwind-css

export default Review;
