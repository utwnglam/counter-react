import Counter from "./Counter";
import {useEffect, useState} from "react";

const CounterGroup = (props) => {
    const {size, increase, decrease} = props;
    const [counterArray, setCounterArray] = useState([]);
    useEffect(() => {
        setCounterArray([]);
        setCounterArray(
            Array.from(Array(parseInt(size))).map((value) => {
                return <Counter key={value} increaseSum={increase} decreaseSum={decrease} />;
            })
        )
    }, [decrease, increase, size])

    return (
        <div>
            {counterArray}
        </div>
    );
}

export default CounterGroup;
