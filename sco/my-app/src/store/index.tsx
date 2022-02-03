import React, { createContext, useContext, useReducer } from 'react'
import { Reducer } from './reducer'
import { Action } from './action'
import GlobalState from '../shared/type/GlobalState'
import { initialState } from './initialState'

export const StateCtx = createContext(initialState)

export const DispatchCtx = createContext((() => null) as React.Dispatch<Action>)

export const StoreProvider: React.ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
  
    return (
        <DispatchCtx.Provider value={dispatch}>
            <StateCtx.Provider value={{...state, dispatch} as GlobalState}>{children}</StateCtx.Provider>
        </DispatchCtx.Provider>
    )
}

export const useDispatch = () => useContext(DispatchCtx)
