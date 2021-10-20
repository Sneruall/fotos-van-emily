function Section(props) {
  return (
    <div ref={props.refProp} id={props.id} className={"py-24" + (props.bg ? ` ` + props.bg : "")}>
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
}

export default Section;
