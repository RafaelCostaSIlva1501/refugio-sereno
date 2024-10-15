import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../ModalContext";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import InputAttributes from "./InputAttributes";
import InputExpertises from "./InputExpertise";
import InputOrigins from "./InputOrigins";
import expertises from "../expertises";
import origins from "../origins";

const FormCharacter = () => {
  const { modalON, openModal, sectionActive, setSectionActive, setExpertises } =
    useContext(ModalContext);

  const [sectionIndex, setSectionIndex] = useState(0);

  const changeSection = (modifier) => {
    setSectionIndex((prevIndex) => {
      let newIndex;

      if (modifier === "sub") {
        newIndex = prevIndex - 1;
        if (newIndex < 0) {
          newIndex = 5; // Volta para o valor máximo
        }
      } else if (modifier === "add") {
        newIndex = prevIndex + 1;
        if (newIndex > 5) {
          newIndex = 0; // Volta para o valor mínimo
        }
      }

      return newIndex;
    });
  };

  useEffect(() => {
    setSectionActive(sectionIndex);
  }, [sectionIndex]);

  const [character, setCharacter] = useState({
    player: "",
    character: "",
    nacionality: "",
    age: "",
    campaign: "",
    img: "./img/camera.png",
    history: "",
    personality: "",
    appearance: "",
    origin: "",
    attributes: {
      agi: 0,
      int: 0,
      vig: 0,
      pre: 0,
      for: 0,
    },
    expertises: [
      {
        expertise: ["Acrobacias", "agi", 0, 0],
      },
      {
        expertise: ["Adestramento", "pre", 0, 0],
      },
      {
        expertise: ["Artes", "pre", 0, 0],
      },
      {
        expertise: ["Atletismo", "for", 0, 0],
      },
      {
        expertise: ["Atualidades", "int", 0, 0],
      },
      {
        expertise: ["Ciências", "int", 0, 0],
      },
      {
        expertise: ["Crime", "agi", 0, 0],
      },
      {
        expertise: ["Diplomacia", "pre", 0, 0],
      },
      {
        expertise: ["Enganação", "pre", 0, 0],
      },
      {
        expertise: ["Fortitude", "vig", 0, 0],
      },
      {
        expertise: ["Furtividade", "agi", 0, 0],
      },
      {
        expertise: ["Iniciativa", "agi", 0, 0],
      },
      {
        expertise: ["Intimidação", "pre", 0, 0],
      },
      {
        expertise: ["Intuição", "int", 0, 0],
      },
      {
        expertise: ["Investigação", "int", 0, 0],
      },
      {
        expertise: ["Luta", "for", 0, 0],
      },
      {
        expertise: ["Medicina", "int", 0, 0],
      },
      {
        expertise: ["Ocultismo", "int", 0, 0],
      },
      {
        expertise: ["Percepção", "pre", 0, 0],
      },
      {
        expertise: ["Pilotagem", "agi", 0, 0],
      },
      {
        expertise: ["Pontaria", "agi", 0, 0],
      },
      {
        expertise: ["Profissão", "int", 0, 0],
      },
      {
        expertise: ["Reflexos", "agi", 0, 0],
      },
      {
        expertise: ["Religião", "pre", 0, 0],
      },
      {
        expertise: ["Sobrevivência", "int", 0, 0],
      },
      {
        expertise: ["Tática", "int", 0, 0],
      },
      {
        expertise: ["Tecnologia", "int", 0, 0],
      },
      {
        expertise: ["Vontade", "pre", 0, 0],
      },
    ],
    pv: [0, 0],
    pd: [0, 0],
    resistences: {
      defense: 0,
      dodge: 0,
      block: 0,
      mental: 0,
      physical: 0,
      ballistics: 0,
      cut: 0,
      impact: 0,
      drilling: 0,
      electricity: 0,
      fire: 0,
      cold: 0,
      chemical: 0,
    },
    conditions: [],
    skills: [],
    inventory: [
      {
        itemName: "Faca",
        itemImg: "./img/items-icons/knife.png",
      },
      {},
    ],
  });

  const updateInfo = () => {
    const Iplayer = document.getElementById("Iplayer");
    const Icharacter = document.getElementById("Icharacter");
    const Inacionality = document.getElementById("Inacionality");
    const Iage = document.getElementById("Iage");
    const Icampaign = document.getElementById("Icampaign");

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      player: Iplayer.value,
      character: Icharacter.value,
      nacionality: Inacionality.value,
      age: Number(Iage.value),
      campaign: Icampaign.value,
    }));

    const Iimg = document.getElementById("Iimg");

    const file = Iimg.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCharacter((prevCharacter) => ({
          ...prevCharacter,
          img: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateFeatures = () => {
    const Ihistory = document.getElementById("Ihistory");
    const Ipersonality = document.getElementById("Ipersonality");
    const Iappearance = document.getElementById("Iappearance");

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      history: Ihistory.value,
      personality: Ipersonality.value,
      appearance: Iappearance.value,
    }));
  };

  const updateAttribute = () => {
    const AGI = document.getElementById("agi");
    const INT = document.getElementById("int");
    const VIG = document.getElementById("vig");
    const PRE = document.getElementById("pre");
    const FOR = document.getElementById("for");

    console.log(AGI.value, INT.value, VIG.value, PRE.value, FOR.value);

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      attributes: {
        ...prevCharacter.attributes,
        int: Number(INT.value),
        agi: Number(AGI.value),
        vig: Number(VIG.value),
        pre: Number(PRE.value),
        for: Number(FOR.value),
      },
    }));
  };

  const updateExpertises = (id, newValue, event) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      expertises: prevCharacter.expertises.map((expertise, index) =>
        index === id
          ? {
              ...expertise,
              expertise: [
                expertise.expertise[0],
                expertise.expertise[1],
                parseInt(newValue),
                expertise.expertise[3],
              ],
            }
          : expertise
      ),
    }));
  };

  useEffect(() => {
    if (sectionActive === 4) {
      setExpertises();
    }
  }, [sectionActive, setExpertises]);

  if (modalON === 1) {
    return (
      <section className="flex flex-col justify-between h-full px-1">
        {/*Cabeçalho do formulário para criação do personagem*/}
        <header className="flex flex-row justify-end items-center p-1 border-b border-white-200">
          <button
            className="w-max flex justify-center items-center"
            onClick={() => openModal(0)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <main className="flex flex-col gap-1 grow h-96 py-1 overflow-y-auto scrollbar">
          {sectionActive === 0 && (
            <div className="flex flex-col justify-between gap-1 h-full">
              <button>Nível: 1</button>
              <button>Nível: 2</button>
              <button>Nível: 3</button>
              <button>Nível: 4</button>
            </div>
          )}

          {sectionActive === 1 && (
            <div className="flex flex-col justify-between gap-1 h-full">
              <div className=" w-full bg-white-100">
                <h2 className="text-center text-xl">INFORMAÇÕES</h2>
              </div>

              {/**/}
              <InputForm
                text="Jogador:"
                type="text"
                value={character.player}
                onChange={updateInfo}
                id="Iplayer"
              />

              {/**/}
              <InputForm
                text="Personagem:"
                type="text"
                value={character.character}
                onChange={updateInfo}
                id="Icharacter"
              />

              {/**/}
              <InputForm
                text="Nacionalidade:"
                type="text"
                value={character.nacionality}
                onChange={updateInfo}
                id="Inacionality"
              />
              {/**/}
              <InputForm
                text="Idade:"
                type="number"
                value={character.age}
                onChange={updateInfo}
                id="Iage"
              />

              {/**/}
              <InputForm
                text="Campanha:"
                type="text"
                value={character.campaign}
                onChange={updateInfo}
                id="Icampaign"
              />

              {/**/}
              <div className="flex flex-col items-center">
                <label
                  htmlFor="Iimg"
                  className="flex flex-col justify-center items-center gap-1 w-max p-1 rounded cursor-pointer"
                >
                  <img
                    src={character.img}
                    alt="Foto do Personagem"
                    id="imgPreview"
                    className="w-28 h-28 p-1 border rounded-full bg-white-500"
                  ></img>

                  <h2 className="flex flex-col text-center text-xs">
                    ADICIONAR FOTO
                  </h2>
                </label>

                <input
                  type="file"
                  id="Iimg"
                  accept="image/*"
                  className="hidden"
                  onChange={updateInfo}
                ></input>
              </div>
            </div>
          )}

          {sectionActive === 2 && (
            <div className="flex flex-col gap-1">
              <div className=" w-full bg-white-100">
                <h2 className="text-center text-xl">CARACTERÍSTICAS</h2>
              </div>

              <TextareaForm
                text="História:"
                id="Ihistory"
                value={character.history}
                onChange={updateFeatures}
              />

              <TextareaForm
                text="Personalidade:"
                id="Ipersonality"
                value={character.personality}
                onChange={updateFeatures}
              />

              <TextareaForm
                text="Aparência:"
                id="Iappearance"
                value={character.appearance}
                onChange={updateFeatures}
              />
            </div>
          )}

          {sectionActive === 3 && (
            <div className="flex flex-col h-full gap-1">
              <div className=" w-full bg-white-100">
                <h2 className="text-center text-xl">ORIGENS</h2>
              </div>

              {origins.map((element, index) => (
                <InputOrigins
                  key={index}
                  originTitle={element.origin[0]}
                  originInfo={element.origin[1]}
                  expertises0={element.expertises[0]}
                  expertises1={element.expertises[1]}
                  powerTitle={element.power[0]}
                  powerInfo={element.power[1]}
                />
              ))}
            </div>
          )}

          {sectionActive === 4 && (
            <>
              <div className=" w-full bg-white-100">
                <h2 className="text-center text-xl">ATRIBUTOS</h2>
              </div>
              <div className="flex flex-column justify-center items-center w-full h-full relative">
                <div className="w-96 h-96">
                  <img
                    src="./img/atributos-branco.png"
                    alt="Atributos"
                    className="w-96 h-96"
                  ></img>

                  <InputAttributes
                    id="agi"
                    value={character.attributes.agi}
                    onChange={updateAttribute}
                  />

                  <InputAttributes
                    id="int"
                    value={character.attributes.int}
                    onChange={updateAttribute}
                  />

                  <InputAttributes
                    id="vig"
                    value={character.attributes.vig}
                    onChange={updateAttribute}
                  />

                  <InputAttributes
                    id="pre"
                    value={character.attributes.pre}
                    onChange={updateAttribute}
                  />

                  <InputAttributes
                    id="for"
                    value={character.attributes.for}
                    onChange={updateAttribute}
                  />
                </div>
              </div>
            </>
          )}

          {sectionActive === 5 && (
            <>
              <div className=" w-full bg-white-100">
                <h2 className="text-center text-xl">PERÍCIAS</h2>
              </div>

              <div className="grid grid-cols-2 gap-2.5 p-1">
                {expertises.map((element, index) => (
                  <div
                    key={index}
                    className={
                      Math.floor(index / 2) % 2 === 0 ? "bg-light" : "bg-dark"
                    }
                  >
                    <InputExpertises
                      expertise={element.expertiseName}
                      info={element.info}
                      id={index}
                      value={character.expertises[index].expertise[2]}
                      onChange={updateExpertises}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </main>

        {/*Rodapé do formulário para criação do personagem*/}
        <footer className="flex justify-between p-1 border-t border-white-200">
          <button onClick={() => changeSection("sub")}>
            <span className="material-symbols-outlined">undo</span>
          </button>

          <button onClick={() => changeSection("add")}>
            <span className="material-symbols-outlined">redo</span>
          </button>
        </footer>
      </section>
    );
  } else {
    return null;
  }
};

export default FormCharacter;
