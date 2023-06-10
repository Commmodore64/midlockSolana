import React from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";

function Signin() {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${Wallpaper5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center mt-[-220px]">
        <img
          src={Logo}
          alt="LogoSinFondo"
          className="h-40 object-contain mr-3"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-black mt-8 ml-2">
          Login Account
        </h1>
        <h2 className="text-xl font-semibold text-black mt-14 ml-2">
          Welcome back!
        </h2>
      </div>
      <div className="flex flex-row pr-5 mt-1">
        <div className="text-black font-semibold text-5xl pr-5">Medi</div>
        <div className="text-[#9AC1F0] font-semibold text-5xl">Lock</div>
      </div>
      <form className="form mt-8">
        <input
          className="appearance-none rounded-xl border-2 border-black py-2 px-14 pr-28 pl-4 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          type="email"
          placeholder="Enter email"
        />
      </form>
      <form className="form mt-8">
        <input
          className="appearance-none rounded-xl border-2 border-black py-2 px-14 pr-28 pl-4 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          type="password"
          placeholder="Enter password"
        />
      </form>

    </div>
  );
}

export default Signin;
