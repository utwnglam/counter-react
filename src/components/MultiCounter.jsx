import CounterSizeGenerator from "./CounterSizeGenerator";
import {useEffect, useState} from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

const MultiCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);
    const increase = () => {
        setSum(sum+1);
    }
    const decrease = () => {
        setSum(sum-1);
    }

    useEffect(() => {
        setSum(0);
    }, [size])

    return (
        <div>
            <CounterSizeGenerator size={size} setSize={setSize} />
            <CounterGroupSum sum={sum} />
            <CounterGroup size={size} increase={increase} decrease={decrease}/>
        </div>
    );
}

export default MultiCounter;