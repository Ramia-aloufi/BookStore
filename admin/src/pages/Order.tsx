import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { backend_url, currency } from "../data/data";
import { toast } from "react-toastify";
import { OrderList } from "../model/order";
import { TfiPackage } from "react-icons/tfi";

type OrderProps = {
  token: string | null;
};
const Order = ({ token }: OrderProps) => {
  const [order, setOrder] = useState<OrderList[]>([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        `${backend_url}/api/order/list`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      console.log(token);

      if (response.data.success) {
        console.log(response.data.orders);

        setOrder(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  const onStatusChange = async(e:ChangeEvent<HTMLSelectElement>,orderId:string)=>{
    try {
      const status = e.target.value
      const response = await axios.post(`${backend_url}/api/order/status`,{orderId,status},{headers:{
        Authorization:`Bearer ${token}`
      }})
      if(response.data.success){
        toast.success(response.data.message)

        await fetchAllOrders()
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      toast.error((error as Error).message)

    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-2  sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-4">
        {order &&
          order.map((item) => (
            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start p-3 text-gray-700 bg-white rounded-lg" key={item._id}>
              <div className="hidden xl:block ring-1 ring-slate-900/5 rounded p-7 bg-primary">
                <TfiPackage className="text-3xl text-secondary" />
              </div>
              <div className="">
                <div className="flex items-start gap-1">
                  <div className="medium-14">Items:</div>
                  <div className="flex flex-col relative top-0.5">
                    {item.items.map((list) => (
                      <p key={list._id}>
                        {list.name} x {list.quantity}
                      </p>
                    ))}
                  </div>
                </div>
                <p>
                  <span className="text-secondary medium-14">Name:</span>
                  {item.address.firstName + " " + item.address.lastName}
                </p>
                <p>
                  <span className="text-secondary medium-14">Address</span>
                  {item.address.street +
                    ", " +
                    item.address.city +
                    ", " +
                    item.address.state +
                    ", " +
                    item.address.country +
                    ", " +
                    item.address.zipCode}
                </p>
                <p>{item.address.phone}</p>
              </div>
              <div className="">
                <p>
                  <span className="text-tertiary medium-14">Total:</span>
                  {item.items.length}
                </p>
                <p>
                  <span className="text-tertiary medium-14">Method:</span>
                  {item.paymentMethod}
                </p>
                <p>
                  <span className="text-tertiary medium-14">Payment:</span>
                  {item.payment ? "Done" : "Pending"}
                </p>
                <p>
                  <span className="text-tertiary medium-14">Date:</span>
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
              <p>
                <span className="text-tertiary medium-14">Price:</span>
                {currency}
                {item.amount}
              </p>
              <select onChange={(e)=>onStatusChange(e,item._id)} value={item.status} className="p1 ring-1 ring-slate-900/5 rounded max-w-36 bg-primary text-xs font-semibold">
              <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>

              </select>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Order;
