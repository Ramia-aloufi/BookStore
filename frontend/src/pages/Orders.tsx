import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import axios from "axios"
import { Order, OrderData, OrderInfo, OrderItem } from "../types/types"
import Title from "../components/Title"
import Footer from "../components/Footer"

const Orders = () => {
    const{token, currency,backend_url} = useContext(ShopContext)
    const [orders, setOrders] = useState<OrderInfo[]>([])

    const loadOrderData = async()=>{
        try {
            if(!token){return null} 
            const response = await axios.post(`${backend_url}/api/order/user`,{},{headers:{Authorization:`Bearer ${token}`}})
            if(response.data.success){
                const allOrders:OrderInfo[] = []
                response.data.orders.map((order:Order)=>{
                    const orderStatus:OrderData  = {} as OrderData
                    orderStatus.date = order.date
                    orderStatus.payment = order.payment
                    orderStatus.paymentMethod = order.paymentMethod
                    orderStatus.status = order.status
                    order.items.map((item:OrderItem)=>{
                        allOrders.push({orderItem:item,orderData:orderStatus})
                    })
                    
                    console.log(orderStatus);
                })
                setOrders(allOrders.reverse())
                console.log(allOrders.reverse());
                
            }
            
        } catch (error) {
            console.log(error);
            
            
        }

    }
    useEffect(()=>{
        loadOrderData()

    },[token])

  return (
    <section className="max-padd-container">
        <div className="pt-24 pb-10">
            <Title title1={"Order"} titleStyle={"h3"} title2={"List"} paraStyle={""}/>
        </div>
        {orders && orders.map((order,i)=>(
            <div className="bg-white p-2 mt-3 rounded-xl" key={i}>
                <div className="text-gray-700 flex flex-col gap-4">
                    <div className="flex gap-x-3 w-full">
                        {/* Image */}
                        <div className="flex gap-6">
                        <img src={order.orderItem.image} alt="" width={55} className="aspect-square object-cover rounded" />
                        </div>
                        {/* Order Info */}
                        <div className="block w-full">
                            <h5 className="h5 capitalize line-clamp-1">{order.orderItem.name}</h5>
                            <div className="flexBetween">
                                <div className="">
                                    <div className="flex items-center gap-x-1 sm:gap-x-3">
                                        <div className="flexCenter gap-x-1">
                                            <h5 className="medium-14">Price</h5>
                                            <p>{currency}{order.orderItem.price}</p>
                                        </div>
                                        <div className="flexCenter gap-x-1">
                                            <h5 className="medium-14">Quantity</h5>
                                            <p> {order.orderItem.quantity}</p>
                                        </div>
                                        <div className="sm:flexCenter gap-x-1 hidden">
                                            <h5 className="medium-14">Payment:</h5>
                                            <p className="text-gray-400">{order.orderData.paymentMethod}</p>
                                        </div>
                                        </div>
                                        <div className="flex items-center gap-x-1 ">
                                            <h5 className="medium-14">Date:</h5>
                                            <p>{new Date(order.orderData.date).toDateString()}</p>
                                        </div>
                                        <div className="flex items-center gap-x-1 sm:hidden">
                                            <h5 className="medium-14">Payment:</h5>
                                            <p className="text-gray-400">{order.orderData.paymentMethod}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex items-center gap-2">
                                            <p className="min-w-2 min-h-2 rounded-full bg-secondary"></p>
                                            <p>{order.orderData.status}</p>
                                        </div>
                                        <button onClick={()=>loadOrderData()} className="btn-secondaryOne !px-1.5 !py-1 !text-xs ">Track Order</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <Footer/>
    </section>
  )
}

export default Orders