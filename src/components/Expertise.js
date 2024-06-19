const Expertise = (props) => {
    return (
        <div className="flex flex-col justify-between items-center w-max p-1 border border-white-300 rounded-sm">
            <img src="./img/d20.png" alt="D20" className="w-9"></img>

            <span>{props.expertise}</span>

            <select className="bg-transparent border border-white-400 rounded-sm text-center outline-none">
                <option className="bg-black border text-white-500" value={0}>
                    Destreinado
                </option>
                <option className="bg-black border text-white-500" value={5}>
                    Treinado
                </option>
                <option className="bg-black border text-white-500" value={10}>
                    Veterano
                </option>
                <option className="bg-black border text-white-500" value={15}>
                    Expert
                </option>
            </select>
        </div>
    );
};

export default Expertise;
