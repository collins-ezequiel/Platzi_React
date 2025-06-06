import { useReducer } from "react";

// Definimos el tipo del estado
type State = {
    count: number;
};

// Definimos el tipo de las acciones
type Action = {
    type: "increment" | "decrement";
};

// Reducer con tipos aplicados
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment: {state.count}
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </div>
    );
};

export default CounterWithUseReducer;