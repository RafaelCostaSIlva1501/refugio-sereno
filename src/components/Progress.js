const Progress = (props) => {
    return (
        <>
            <div className="flex flex-col">
                <span className="text-center">{props.name}</span>

                <div className="flex flex-row justify-center items-center gap-3.5 p-2">
                    <button className="text-lg">&lt;&lt;5</button>

                    <button className="text-lg">&lt;1</button>

                    <progress 
                        className="w-full progressBar" 
                        value={props.value} 
                        max={props.maxValue}
                        style={{ "--progress-color": props.color }}
                    >                    
                    </progress>

                    <button className="text-lg">1&gt;</button>

                    <button className="text-lg">5&gt;&gt;</button>
                </div>
            </div>
        </>
    );
};

export default Progress;
