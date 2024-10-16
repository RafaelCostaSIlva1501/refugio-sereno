const inputExpertise = ({ expertise, id, value, onChange }) => {
  return (
    <div className="flex flex-col justify-between items-center justify-self-center self-center w-full border border-white-500 rounded-sm">
      <div className="flex flex-row justify-center items-center gap-2.5 w-full p-2 border-b ">
        <span className="text-lg">{expertise}</span>

        <span className="material-symbols-outlined flex flex-row justify-center items-center text-md cursor-pointer">
          info
        </span>
      </div>

      <div className="flex justify-center w-full p-2">
        <select
          className="bg-transparent border rounded-sm text-center outline-none cursor-pointer"
          id={id}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
        >
          <option className="bg-black-500 border text-white-500" value={0}>
            Destreinado
          </option>
          <option className="bg-black-500 border text-white-500" value={5}>
            Treinado
          </option>
          <option className="bg-black-500 border text-white-500" value={10}>
            Veterano
          </option>
          <option className="bg-black-500 border text-white-500" value={15}>
            Expert
          </option>
        </select>
      </div>
    </div>
  );
};

export default inputExpertise;
