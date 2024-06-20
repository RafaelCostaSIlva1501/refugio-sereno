import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const PopUpDelete = () => {
    const { deletePopUp, openPopUpDelete, deleteIndex, setDeleteIndex } =
        useContext(ModalContext);

    const confirmDelete = () => {
        let listNewCharacter = JSON.parse(localStorage.getItem("sheet")) || [];

        listNewCharacter.splice(deleteIndex, 1);

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));

        openPopUpDelete(false)
        setDeleteIndex(null)
        window.location.reload();
    };

    if (deletePopUp) {
        return (
            <div className="centralize flex justify-center items-center backdrop-blur-sm">
                <div className="flex flex-col gap-8 px-5 py-8 border-2 rounded-lg border-white-400 ">
                    <span className="text-2xl variant">DELETAR FICHA?</span>

                    <div className="flex flex-row justify-center gap-8">
                        <button
                            className="flex items-center p-1.5 border border-solid border-white-500 rounded hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => openPopUpDelete(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="flex items-center p-1.5 border border-solid border-white-500 rounded hover:bg-white-500 hover:text-black transition active:scale-95" onClick={confirmDelete}
                        >
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default PopUpDelete;
