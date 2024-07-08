const Progress = (props) => {
    return (
        <>
            <div className="flex flex-col">
                <span className="text-center">{props.name}</span>

                <div className="flex flex-row justify-center items-center gap-3.5 p-2">
                    <button
                        className="flex justify-center items-center text-lg"
                        onClick={props.sub5}
                    >
                        <span className="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                    </button>

                    <button
                        className="flex justify-center items-center text-lg"
                        onClick={props.sub1}
                    >
                        <span className="material-symbols-outlined">
                            keyboard_arrow_left
                        </span>
                    </button>

                    <div className="relative flex justify-center items-center w-full">
                        <span className="absolute text-center">
                            {props.currentValue}/{props.amount}
                        </span>

                        <progress
                            className="w-full bg-white-100 rounded progressBar transition"
                            value={props.value}
                            max={props.maxValue}
                            style={{ "--progress-color": props.color }}
                        ></progress>
                    </div>

                    <button
                        className="flex justify-center items-center text-lg"
                        onClick={props.add1}
                    >
                        <span className="material-symbols-outlined">
                            keyboard_arrow_right
                        </span>
                    </button>

                    <button
                        className="flex justify-center items-center text-lg"
                        onClick={props.add5}
                    >
                        <span className="material-symbols-outlined">
                            keyboard_double_arrow_right
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Progress;
