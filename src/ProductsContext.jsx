// use context so products is globally available
import { createContext, useContext } from "react";

// create a context object
export const ProductsContext = createContext();

// create a custom hook to use the ProductsContext
export function useProducts() {
  return useContext(ProductsContext);
}
