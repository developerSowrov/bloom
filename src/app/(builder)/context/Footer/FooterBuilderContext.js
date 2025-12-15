"use client";
import { createContext, useReducer } from "react";
import reducers from "./reducers.js";
import initialData from "./initialData.js";

export const FooterBuilderDataContext = createContext(null);
export const DispatchFooterBuilderContext = createContext(null);

export default function FooterBuilderProvider({ children }) {
    const [data, dispatch] = useReducer( reducers, initialData );
    return (
        <FooterBuilderDataContext value={data}>
            <DispatchFooterBuilderContext value={dispatch}>
                {children}
            </DispatchFooterBuilderContext>
        </FooterBuilderDataContext>
   );
};  