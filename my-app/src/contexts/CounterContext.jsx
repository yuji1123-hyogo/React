import React, { useContext, useReducer } from 'react'
import { createContext } from "react";


const CounterStateContext = createContext(null)
const counterDispatchContext = createContext(null)

export const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET_ALL: 'RESET_ALL'
}

const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0
}

const counterReducer = (state, action) => {
    switch (action.type){
        case COUNTER_ACTIONS.INCREMENT:
            return{
                ...state,
                [action.counterId]: state[action.counterId] + 1
            }
        case COUNTER_ACTIONS.DECREMENT:
            return{
                ...state,
                [action.counterId]: state[action.counterId] - 1
            }
        case COUNTER_ACTIONS.RESET_ALL:
            return initialState

        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

export default function CounterContextProvider({children}) {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <CounterStateContext.Provider value={state}>
        <counterDispatchContext.Provider value={dispatch}>
            {children}
        </counterDispatchContext.Provider>
    </CounterStateContext.Provider>
  )
}

//useContextをラップしたカスタムフック
export const useCounterState =()=> {
    const context = useContext(CounterStateContext)
    if(!context){
        throw new Error('CounterContextProviderの中で利用してください')
    }
    return context
}

export const useCounterDispatch =()=> {
    const context = useContext(counterDispatchContext)
    if(!context){
        throw new Error('CounterContextProviderの中で利用してください')
    }
    return context
}


export function useCounterRESET() {
  const dispatch = useCounterDispatch();
  
  const resetAll = () => {
    dispatch({ type: COUNTER_ACTIONS.RESET_ALL });
  };
  
  return { resetAll };
}