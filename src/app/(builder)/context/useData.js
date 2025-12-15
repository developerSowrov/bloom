import { useContext } from "react";
// import { Context } from "./Context.js";
import { DataContext } from "./Context.js";
export default function useData() { return useContext(DataContext);}