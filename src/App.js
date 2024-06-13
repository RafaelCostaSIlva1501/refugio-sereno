import React from "react";
import Home from "./components/Home";
import FormCharacter from "./components/FormCharacter";
import CharacterSheet from "./components/CharacterSheet";
import PopUpDelete from "./components/PopUpDelete";

import { ModalProvider } from "./components/ModalContext";

function App() {
    return (
        <>
            <ModalProvider>
                <Home />
                <FormCharacter />
                <CharacterSheet />
                <PopUpDelete />
            </ModalProvider>
        </>
    );
}

export default App;
