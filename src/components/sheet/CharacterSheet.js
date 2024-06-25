import React, { useContext } from "react";
import ModalContext from "../ModalContext";

import ButtonStyle from "../styles/ButtonStyle";
import SectionPerson from "./SectionPerson";
import SectionStatus from "./SectionStatus";
import SectionExpertise from "./SectionExpertise";
import SectionInventory from "./SectionInventory";
import SectionUnlock from "./SectionUnlock";

const CharacterSheet = () => {
    const { modalON, replaceModalSheet } =
        useContext(ModalContext);

    if (modalON === 2) {
        return (
            <section className="flex flex-col gap-1.5 h-screen p-1">
                
                <div className="flex flex-row justify-around gap-1.5 p-1 border-t border-b border-white-200">
                    <ButtonStyle
                        name="person"
                        onClick={() => replaceModalSheet(0)}
                    />

                    <ButtonStyle
                        name="assignment"
                        onClick={() => replaceModalSheet(1)}
                    />

                    <ButtonStyle
                        name="casino"
                        onClick={() => replaceModalSheet(2)}
                    />

                    <ButtonStyle
                        name="backpack"
                        onClick={() => replaceModalSheet(3)}
                    />

                    <ButtonStyle
                        name="lock_open"
                        onClick={() => replaceModalSheet(4)}
                    />
                </div>

                <div className="h-96">
                    <SectionPerson />
                    <SectionStatus />
                    <SectionExpertise />
                    <SectionInventory />
                    <SectionUnlock />
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default CharacterSheet;
