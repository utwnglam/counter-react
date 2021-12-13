const CounterSizeGenerator = (props) => {
    const {size, setSize} = props;

    const handleChangeSize = (event) => {
        if (parseInt(event.target.value) >= 0) {
            setSize(event.target.value);
        }
    }

    return (
        <div>
            <span>size:</span>
            <input value={size}
                   type="number"
                   onChange={handleChangeSize}
                   min={0}/>
        </div>
    );
}

export default CounterSizeGenerator;