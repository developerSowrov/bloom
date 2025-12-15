import { createContext, useReducer } from "react";
import reducers from "./reducers.js";
import initialData from "./data.js";

export const DataContext = createContext(null);
export const DispatchContext = createContext(null);

export default function Provider() {
    const [data, dispatch] = useReducer( reducers, initialData  );
    return (
        <DataContext value={data}>
            <DispatchContext value={dispatch}>
                {children}
            </DispatchContext>
        </DataContext>
   );
};