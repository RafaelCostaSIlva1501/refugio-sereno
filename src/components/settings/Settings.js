import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const Settings = () => {
    const { modalON } = useContext(ModalContext);
    
    if (modalON === 3) {
        return <section className="centralize"></section>;
    } else {
        return null;
    }
};

export default Settings;
