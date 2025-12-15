
import { useContext } from 'react';
import { HeroBuilderDataContext } from "./HeroBuilderContext.js";
export default function useHeroBuilderData() { return useContext(HeroBuilderDataContext);}