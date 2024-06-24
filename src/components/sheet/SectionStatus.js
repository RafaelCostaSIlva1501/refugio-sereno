import React, { useContext } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";

const SectionStatus = () => {
    const { modalSheet, listNewCharacter, sheetIndex } = useContext(ModalContext);

    if (modalSheet === 1) {
        
        return (
            <>
                <div className="flex flex-row justify-between w-full mb-2 bg-white-100">
                    <span></span>
                    <h2 className=" text-center text-xl">STATUS</h2>
                    <span></span>
                </div>

                <div className="">
                    <Progress
                        name="Pontos de Vida"
                        maxValue={listNewCharacter[sheetIndex].pv[0]}
                        value={listNewCharacter[sheetIndex].pv[1]}
                        color="red"
                    />

                    <Progress
                        name="Pontos de Determinação"
                        maxValue={listNewCharacter[sheetIndex].pd[0]}
                        value={listNewCharacter[sheetIndex].pd[1]}
                        color="blue"
                    />
                </div>

                <div>
                    <button></button>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default SectionStatus;
