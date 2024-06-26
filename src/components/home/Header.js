import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const Header = () => {
    const { openModal } = useContext(ModalContext);

    return (
        <header className="flex justify-end items-center h-9 px-1 bg-white-100 border-b">
            <button className="flex hover:scale-90 active:scale-100" onClick={() => openModal(3)}>
                <span className="material-symbols-outlined"> settings </span>
            </button>
        </header>
    )
}

export default Header;