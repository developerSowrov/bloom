import { useContext } from "react";
import { DispatchContext } from "./Context.js";
export function useDispatch() { return useContext(DispatchContext); };
