import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "../data";
import { ShopContextType, ShopContext } from "./ShopContext";
import { Book } from "../types/data";
import axios from "axios";
import { toast } from "react-toastify";

type ShopContextProviderProps = {
  children: ReactNode;
};
const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_charges = 5
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([])
  const [cartItems, setCartItems] = useState<Cart>({} as Cart);
  const backend_url = import.meta.env.VITE_BACKEND_URL

  const addToCart = async (itemId: string) => {
    const cartData: Cart = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    if(token){
      try {
        await axios.post(`${backend_url}/api/cart/add`,{itemId},{headers:{
          Authorization: `Bearer ${token}`
        }})
        
      } catch (error) {
        toast.error((error as Error).message)
        
      }
    }

    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      try {
        if (cartItems[item] > 0) {
          totalCount += cartItems[item];
        }
      } catch (err) {
        console.log(err);
      }
    }
    return totalCount;
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = books.find((books) => books._id == item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  const updateQuantity = async(itemId: string, quantity: number) => {
    const cartData: Cart = { ...cartItems };
    cartData[itemId] = quantity;
    try {
      if(token){
        await axios.post(`${backend_url}/api/cart/update`,{itemId,quantity},{headers:{
          Authorization: `Bearer ${token}`
        }})
      
    }}catch (error) {
      toast.error((error as Error).message)

    }

    
    setCartItems(cartData);
  };
  const getAllBooks = async() =>{
    try {
      const response = await axios.get(`${backend_url}/api/book/all`)
      if(response.data.success){
        setBooks(response.data.book)
      }
      
    } catch (error) {
      toast.error((error as Error).message)
      
    }

  }
  const getUserCart = async(tk:string)=>{
    try {      
       const response = await axios.post(`${backend_url}/api/cart/get`,{},{headers:{
          Authorization: `Bearer ${tk}`
        }})
        if(response.data.success){
          setCartItems(response.data.cartData)
        }
      
    }catch (error) {
      toast.error((error as Error).message)

    }
  }
  useEffect(()=>{
    if(!token && localStorage.getItem("token")){
      setToken(localStorage.getItem("token") ?? "")
      getUserCart(localStorage.getItem("token") ?? "")

    }
    getAllBooks()
  },[])

  const contextValue: ShopContextType = {
    books,
    currency,
    navigate,
    setToken,
    token,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    delivery_charges,
    backend_url
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
