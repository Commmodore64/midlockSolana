import React from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";

function Signin() {
  return (
    <div
      className="w-screen h-screen absolute inset-0 z-[-1]"
      style={{
        backgroundImage: `url(${Wallpaper5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className=" text-3xl font-semibold text-black top-12 ml-5">
        Login Account
      </h1>
      <h2 className="absolute text-xl font-semibold text-black top-20 ml-5">
        Welcome back !
      </h2>
      <div className="relative z-10 top-28 flex items-center justify-center">
        <img src={Logo} alt="LogoSinFondo" className="h-40 object-contain" />
        <h1 className="flex text-black">Medi</h1>
        <h1 className="text-[#9AC1F0]">Lock</h1>
      </div>
      </div>
  );
}

export default Signin;
