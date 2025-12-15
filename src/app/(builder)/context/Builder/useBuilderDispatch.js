import { useContext } from "react";
import { DispatchBuilderContext } from "./BuilderContext";
export default function useBuilderDispatch() { return useContext(DispatchBuilderContext); };
