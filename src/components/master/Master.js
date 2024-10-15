import React, { useContext, useState } from "react";
import ModalContext from "../ModalContext";
import ButtonStyle from "../styles/ButtonStyle";

import Notes from "../master/Notes"
import MasterSheets from "../master/MasterSheets"
import Soundtrack from "../master/Soundtrack"

const Master = () => {
  const { modalON, openModal } = useContext(ModalContext);

  const [masterSection, setMasterSection] = useState(0);

  if (modalON === 5) {
    return (
      <section className="flex flex-col h-full p-1">

        <div className="flex flex-row justify-around gap-1.5 p-1 border-b border-white-200">
          <ButtonStyle
            name="library_books"
            onClick={() => setMasterSection(0)}
          />

          <ButtonStyle name="group" onClick={() => setMasterSection(1)} />

          <ButtonStyle name="music_note" onClick={() => setMasterSection(2)} />
        </div>

        <div className="flex-1 h-full border border-blue-500">
          {masterSection === 0 && (
            <>
              <Notes />
            </>
          )}

          {masterSection === 1 && (
            <>
              <MasterSheets />
            </>
          )}

          {masterSection === 2 && (
            <>
              <Soundtrack />
            </>
          )}
        </div>
      </section>
    );
  }
};

export default Master;
