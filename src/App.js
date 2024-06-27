import React from "react";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import FormCharacter from "./components/form/FormCharacter";
import CharacterSheet from "./components/sheet/CharacterSheet";

import { ModalProvider } from "./components/ModalContext";

function App() {
    return (
        <>
            <ModalProvider>
                <Header />
                <Home />
                <FormCharacter />
                <CharacterSheet />
            </ModalProvider>
        </>
    );
}

export default App;
