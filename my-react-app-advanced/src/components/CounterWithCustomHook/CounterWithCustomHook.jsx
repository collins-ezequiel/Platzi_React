import useCounter from "../../hooks/useCounter";
const CounterWithCustomHook = () => {


    const {
        count,
        incerement,
        decrement,
        reset
    } = useCounter(10);

    return (
        <>
            <p>Contador: {count} </p>
            <button onClick={incerement}>incerement</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>
        </>


    )
}

export default CounterWithCustomHook;