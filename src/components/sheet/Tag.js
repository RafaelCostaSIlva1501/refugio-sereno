const Tag = (props) => {
    return <div className="w-max border border-white-300 rounded p-0.5 text-center text-xs text-white-400 cursor-pointer">{props.title}: {props.value}</div>;
};

export default Tag;
