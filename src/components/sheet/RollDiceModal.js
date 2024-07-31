import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const RolldiceModal = (props) => {
    const { setRollDiceModal } =
        useContext(ModalContext);

    return (
        <div className="centralize flex justify-center items-center">
            <aside className="flex flex-col w-3/5 bg-black-500 border border-white-500 rounded shadow shadow-">
                <div className="flex flex-row justify-between items-center p-1">
                    <span className="text-lg">{props.expertise} ({props.attributeName})</span>

                    <button onClick={() => {setRollDiceModal(false)}}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>

                <div className="px-1 py-2.5 border-b border-t text-lg">
                    Resultado: {props.largerDie}, {props.training}, {props.bonus} = <span className="font-semibold">{props.result}</span>
                </div>

                <div className="p-1">d20: {props.dice}</div>
            </aside>
        </div>
    );
};

export default RolldiceModal;
