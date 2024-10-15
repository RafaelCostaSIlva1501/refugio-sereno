import React from "react";

const InputForm = (props) => {
    return (
        <div className="flex flex-col flex-1">
            <label htmlFor={props.id}>{props.text}</label>
            <input
                className=" p-1 bg-white-50 text-white-300 outline-none"
                type={props.type}
                value={props.value}
                autoComplete="off"
                onChange={props.onChange}
                id={props.id}
            ></input>
        </div>
    );
};

export default InputForm;
