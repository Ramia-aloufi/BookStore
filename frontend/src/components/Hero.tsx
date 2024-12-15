import { Link } from "react-router-dom"
import hero from "../assets/hero.png"
const Hero = () => {
  return (
    <section className="max-padd-container py-20 xl:py-36">
        <div className="flexCenter gap-12 flex-col xl:flex-row">
            <div className="flex flex-1 flex-col pt-12 xl:pt-32">
                <h1 className="h1 max-w-[46rem]">Discover Books that inspire your world</h1>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. In aperiam voluptas 
                    facilis laboriosam quae, voluptatum aliquam,
                     placeat, deleniti veniam tempore temporibus 
                     modi error voluptatem cum dicta reprehenderit</p>
                     <div className="mt-6">
                        <Link to="/store" className="btn-secondaryOne">Explore</Link>
                     </div>
            </div>
            <div className=" flex flex-1 relative z-10 top-12">
                <div className="">
                    <img src={hero} height={588} width={588}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero