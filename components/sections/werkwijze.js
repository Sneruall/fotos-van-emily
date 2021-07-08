import Image from "next/image";

export default function Werkwijze() {
  return (
    <div className="bg-blue-greyish text-center pt-20 md:pt-0">
      <div className="container">
        <div className="bg-white mx-10 md:mx-40 p-5 pt-16 rounded-b-full rounded-t-full md:rounded-b-none">
          <p className="font-display text-brown text-center text-5xl mb-4 mt-0 md:mt-10 mx-0 md:mx-40">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
          <div className="my-3 block md:hidden">
            <Image
              src="/images/fotograaf-met-camera.png"
              width={413}
              height={232}
              alt="Fotograaf met camera"
            />
          </div>
          <p className="text-lg mt-20 md:my-5 mx-0 md:mx-16 text-center md:text-left">
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
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-lg mb-20 mx-0 md:mx-16 text-center md:text-left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore
              </p>
            </div>
            <div className="hidden md:block">
              <div className="">
                <Image
                  src="/images/fotograaf-met-camera.png"
                  width={413}
                  height={232}
                  alt="Fotograaf met camera"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
