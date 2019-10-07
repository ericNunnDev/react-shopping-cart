import { createContext } from 'react';
export const CartContext = createContext();
export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;