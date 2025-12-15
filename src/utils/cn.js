import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names intelligently, including handling conditional classes and Tailwind class conflicts.
 * 
 * @param {...(string | number | boolean | null | undefined | Array)} inputs - Class names, arrays, or conditional values.
 * @returns {string} - A single string of merged class names with Tailwind conflicts resolved.
 * 
 * @example
 * cn("btn", false, "btn-primary", ["rounded", null, ["shadow"]]);
 * // Returns: "btn btn-primary rounded shadow"
 */
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cn;