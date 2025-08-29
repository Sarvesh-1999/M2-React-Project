import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const openDropdown = () => setToggle(!toggle);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <nav className="bg-white z-50 shadow-lg h-20 w-full p-3 flex items-center justify-between sticky top-0">
      <figure className="text-3xl font-extrabold">
        <span className="text-orange-400">Q</span>-Blogs
      </figure>

      <ul className="flex items-center gap-5 font-semibold">
        <li className="cursor-pointer">
          <FaBehance />
        </li>
        <li className="cursor-pointer">
          <FaDribbble />
        </li>

        {token ? (
          <>
            <li className="cursor-pointer">
              <button
                onClick={openDropdown}
                className="relative border px-5 py-1 rounded-full bg-blue-500 text-white"
              >
                Profile
                {toggle ? (
                  <>
                    <ul className="absolute bg-white rounded shadow-xl right-0 top-9 border border-gray-200 text-black p-2">
                      <li className="px-4 py-1 hover:text-blue-600 cursor-pointer">
                        Dashboard
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-1 hover:text-blue-600 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </>
                ) : null}
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="cursor-pointer">
              <Link
                to={"/login"}
                className="border px-5 py-1 rounded-full shadow bg-white text-blue-500"
              >
                Login
              </Link>
            </li>

            <li className="cursor-pointer">
              <Link
                to={"/signup"}
                className="border px-5 py-1 rounded-full bg-blue-500 text-white"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
