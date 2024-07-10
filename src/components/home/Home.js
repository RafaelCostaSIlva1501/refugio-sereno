import React, { useContext } from "react";
import ModalContext from "../ModalContext";
import CharacterList from "./CharacterList";
import PopUpDelete from "./PopUpDelete";

const Home = () => {
    const { modalON, openModal } = useContext(ModalContext);

    if (modalON === 0) {
        return (
            <main className="px-2">
                {/*Botão para criar novo personagem*/}
                <button
                    className="flex items-center my-2 p-1.5 border-2 border-solid border-white-500 rounded hover:bg-white-500 hover:text-black-500 transition active:scale-95"
                    onClick={() => openModal(1)}
                >
                    <span className="material-symbols-outlined">add_box</span>
                    Criar Personagem
                </button>

                {/*Divisão*/}
                <hr className=""></hr>

                {/*Sessão com os cards dos personagens*/}
                <section className="flex flex-col my-2">
                    <CharacterList />
                </section>

                <PopUpDelete />
            </main>
        );
    } else {
        return null;
    }
};

export default Home;
