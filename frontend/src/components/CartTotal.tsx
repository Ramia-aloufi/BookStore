import { useContext } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"

const CartTotal = () => {
    const {currency,getCartAmount,delivery_charges} = useContext(ShopContext)
  return (
    <div className="w-full p-3 bg-white rounded">
        {/* Title */}
        <Title title1={"Cart"} titleStyle={"h3"} title2={"Total"} paraStyle={""}/>
        <div className="flexBetween pt-3">
            <h5 className="h5" >Subtotal:</h5>
            <p  className="h5">{currency} {(getCartAmount().toFixed(2))}</p>
        </div>
        <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
        <div className="flexBetween pt-3">
            <h5 className="h5">Shipping fee:</h5>
            <p  className="h5">{(getCartAmount() == 0 ? "0.00":`${currency}${delivery_charges}.00`)}</p>
        </div>
        <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
        <div className="flexBetween pt-3">
            <h5 className="h5">Total:</h5>
            <p  className="h5">{currency} {getCartAmount() == 0 ? "0.00": getCartAmount() + delivery_charges}</p>
        </div>
    </div>
  )
}

export default CartTotal