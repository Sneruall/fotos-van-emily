function ReviewElement(props) {
  return (
    <div className="border border-white mb-10 mx-7">
      <div className="bg-white m-1 p-2 bg-opacity-70">
        <div className="p-2">
          <div className="flex justify-center">
            <div className="px-2">
              <p className="text-brown-pale text-center">{props.text}</p>
              <p className="text-center mt-6 italic text-brown-pale">
                {props.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewElement;
