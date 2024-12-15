import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  return (
    <section className="absolute top-0 left-0 w-full z-50 bg-white">
      {/* Container */}
      <div className="flex h-full w-full">
        {/* Image side */}
        <div className="w-1/2 hidden sm:block">
          <img
            src=""
            alt=""
            className="object-cover aspect-square h-full w-full"
          />
        </div>
        {/* Form side */}
        <div className=" flexCenter w-full sm:w-1/2">
          <form className="flex flex-col items-center w-[90%]
          sm:max-w-md m-auto gap-y-5 to-gray-800">
            <div className="w-full mb-4">
              <h3>{currentState}</h3>
            </div>
            {currentState === "Signup" && (
                <div className="w-full">
                    <label htmlFor="name" className="medium-14">Name</label>
                    <input className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1" type="text" placeholder="Name"/>
                </div>
            )}
                            <div className="w-full">
                    <label htmlFor="email" className="medium-14">Email</label>
                    <input className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1" type="email" placeholder="Email"/>
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="medium-14">Password</label>
                    <input className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1" type="password" placeholder="password"/>
                </div>
                <button className="btn-dark w-full mt-5 !py[7px] !rounded" type="submit">{currentState === "Login" ? "login" : "Signup"}</button>
                <div className="w-full flex flex-col gap-y-3 medium-14">
                    <div className="underline">
                        Forgot your password?
                    </div>
                    {currentState === "Login" ? (
                        <div className="underline">Don't have an account? <span onClick={()=>{setCurrentState("Signup")}} className="cursor-pointer hover:text-secondaryOne">Create account</span></div>
                    ) : (
                        <div className="">Already have an account? <span onClick={()=>{setCurrentState("Login")}} className="cursor-pointer hover:text-secondaryOne">login</span></div>
                    )}
                </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
