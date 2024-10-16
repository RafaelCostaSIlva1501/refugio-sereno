import React from "react";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import FormCharacter from "./components/form/FormCharacter";
import CharacterSheet from "./components/sheet/CharacterSheet";
import Settings from "./components/settings/Settings";
import Rules from "./components/rules/Rules"
import Master from "./components/master/Master"

import { ModalProvider } from "./components/ModalContext";

function App() {
    return (
        <>
            <ModalProvider>
                <Header />
                <Home />
                <FormCharacter />
                <CharacterSheet />
                <Settings />
                <Rules />
                <Master />
            </ModalProvider>
        </>
    );
}

export default App;
