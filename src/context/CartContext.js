import { createContext, useState, useReducer, useEffect } from 'react';
import { cartReducer, cartActions } from '../reducers/cartReducer';

export const CartContext = createContext();

const CartContextProvider = ({ children })=>{
    const [cart, dispatch] = useReducer(cartReducer)

    return (
        <CartContextProvider values={values}>
            {children}
        </CartContextProvider>
    )
}