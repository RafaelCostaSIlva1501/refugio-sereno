const InputAttributes = (props) => {
    return (
        <input
            id={props.id}
            min={1}
            type="number"
            className="absolute w-9 h-9 border-b bg-transparent outline-none text-center text-2xl"
        ></input>
    );
};

export default InputAttributes;
