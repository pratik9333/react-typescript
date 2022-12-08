
import React, { useReducer } from "react";

type counterState = {
    count: number
}

// this feature is called discriminated unions in typescript and recomended approach to write useReducer functions.

type resetAction = {
    type: 'reset'
}

type counterAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type actionCounter = resetAction | counterAction;


const initialState: counterState = { count: 0 };

function reducer(state: counterState, action: actionCounter) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count + action.payload }
        case 'reset':
            return initialState;
        default:
            return state
    }
}


export const counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count : {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                reset
            </button>
        </>
    )
}