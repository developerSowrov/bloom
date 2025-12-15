import { useContext } from "react";
import { DispatchFooterBuilderContext } from "./FooterBuilderContext";
export default function useFooterBuilderDispatch() { return useContext(DispatchFooterBuilderContext); };