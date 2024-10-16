const TextareaForm = (props) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.text}</label>
            <textarea
                className="p-1 bg-white-100 rounded text-white-300 outline-none resize-none scrollbar"
                id={props.id}
                rows={3}
                value={props.value}
                onChange={props.onChange}
                onInput={props.onInput}
            >{props.characterText}</textarea>
        </div>
    );
};

export default TextareaForm;
