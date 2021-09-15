function WerkwijzeStap(props) {
  return (
    <div className="flex flex-wrap lg:flex-nowrap my-5">
      <div className="lg:w-40 text-center lg:mr-10">
        <p className="font-display text-9xl text-white opacity-70 text-stroke-grey-warm text-stroke-2">
          {props.number}
        </p>
      </div>
      <div className="self-end mb-3 ml-4 flex-1">
        <h4 className="inline-block text-brown-pale text-2xl uppercase border-b-2 border-brown-pale2 pr-16">
          {props.title}
        </h4>
        <p className="hidden lg:block mt-5">
          {props.description}
        </p>
      </div>
      <div className="lg:hidden">
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default WerkwijzeStap;
