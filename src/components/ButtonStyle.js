const ButtonStyle = ({ name, onClick }) => {
    return (
        <button 
        className="flex justify-center items-center w-12 h-12 p-2.5 rounded-full hover:bg-white-100" onClick={onClick}>
            <span className="material-symbols-outlined">{name}</span>
        </button>
    );
};

export default ButtonStyle;
