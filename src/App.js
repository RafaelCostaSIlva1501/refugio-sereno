import React from "react";
import Home from "./components/home/Home";
import FormCharacter from "./components/form/FormCharacter";
import CharacterSheet from "./components/sheet/CharacterSheet";

import { ModalProvider } from "./components/ModalContext";

function App() {
    return (
        <>
            <ModalProvider>
                <Home />
                <FormCharacter />
                <CharacterSheet />
            </ModalProvider>
        </>
    );
}

export default App;
