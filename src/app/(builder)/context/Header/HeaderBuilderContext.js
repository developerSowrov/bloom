"use client";
import { createContext, useReducer } from "react";
import reducers from "./reducers.js";
import initialData from "./initialData.js";

export const HeaderBuilderDataContext = createContext(null);
export const DispatchHeaderBuilderContext = createContext(null);

export default function Provider({ children }) {
    const [data, dispatch] = useReducer( reducers, initialData );
    return (
        <HeaderBuilderDataContext value={data}>
            <DispatchHeaderBuilderContext value={dispatch}>
                {children}
            </DispatchHeaderBuilderContext>
        </HeaderBuilderDataContext>
   );
};