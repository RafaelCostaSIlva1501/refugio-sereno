import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const Rules = () => {
    const { modalON } = useContext(ModalContext);

    if (modalON === 4) {
        return (
            <div className="h-full p-10">
                <section className="border h-full">
                    <h2 className="text-center">
                        <a download ></a>
                    </h2>
                </section>
            </div>
        ) 
    } else {
        return null;
    }
};

export default Rules;