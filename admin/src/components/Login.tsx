import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"
import { backend_url } from "../data/data"
import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"
 type LoginProps = {
  setToken:Dispatch<SetStateAction<string | null>>
 }
const Login = ({setToken}:LoginProps) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmitHandler = async(e:FormEvent)=>{
    try {
      console.log(backend_url);
      
      e.preventDefault()
      console.log(password,email);
      const response = await axios.post(backend_url+ "/api/user/admin",{email,password})

      if(response.data.success){
        setToken(response.data.token)
      }else{
        toast.error(response.data.message)
      }

      
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message)

    }
  }
  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* image right side */}
        <div className="w-1/2 hidden sm:flex bg-secondaryOne h-full items-center  justify-center p-4 ">
        <div className="  ">
        <Link className="flex items-center justify-start" to={"/"}>
          <FaBookOpen  className="h-12 w-12 hidden sm:flex mr-2" />
          <h4 className="bold-32">BookShop</h4>
        </Link>

        </div>
        </div>
        {/* Form side */}
        <div className="flexCenter w-full sm:w-1/2">
          <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className="w-full mb-4">
            <h3 className="bold-32">Admin Panel</h3>
            </div>
          <div className="w-full">
            <label htmlFor="email" className="medium-15 ">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email } type="email" placeholder="email" className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1 "/>
          </div>
          <div className="w-full">
            <label htmlFor="password" className="medium-15 ">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password" className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1 "/>
          </div>
          <button type="submit" className="btn-dark w-full mt-5 !py[7px] !rounded">login</button>
         </form>
      </div>
      </div>
    </section>
  )
}

export default Login