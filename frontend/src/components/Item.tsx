import { TbShoppingBagPlus } from "react-icons/tb"
import { Book } from "../types/data"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext";

type ItemsProps = {
    book:Book
}
const Item = ({book}:ItemsProps) => {
    const {currency ,addToCart} = useContext(ShopContext)


  return (
    <div className="shadow-sm h-[400px] shadow-slate-900/10 rounded-lg grid grid-rows-[2fr_1fr]">
        
    <div className="flexCenter  overflow-hidden relative group">
        <img src={book.image} alt="bookImage" className=" h-full w-full object-center overflow-hidden rounded" />
    </div>
    <div className=" p-3 overflow-hidden ">
        <div className="flexBetween">
        <h4 className="h4 line-clamp-1 !my-0">{book.name}</h4>
        <span onClick={()=>addToCart(book._id)} className="flexCenter h-8 w-8 rounded cursor-pointer hover:bg-primary"><TbShoppingBagPlus className="text-lg"/></span>
    </div>
    <div className="flex justify-between pt-1">
        <p className="font-bold capitalize">{book.category}</p>
        <h5 className="h5 text-secondaryOne pr-2">{currency}{book.price}</h5>
    </div>
    <p className="line-clamp-2 ">{book.description}</p>
    </div>
    </div>
  )
}

export default Item