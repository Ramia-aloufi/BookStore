import { FormEvent, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const { token, setToken, backend_url, navigate } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = async(e:FormEvent)=>{
    e.preventDefault()

    if(currentState == "Signup"){
      const response = await axios.post(`${backend_url}/api/user/register`,{name,email,password})
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
      }else{
        toast.error(response.data.message)
      }
    }else{
      const response = await axios.post(`${backend_url}/api/user/login`,{email,password})
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
      }else{
        toast.error(response.data.message)
      }

    }

  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <section className="absolute top-0 left-0 w-full z-50 bg-white  h-full ">
      {/* Container */}
      <div className="flex h-full w-full">
        {/* Image side */}
        <div className="w-1/2 hidden sm:flex bg-secondaryOne h-full items-center  justify-center p-4 ">
        <div className="  ">
        <Link className="flex items-center justify-center mb-6" to={"/"}>
          <FaBookOpen  className="h-12 w-12 hidden sm:flex mr-2" />
          <h4 className="bold-32 ">BookShop</h4>
        </Link>
        <span className="regular-24">Earn exciting rewards every time you shop with us</span>

        </div>
        </div>
        {/* Form side */}
        <div className=" flexCenter w-full sm:w-1/2">
          <form
          onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%]
          sm:max-w-md m-auto gap-y-5 to-gray-800"
          >
            <div className="w-full mb-4">
              <h1 className="bold-24">{currentState}</h1>
            </div>
            {currentState === "Signup" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-14">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                  type="text"
                  placeholder="Name"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-14">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-14">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                type="password"
                placeholder="password"
              />
            </div>
            <button
              className="btn-dark w-full mt-5 !py[7px] !rounded"
              type="submit"
            >
              {currentState === "Login" ? "login" : "Signup"}
            </button>
            <div className="w-full flex flex-col gap-y-3 medium-14">
              <div className="underline cursor-pointer">Forgot your password?</div>
              {currentState === "Login" ? (
                <div className=" ">
                  Don't have an account?{" "}
                  <span
                    onClick={() => {
                      setCurrentState("Signup");
                    }}
                    className="cursor-pointer underline hover:text-secondaryOne"
                  >
                    Create account
                  </span>
                </div>
              ) : (
                <div className="">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setCurrentState("Login");
                    }}
                    className="cursor-pointer underline hover:text-secondaryOne"
                  >
                    login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
