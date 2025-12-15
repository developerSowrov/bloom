import { useContext } from "react";
import { DispatchHeaderBuilderContext } from "./HeaderBuilderContext";
export default function useHeaderBuilderDispatch() { return useContext(DispatchHeaderBuilderContext); };