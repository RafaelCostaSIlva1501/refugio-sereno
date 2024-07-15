import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const ResistencesInput = (props) => {
    const { listNewCharacter, sheetIndex, changeResistence } = useContext(ModalContext);

    return (
        <div className="flex flex-row justify-between items-center border rounded">

            <span className="flex items-center h-full px-1 border-r bg-white-100">
                {props.title}:
            </span>

            <div className="flex flex-row items-center">
                <button className="flex flex-row items-center" onClick={() => changeResistence(props.id, "sub")}>
                    <span className="material-symbols-outlined">remove</span>
                </button>

                <span>
                    {listNewCharacter[sheetIndex].resistences[props.id]}
                </span>

                <button className="flex flex-row items-center" onClick={() => changeResistence(props.id, "add")}>
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
    );
};

export default ResistencesInput;
