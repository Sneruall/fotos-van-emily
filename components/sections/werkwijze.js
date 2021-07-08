import Image from "next/image";

export default function Werkwijze() {
  return (
    <div className="bg-blue-greyish text-center pt-20 md:pt-0">
      <div className="container">
        <div className="bg-white mx-10 p-5 pt-16 rounded-b-full rounded-t-full md:rounded-b-none">
          <p className="font-display text-brown text-center text-5xl mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
          <div className="my-3">
            <Image
              src="/images/fotograaf-met-camera.png"
              width={413}
              height={232}
              alt="Fotograaf met camera"
            />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea.
          </p>
        </div>
      </div>
    </div>
  );
}
