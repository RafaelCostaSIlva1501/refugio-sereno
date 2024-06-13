import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import ButtonStyle from "./ButtonStyle";
import SectionPerson from "./SectionPerson";
import SectionStatus from "./SectionStatus";
import SectionExpertise from "./SectionExpertise";
import SectionInventory from "./SectionInventory";
import SectionUnlock from "./SectionUnlock";

const CharacterSheet = () => {
    const { modalON, replaceModalSheet } = useContext(ModalContext);

    if (modalON === 2) {
        return (
            <section className="p-2.5">
                <div className="flex flex-row gap-1.5 w-full">
                    <div className="min-w-24 min-h-24 border">
                        <img src="" alt=""></img>
                    </div>

                    <div className="flex flex-col gap-1.5 w-full ">
                        <span className="border-b">Jogador:</span>
                        <span className="border-b">Personagem:</span>
                        <span className="border-b">Ocupação:</span>
                    </div>
                </div>

                <div className="flex flex-row justify-around gap-1.5 my-5 p-1 border-t border-b border-white-200">
                    <ButtonStyle name="person" onClick={() => replaceModalSheet(0)}/>

                    <ButtonStyle name="assignment" onClick={() => replaceModalSheet(1)} />

                    <ButtonStyle name="casino" onClick={() => replaceModalSheet(2)}/>

                    <ButtonStyle name="backpack" onClick={() => replaceModalSheet(3)}/>

                    <ButtonStyle name="lock_open" onClick={() => replaceModalSheet(4)}/>
                </div>

                <div className="border">
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
