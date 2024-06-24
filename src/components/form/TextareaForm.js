const TextareaForm = (props) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.text}</label>
            <textarea
                id={props.id}
                rows={4}
                className="p-1 bg-white-100 rounded text-white-300 outline-none resize-none scrollbar"
            >{props.characterText}</textarea>
        </div>
    );
};

export default TextareaForm;
