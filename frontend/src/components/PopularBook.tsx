import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"
import Item from "./Item"
import { Book } from "../types/data"

const PopularBook = () => {
  const {books} = useContext(ShopContext)

  const [popularBooks, setPopularBooks] = useState<Book[]>([])


  useEffect(()=>{
    const data = books.filter(Item => Item.popular)

    setPopularBooks(data.slice(0,5))

  },[books])
  return (
    <section className="max-padd-container py-9 bg-white">
      <Title title1={"Popular "} titleStyle={"pb-10"} title2={"Books"} paraStyle={"!block"}/>
<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
{popularBooks.map(book =>(
  <div className="" key={book._id}>
    <Item book={book}/>
  </div>
))}
</div>
    </section>
  )
}

export default PopularBook