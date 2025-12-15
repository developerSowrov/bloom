
import { useContext } from 'react';
import { FooterBuilderDataContext } from "./FooterBuilderContext.js";
export default function useFooterBuilderData() { return useContext(FooterBuilderDataContext);}