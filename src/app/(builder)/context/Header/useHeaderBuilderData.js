
import { useContext } from 'react';
import { HeaderBuilderDataContext } from './HeaderBuilderContext.js';
export default function useHeaderBuilderData() { return useContext(HeaderBuilderDataContext);}