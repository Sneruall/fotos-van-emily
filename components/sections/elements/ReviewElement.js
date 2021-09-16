function ReviewElement(props) {
  return (
    <div className="px-4 lg:px-10 py-10">
      <p className="text-brown-pale text-center">
        {props.text}
      </p>
      <p className="text-center mt-6 italic text-brown-pale">{props.name}</p>
    </div>
  );
}

export default ReviewElement;
