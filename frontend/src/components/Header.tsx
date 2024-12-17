import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { CgMenuLeft } from "react-icons/cg";
import { RiShoppingBag4Line, RiUserLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { TbUserCircle } from "react-icons/tb";
import {ShopContext} from "../context/ShopContext";

const Header = () => {
  const {navigate,setToken,token,getCartCount,setCartItems} = useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const onLogout = ()=>{
    localStorage.removeItem("token")
    setToken("")
     navigate("/login")
     setCartItems({})
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      setActive(window.screenY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    setToken('')
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened,setToken]);

  return (
    <header className="fixed top-0 w-full left-0 right-0 z-50">
      <div
        className={`${
          active ? "bg-whit py-2.5" : "bg-primary py-3"
        } bg-white py-2.5 max-padd-container flexBetween border-b border-slate-900/10 rounded transition-all duration-300`}
      >
        <Link className="flex-1 flex items-center justify-start" to={"/"}>
          <FaBookOpen height={36} width={36} className="hidden sm:flex mr-2" />
          <h4 className="bold-24">BookShop</h4>
        </Link>
        <div className="flex-1">
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            containerStyle={`${
              menuOpened
                ? "flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl"
                : "hidden xl:flex justify-center gap-x-8 xl:gap-x-14 medium-15 rounded-full px-2 py-1"
            }`}
          />
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10 ">
          <CgMenuLeft
            onClick={toggleMenu}
            className="text-2xl xl:hidden cursor-pointer"
          />
          <Link className="flex relative" to={"cart"}>
            <RiShoppingBag4Line className="text-[33px] bg-secondary text-primary p-1.5 rounded-full" />
            <span className="bg-primary right-1 ring-slate-900/5 medium-14 absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md">
              {getCartCount()}
            </span>
          </Link>
          <div className="relative group">
            <div onClick={()=>!token  && navigate("/login")} className="">
              {token ? (
                <div className=" text-[29px] cursor-pointer">
                  
                  <TbUserCircle />{" "}
                </div>
              ) : (
                <button onClick={()=>navigate('login')} className="btn-outline flexCenter gap-x-2">
                  login
                  <RiUserLine />{" "}
                </button>
              )}
            </div>
            {token && (
              <ul className="bg-white p-1 w-32 ring-1 ring-slate-900/5 rounded absolute hidden group-hover:flex right-0 top-8  flex-col regular-14 shadow-md">
                <li onClick={()=>navigate('/orders')} className="p-2 cursor-pointer text-tertiary rounded-md hover:bg-primary">Order</li>
                <li onClick={()=>onLogout()} className="p-2 cursor-pointer text-tertiary rounded-md hover:bg-primary">logOut</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
