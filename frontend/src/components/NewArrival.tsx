import Title from "./Title"
import { Swiper,SwiperSlide } from "swiper/react";
import {Autoplay,Pagination} from'swiper/modules'
import { useContext, useEffect, useState } from "react";
import { Book } from "../types/data";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewArrival = () => {
    const [newArrival, setNewArrival] = useState<Book[]>([])
    const {books} = useContext(ShopContext)

 
    useEffect(()=>{
        const data = books.slice(0,7)
        setNewArrival(data.reverse())

    },[books])
  return (
    <section className="max-padd-container py-16 bg-white">
        <Title title1={'New '} title2={'Arrival'} paraStyle="!block" titleStyle="h3"/>
    <Swiper 
    autoplay={{
            delay:3500,
            disableOnInteraction:false
        }} pagination={{
            clickable:true
        }}
        breakpoints={{
            400:{
              slidesPerView:2,
              spaceBetween:30  
            },
            700:{
                slidesPerView:3,
                spaceBetween:30  
              },
            1024:{
                slidesPerView:4,
                spaceBetween:30  
              },
            1200:{
                slidesPerView:5,
                spaceBetween:30  
              }
         }}
         modules={[Pagination,Autoplay]}
         className="h-[455px] sm:h-[488px] mt-5"

        >  
        {newArrival && newArrival.map((book)=>(
            <SwiperSlide key={book._id}>
                <Item book={book}/>

            </SwiperSlide>
        ))

        }

    </Swiper>
    </section>
  )
}

export default NewArrival


