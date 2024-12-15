import { useState } from "react"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import Footer from "../components/Footer"

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod')
  return (
    <section className="max-padd-container">
        {/* Container */}
        <form className="pt-28">
            <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
                {/* left side */}
                <div className="flex flex-1 flex-col gap-3 text-[95%]">
                    <Title title1={"Delivery"} titleStyle={"h3"} title2={"Information"} paraStyle={""}/>
                    <div className="flex gap-3">
                        <input type="text" name="firstName" placeholder="First name" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                        <input type="text" name="lastName" placeholder="Last name" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                    </div>
                    <input type="email" name="email" placeholder="Email" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />
                    <input type="number" name="phone" placeholder="Phone number" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />
                    <input type="text" name="street" placeholder="email" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />
                    <div className="flex gap-3">
                        <input type="text" name="city" placeholder="City" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                        <input type="text" name="state" placeholder="State" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name="zipCode" placeholder="Zip code" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                        <input type="text" name="country" placeholder="Country" className="ring-1 ring-sky-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
                    </div>
                </div>
                {/* Right side */}
                <div className="flex flex-1 flex-col">
                    <CartTotal/>
                    {/* Payment method */}
                    <div className="my-6">
                        <h3 className="bold-20 mb-5">Payment <span className="text-secondary">Method</span></h3>
                        <div className="flex gap-3">
                            <div onClick={()=>setMethod('stripe')} className={`${method === 'stripe' ? "btn-secondary" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div>
                            <div onClick={()=>setMethod('cod')} className={`${method === 'cod' ? "btn-secondary" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash on delivery</div>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="btn-secondaryOne">Place order</button>
                    </div>
                </div>
            </div>

        </form>
        <Footer/>
    </section>
  )
}

export default PlaceOrder