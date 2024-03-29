import { createContext, useReducer } from "react";
import { InitialState, reducer } from "../reducers/TasbehReducer";

export const StateContext = createContext()
const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>)
}
export default StateContextProvider;