function section(props) {
  return (
    <div className={"py-40" + (props.bg ? ` ` + props.bg : "")}>
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
}

export default section;
