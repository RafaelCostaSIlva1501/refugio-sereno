const InputOrigins = (props) => {
    return (
        <div className="flex flex-row gap-5 p-1.5">
            <input type="radio" name="origin" value={props.originTitle}></input>

            <details className="flex flex-col gap-2 w-full p-4 border border-white-500 rounded">
                <summary className="text-lg font-bold cursor-pointer">
                    {props.originTitle}
                </summary>

                <p className="mt-2 text-gray-500">{props.originInfo}</p>

                <div className="flex flex-row items-center mt-4">
                    <p>
                        <span className="text-red-500 font-semibold">
                            Perícias Treinadas:
                        </span> {props.expertises0} e {props.expertises1}
                    </p>
                </div>

                <div className="flex flex-row items-center mt-4">
                    <p>
                        <span className="text-red-500 font-semibold">
                            {props.powerTitle}:
                        </span> {props.powerInfo}
                    </p>
                </div>
            </details>
        </div>
    );
};

export default InputOrigins;
