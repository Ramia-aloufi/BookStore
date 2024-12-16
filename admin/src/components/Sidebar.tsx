import { Dispatch, SetStateAction } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBookOpen, FaListAlt } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
 type SidebarProps = {
  setToken:Dispatch<SetStateAction<string | null>>
 }
const Sidebar = ({setToken}:SidebarProps) => {
  return (
    <div className="max-sm:flexCenter max-xs:pb-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen">
      <div className="flex flex-col gap-y-6 max-xs:items-center sm:flex-col pt-4 sm:pt-14">
        <Link className="bold-24 flex items-baseline sm:pl-12" to={"/"}>
          <FaBookOpen height={24} width={24} className="hidden sm:flex mr-2" />
          <span className="text-secondary pl-2 sm:hidden lg:flex">
            BookShop
          </span>
        </Link>
        <div className="flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaSquarePlus />
            <span className="hidden lg:flex">add book</span>
          </NavLink>
          <NavLink
            to={"/list"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaListAlt />
            <span className="hidden lg:flex">book list</span>
          </NavLink>
          <NavLink
            to={"/order"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <MdFactCheck />
            <span className="hidden lg:flex">orders</span>
          </NavLink>
          {/* Logout Button */}
          <div className="max-sm:ml-5 sm:mt-72">
            <button className="flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl">
              <BiLogOut onClick={()=>setToken("")} className="text-lg" />
              <div className="hidden lg:flex">logout</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
