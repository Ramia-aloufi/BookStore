import { createContext, Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { Book } from "../types/data";
import { Cart } from "../data";


export type ShopContextType = {
    books: Book[];
    currency: string;
    navigate: NavigateFunction
    setToken: Dispatch<SetStateAction<string>>
    token:string,
    cartItems:Cart,
    setCartItems:Dispatch<SetStateAction<Cart>>,
    addToCart:(itemId: string) => Promise<void>,
    getCartCount:()=>number | undefined
    getCartAmount:() => number
    updateQuantity:(itemId: string, quantity: number) => void
    delivery_charges:number
  }



export const ShopContext = createContext<ShopContextType>({} as ShopContextType );

