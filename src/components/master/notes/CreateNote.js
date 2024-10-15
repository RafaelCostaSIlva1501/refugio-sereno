const CreateNote = (props) => {
  return (
    <>
      <div className="centralize flex justify-center items-center">
        <div className="flex flex-col w-1/2 p-2 border bg-black-500 border-white-500 rounded-lg bg-white">
          <header className="flex justify-end">
            <button className="flex" onClick={props.clickClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          <main className="flex flex-col gap-5 p-1">
            <div className="flex flex-col">
              <label className="text-white-500  font-bold">
                Título da Nota:
              </label>
              <input
                type="text"
                className="p-2 bg-black-500 border border-gray-300 rounded-md"
                placeholder="Digite o título"
                id="noteTitle"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white-500 font-bold">Descrição:</label>

              <textarea
                className="p-2 bg-black-500 border border-white-500 rounded-md resize-none scrollbar"
                placeholder="Digite a descrição"
                rows={10}
                id="noteText"
              ></textarea>
            </div>

            <button
              className="bg-black-500 border text-white font-bold py-2 px-4 rounded-md hover:bg-white-500 hover:text-black-500"
              onClick={props.clickAddNote}
            >
              Adicionar nova nota
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
