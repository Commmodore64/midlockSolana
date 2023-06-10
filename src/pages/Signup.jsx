import React from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";

function Signup() {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${Wallpaper5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center mt-[-450px]">
        <img src={Logo} alt="LogoSinFondo" className="h-40 object-contain mr-3" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-black mt-8 ml-2">Login Account</h1>
        <h2 className="text-xl font-semibold text-black mt-14 ml-2">Welcome back!</h2>
      </div>
      <div className="flex flex-row pr-5">
          <div className="text-black font-semibold text-4xl pr-7">Medi</div>
          <div className="text-[#9AC1F0] font-semibold text-4xl">Lock</div>
        </div>
    </div>
  );
}

export default Signup;
