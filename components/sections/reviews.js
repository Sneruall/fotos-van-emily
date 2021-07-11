import Section from "../layout/Section";

function Reviews() {
  return (
    <Section bg={"bg-brown-light"}>
      <div className=" border border-grey-dark p-2 md:mx-auto md:max-w-6xl 3xl:max-w-full">
        <div className="border border-grey-dark p-16">
          <h2 className="text-center md:text-left text-6xl font-display uppercase text-white leading-snug">
            Reviews
          </h2>
        </div>
      </div>
    </Section>
  );
}

export default Reviews;
