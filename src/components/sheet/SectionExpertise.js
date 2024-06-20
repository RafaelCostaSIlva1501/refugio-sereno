import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const SectionExpertise = () => {
    const { modalSheet } = useContext(ModalContext);

    if (modalSheet === 2) {
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    PERÍCIAS E ATRIBUTOS
                </h2>
            </>
        );
    } else {
        return null;
    }
};

export default SectionExpertise;
