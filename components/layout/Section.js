function Section(props) {
  return (
    <div className={"py-40" + (props.bg ? ` ` + props.bg : "")}>
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
}

export default Section;

// <main className="max-w-screen-2xl mx-auto">
