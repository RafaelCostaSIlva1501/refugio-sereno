import React, { useState } from "react";

import CreateNote from "./notes/CreateNote";
import master from "../master";

const Notes = () => {
  const [newNote, setNewNote] = useState(false);

  const [noteActive, setNoteActive] = useState(0);

  const createNewNote = () => {
    const title = document.getElementById("noteTitle");
    const text = document.getElementById("noteText");

    const note = {
      title: title.value,
      text: text.value,
    };

    master.push(note);

    setNewNote(false);
  };

  return (
    <div className="flex h-full">
      <nav className="flex flex-col gap-2 flex-0 p-2 border">
        <button
          className="border rounded p-1 bg-white-500 text-black-500"
          onClick={() => {
            setNewNote(true);
          }}
        >
          Adicionar Texto
        </button>

        <hr />

        <div className="flex flex-col gap-2 w-48">
          {master.length === 0 ? ( // Verifica se o array master está vazio
            <p className="p-4 text-gray-500 text-center">
              Nenhuma nota disponível.
            </p> // Mensagem quando não há notas
          ) : (
            master.map((e, i) => (
              <p
                className="p-1 bg-white rounded cursor-pointer hover:underline"
                key={i}
                onClick={() => {
                  setNoteActive(i);
                }}
              >
                {e.title}
              </p>
            ))
          )}
        </div>
      </nav>

      <section className="border flex-1">
        <p>
          {master[noteActive] && master[noteActive].text ? (
            master[noteActive].text
          ) : (
            <></>
          )}
        </p>
      </section>

      {newNote === true && (
        <CreateNote
          clickClose={() => {
            setNewNote(false);
          }}
          clickAddNote={createNewNote}
        />
      )}
    </div>
  );
};

export default Notes;
