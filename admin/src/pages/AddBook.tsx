import { ChangeEvent, FormEvent, useState } from "react";
import upload_img from "../assets/uploud-img.png";
import axios from "axios";
import { backend_url } from "../data/data";
import { toast } from "react-toastify";
type AddBookProps = {
  token:string | null
}
const AddBook = ({token}:AddBookProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Fiction");
  const [popular, setPopular] = useState(false);

  const handleChangeImg = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0])
    setImage(e.target.files[0])

  };
  const reset = () =>{
    setCategory("Fiction")
    setPopular(false)
    setName("")
    setDescription("")
    setImage(null)
    setPrice("")

  }
  const onSubmitHandler = async (e:FormEvent) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      if(image)
      formData.append("image", image)
      formData.append("popular", `${popular}`)

      

      const response = await axios.post(`${backend_url}/api/book/create`,formData,{headers:
        {
          Authorization: `Bearer ${token}`,
        }
      }
      )
      if(response.data.success){
        reset()
        toast.success(response.data.message)
      }      
 


      
    } catch (error) {
      console.log(error);
      
      
    }

    

  };
  return (
    <div className="px-2 sm:px-8 sm:mt-14 pb-16">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-y-3 medium-14 1g:w-(777px]"
      >
        <div className="w-full">
          <h5 className="h5">Book Name</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="book name"
            type="text"
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Book Description</h5>
          <textarea
          rows={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="book name"
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="flex items-end gap-x-6">
          <div className="">
            <h5 className="h5">Category</h5>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 sm:w-full  text-gray-30"
            >
              <option value="Fiction">Fiction</option>
              <option value="Children">Children</option>
              <option value="Health">Health</option>
              <option value="Academic">Academic</option>
              <option value="Business">Business</option>
              <option value="Religious">Religious</option>
            </select>
          </div>
          <div className="flex gap-x-2 pt-2">
            <label htmlFor="image">
              <img
                className="w-14 h-14 aspect-square object-cover ring-1 ring-slate-900/50  bg-white rounded-lg"
                src={image ? URL.createObjectURL(image) : upload_img}
                alt=""
              />
              <input
                type="file"
                name="image"
                hidden
                onChange={handleChangeImg}
                id="image"
              />
            </label>
          </div>
          <div className="">
            <h5 className="h5">Price</h5>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white w-20"
            />
          </div>
        </div>
        <div className="flexStart gap-2 my-2 ">
          <input
            onChange={() => setPopular((prev) => !prev)}
            type="checkbox"
            checked={popular}
            id="popular"
          />
          <label htmlFor="popular" className="cursor-pointer">
            add to popular
          </label>
        </div>
        <button className="btn-dark mt-2 max-w-44 sm:w-full" type="submit">
          add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
