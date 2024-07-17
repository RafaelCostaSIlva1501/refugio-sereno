/*import React, { useContext } from "react";
import ModalContext from "../ModalContext";*/

const Expertise = ({ title }) => {
    /*const { listNewCharacter, sheetIndex, setCharacters } =
        useContext(ModalContext);*/

    return (
        <>
            <div className="flex flex-col justify-center w-fit items-center border">
                <img src="./img/d20.png" alt="" className="w-10"></img>
                <span>{title}</span>
            </div>
        </>
    );
};

export default Expertise;
