function ReviewElementDesktop(props) {
  return (
    <div className="border border-white my-5">
      <div className="bg-white m-1 p-2 bg-opacity-70">
        <div className="p-2">
          <div className="flex justify-center">
            <div className="py-10 px-10">
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

export default ReviewElementDesktop;
