const InputAttributes = (props) => {
    return (
        <input
            className="absolute w-9 h-9 border-b bg-transparent outline-none text-center text-2xl"
            id={props.id}
            value={props.value}
            min={-1}
            type="number"
            onChange={props.onChange}
        ></input>
    );
};

export default InputAttributes;
