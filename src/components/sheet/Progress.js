const Progress = (props) => {

    return (
        <>
            <div className="flex flex-col">
                <span className="text-center">{props.name}</span>

                <span className="text-center">{props.currentValue}/{props.amount}</span>

                <div className="flex flex-row justify-center items-center gap-3.5 p-2">
                    <button className="flex justify-center items-center px-2 border rounded text-lg" onClick={props.sub5}>-5</button>

                    <button className="flex justify-center items-center px-2 border rounded text-lg" onClick={props.sub1}>-1</button>

                    <progress 
                        className="w-full border border-white-500 rounded progressBar" 
                        value={props.value} 
                        max={props.maxValue}
                        style={{ "--progress-color": props.color }}
                    >                    
                    </progress>

                    <button className="flex justify-center items-center px-2 border rounded text-lg" onClick={props.add1}>+1</button>

                    <button className="flex justify-center items-center px-2 border rounded text-lg" onClick={props.add5}>+5</button>
                </div>
            </div>
        </>
    );
};

export default Progress;
