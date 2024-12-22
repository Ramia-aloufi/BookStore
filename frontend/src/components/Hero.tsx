import { Link } from "react-router-dom"
import hero from "../assets/hero.png"
import About from "./About"
const Hero = () => {
  return (
    <section className="max-padd-container ">
        <div className="grid grid-rows-1 md:grid-cols-[1.5fr_2fr] my-24">
            <div className="flex flex-1 flex-col pt-12 xl:pt-32">
                <h1 className="h1 max-w-[46rem]">Get Your New Book
                With The Best Price</h1>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. In aperiam voluptas 
                    facilis laboriosam quae, voluptatum aliquam,
                     placeat, deleniti veniam tempore temporibus 
                     modi error voluptatem cum dicta reprehenderit</p>
                     <div className="mt-6">
                        <Link to="/store" className="btn-secondaryOne">Explore</Link>
                     </div>
            </div>
            <div className="flexCenter">
                <div className="">
                    <img src={hero} height={450} width={450}></img>
                </div>
            </div>
        </div>
        <About/>
    </section>
  )
}

export default Hero