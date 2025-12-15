import { useContext } from "react";
import { DispatchHeroBuilderContext } from "./HeroBuilderContext.js"; 
export default function useHeroBuilderDispatch() { return useContext(DispatchHeroBuilderContext); };