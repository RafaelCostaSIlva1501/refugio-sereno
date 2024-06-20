import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const SectionUnlock = () => {
    const { modalSheet } = useContext(ModalContext);

    if (modalSheet === 4) {
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">?</h2>
            </>
        );
    } else {
        return null;
    }
};

export default SectionUnlock;
