function testing() {
  return (
    <div className="grid grid-cols-3 justify-items-stretch">
      <div className="border border-black grid grid-cols-1 justify-items-stretch">
        <div className="bg-blue-300 m-1">
          <div>
            1
          </div>
          <div>
            2
          </div>
        </div>
      </div>
      <div className=" bg-green-300">1</div>
      <div className="h-60 bg-red-300">1</div>
    </div>
  );
}

export default testing;
