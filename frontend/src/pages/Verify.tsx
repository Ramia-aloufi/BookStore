import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const Verify = () => {
    const {token,backend_url,setCartItems,navigate} = useContext(ShopContext)
    const[searchParams]=useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get("orderId")


const verifyPayment = async()=>{
    try {
        if(!token){
            return null 
        }
       const response = await axios.post(`${backend_url}/api/order/verify`,{success,orderId},{headers:{Authorization:`Bearer ${token}`}})
        if(response.data.success){
            setCartItems({})
            navigate("/orders")
        }else{
            toast.error(response.data.message)

        }
    } catch (error) {
        toast.error((error as Error).message)
        
    }
}
useEffect(()=>{
    verifyPayment()
},[token])

  return (
    <div>Verify</div>
  )
}

export default Verify