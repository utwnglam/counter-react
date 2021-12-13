import {useState} from "react";

const Counter = (props) => {
    const {increaseSum, decreaseSum} = props;
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number+1);
        increaseSum();
    }
    const decrease = () => {
        setNumber(number-1);
        decreaseSum();
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;