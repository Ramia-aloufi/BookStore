import { ChangeEvent, FormEvent, useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    books,
    cartItems,
    token,
    setCartItems,
    delivery_charges,
    getCartAmount,
    navigate,
    backend_url,
  } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async(e: FormEvent) => {
    e.preventDefault();

    try {
      const orderItems = [];

      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = books.find((book) => book._id == itemId);
          if (itemInfo) {
            orderItems.push({
              ...itemInfo,
              quantity: cartItems[itemId],
            });
          }
        }
      }

      const orderData = {
        address:formData,
        items:orderItems,
        amount: getCartAmount() + delivery_charges
      }

      switch(method){
        case 'cod': {
        const response = await axios.post(`${backend_url}/api/order/place`,orderData,{headers:{Authorization:`Bearer ${token}`}})
        if(response.data.success){
            setCartItems({})
            navigate("/orders")
        }else{
            toast.error(response.data.message)
        }
        break;}
        case "stripe":{
          const responseStripe = await axios.post(`${backend_url}/api/order/stripe`,orderData,{headers:{Authorization:`Bearer ${token}`}})
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data
            console.log(session_url);
            
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
        }

        break;}
        
     default:break

      }
      
    } catch (error) {
        console.log(error);
        
    }
  };
  return (
    <section className="max-padd-container">
      {/* Container */}
      <form onSubmit={onSubmitHandler} className="pt-28">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
          {/* left side */}
          <div className="flex flex-1 bg-white p-4 rounded flex-col gap-3 text-[95%]">
            <Title
              title1={"Delivery"}
              titleStyle={"h3"}
              title2={"Information"}
              paraStyle={""}
            />
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                value={formData.firstName}
                type="text"
                name="firstName"
                placeholder="First name"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
              <input
                onChange={onChangeHandler}
                value={formData.lastName}
                type="text"
                name="lastName"
                placeholder="Last name"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
            </div>
            <input
              onChange={onChangeHandler}
              value={formData.email}
              type="email"
              name="email"
              placeholder="Email"
              className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              required
            />
            <input
              onChange={onChangeHandler}
              value={formData.phone}
              type="number"
              name="phone"
              placeholder="Phone number"
              className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              required
            />
            <input
              onChange={onChangeHandler}
              value={formData.street}
              type="text"
              name="street"
              placeholder="street"
              className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              required
            />
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                value={formData.city}
                type="text"
                name="city"
                placeholder="City"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
              <input
                onChange={onChangeHandler}
                value={formData.state}
                type="text"
                name="state"
                placeholder="State"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
            </div>
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                value={formData.zipCode}
                type="text"
                name="zipCode"
                placeholder="Zip code"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
              <input
                onChange={onChangeHandler}
                value={formData.country}
                type="text"
                name="country"
                placeholder="Country"
                className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                required
              />
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-1 flex-col">
            <CartTotal />
            {/* Payment method */}
            <div className="my-6 bg-white p-4 rounded">
              <h3 className="bold-20 mb-5">
                Payment <span className="text-secondary">Method</span>
              </h3>
              <div className="flex gap-3">
                <div
                  onClick={() => setMethod("stripe")}
                  className={`${
                    method === "stripe" ? "btn-secondary" : "btn-white"
                  } !py-1 text-xs cursor-pointer`}
                >
                  Stripe
                </div>
                <div
                  onClick={() => setMethod("cod")}
                  className={`${
                    method === "cod" ? "btn-secondary" : "btn-white"
                  } !py-1 text-xs cursor-pointer`}
                >
                  Cash on delivery
                </div>
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn-secondaryOne">
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </section>
  );
};

export default PlaceOrder;
