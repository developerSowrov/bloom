
import { useContext } from 'react';
import { BuilderDataContext } from "./BuilderContext.js";
export default function useBuilderData() { return useContext(BuilderDataContext);}