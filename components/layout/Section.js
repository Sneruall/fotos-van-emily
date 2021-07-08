function section(props) {
    return (
        <div className={"py-40" + (props.bg ? ` ` + props.bg : "") }>{props.children}</div>
    )
}

export default section
