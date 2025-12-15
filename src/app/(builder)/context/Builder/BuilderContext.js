"use client";
import { createContext, useReducer } from "react";
import reducers from "./reducers.js";
import initialData from "./initialData.js";

export const BuilderDataContext = createContext(null);
export const DispatchBuilderContext = createContext(null);

export default function Provider({ children }) {
    const [data, dispatch] = useReducer( reducers, initialData );
    return (
        <BuilderDataContext value={data}>
            <DispatchBuilderContext value={dispatch}>
                {children}
            </DispatchBuilderContext>
        </BuilderDataContext>
   );
};