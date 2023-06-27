import React from "react";
import { AiFillHome, AiOutlineQrcode } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function tabBar() {
  return (
    <div className="bg-[#438FEB] fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 rounded-t-xl">
      <NavLink to="/home">
        <AiFillHome className="icon w-8 h-8 flex flex-row" />
      </NavLink>
      <NavLink to="/pincode">
        <AiOutlineQrcode className="icon w-8 h-8 flex flex-row" />
      </NavLink>
      <NavLink to="/account">
        <FaUser className="icon w-7 h-7 flex flex-row" />
      </NavLink>
    </div>
  );
}

export default tabBar;
