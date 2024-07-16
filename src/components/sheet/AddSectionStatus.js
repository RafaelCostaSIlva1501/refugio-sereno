const AddSectionStatus = ({ children, OnClick, title }) => {
    return (
        <>
            <header className="flex flex-row items-center gap-1.5 w-full p-1 bg-white-100">
                <button
                    className="flex flex-row justify-center gap-1 border hover:bg-white-500 hover:text-black-500 transition"
                    onClick={OnClick}
                >
                    <span className="material-symbols-outlined">add</span>
                </button>

                <h2 className="text-sm">{title}</h2>
            </header>

            <div className="relative h-full overflow-y-auto scrollbar">
                <div className="flex flex-row flex-wrap gap-1 absolute">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AddSectionStatus;
