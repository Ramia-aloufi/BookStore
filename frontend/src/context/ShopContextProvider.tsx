import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart, books } from "../data";
import { ShopContextType, ShopContext } from "./ShopContext";

type ShopContextProviderProps = {
  children: ReactNode;
};
const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_charges = 5
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");
  const [cartItems, setCartItems] = useState<Cart>({} as Cart);

  const addToCart = async (itemId: string) => {
    const cartData: Cart = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
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
  const updateQuantity = (itemId: string, quantity: number) => {
    const cartData: Cart = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

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
    delivery_charges
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
