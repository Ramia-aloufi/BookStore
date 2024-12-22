import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import PopularBook from "../components/PopularBook"

const Home = () => {
  return (
<> 
<Hero/>
<NewArrival/>
<PopularBook/>
{/* <Features/> */}
<div className="max-padd-container bg-white">
  <Footer/>
</div>
</> )
}

export default Home