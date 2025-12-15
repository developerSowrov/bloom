"use client";
import { createContext, useReducer } from "react";
import reducers from "./reducers.js";
import initialData from "./initialData.js";

export const HeroBuilderDataContext = createContext(null);
export const DispatchHeroBuilderContext = createContext(null);

export default function HeroBuilderProvider({ children }) {
    const [data, dispatch] = useReducer( reducers, initialData );
    return (
        <HeroBuilderDataContext value={data}>
            <DispatchHeroBuilderContext value={dispatch}>
                {children}
            </DispatchHeroBuilderContext>
        </HeroBuilderDataContext>
   );
};