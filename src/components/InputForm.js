const InputForm = (props) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.text}</label>
            <input
                className=" p-1 bg-white-100 rounded text-white-300 outline-none"
                autoComplete="off"
                id={props.id}
            ></input>
        </div>
    );
};

export default InputForm;
