import React, { useContext } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";

const SectionStatus = () => {
    const { modalSheet } = useContext(ModalContext);

    if (modalSheet === 1) {
        return (
            <>
                <div className="flex flex-row justify-between w-full mb-2 bg-white-100">
                    span
                    <h2 className=" text-center text-xl">STATUS</h2>
                    span
                </div>

                <div className="">
                    <Progress
                        name="Pontos de Vida"
                        maxValue={12}
                        value={7}
                        color="red"
                    />

                    <Progress
                        name="Pontos de Determinação"
                        maxValue={90}
                        value={14}
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
