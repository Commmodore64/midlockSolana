import React from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/TabBar";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Edit() {
  const auth = useAuth();
  //Logout
  const handleLogout = async (e) => {
    try {
      await auth.logout();
      localStorage.removeItem('uidToken');
      localStorage.removeItem('emailToken');
      window.location.href="/home";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col font-semibold text-4xl mt-12 ml-4">
        Account
        <h2 className="flex items-center justify-between text-xl font-semibold mt-10 ml-4">
          <span className="mr-2">Profile</span>
        </h2>
      </div>

      <div>
        <button onClick={handleLogout} className="bg-[#F31C1C] text-white rounded-full py-3 px-36 mt-20 text-xl">
          Logout
        </button>
      </div>
      <TabBar />
    </div>
  );
}

export default Edit;