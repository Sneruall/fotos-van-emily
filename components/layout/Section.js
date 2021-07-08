function section(props) {
    return (
        <div className={"container mx-auto py-40" + (props.bg ? ` ` + props.bg : "") }>{props.children}</div>
    )
}

export default section
