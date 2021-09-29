import Image from "next/image";

function testing() {
  return (
    <div className="max-h-screen block">
      <h1>Testpage</h1>
      <Image
        src="/images/cadeaubon/Business-A4-Mockup3.png"
        alt="Emily van Roomen"
        layout="fill"
        objectFit="contain" // Scale your image down to fit into the container
      />
    </div>
  );
}

export default testing;
