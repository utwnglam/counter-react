import {useEffect, useState} from "react";

const CounterGroupSum = (props) => {
    const [sum, setSum] = useState(props.sum);

    useEffect(() => {
        setSum(props.sum);
    }, [props])

    return (
      <div>
          <span>Sum: {sum}</span>
      </div>
    );
}

export default CounterGroupSum;