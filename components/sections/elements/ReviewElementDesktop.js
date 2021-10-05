function ReviewElementDesktop(props) {
  return (
    <div className="border border-white my-5 grid grid-cols-1 justify-items-stretch">
      <div className="bg-white m-1 p-2 bg-opacity-70">
        <div className="p-2">
          <div className="flex justify-center">
            <div className="py-5">
              <p className="text-10xl font-display text-charcoal-3 -mb-32 -mt-16">"</p>
              <p className="text-center italic">{props.text}</p>
              <p className="text-center mt-6 text-brown-pale font-semibold">
                - {props.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewElementDesktop;
