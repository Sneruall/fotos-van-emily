import Section from "../layout/Section";

function PageSectionTwo() {
  return (
    <Section bg={"bg-grey-pale"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white text-3xl md:text-6xl text-center uppercase mb-2">
          Natuurlijk op de foto
        </h2>
        <div className="border border-white w-full mb-5"></div>
        <div className="border border-white w-3/5 mx-auto"></div>
      </div>
    </Section>
  );
}

export default PageSectionTwo;
