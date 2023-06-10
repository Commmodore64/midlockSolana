import React, { useState } from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";
import {useAuth} from "../context/authContext";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
  const auth = useAuth()
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.register(emailRegister, passwordRegister);
      toast.success('Account created!');
    } catch(error) {
      toast.error('Failed to create account');
    }
  };
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${Wallpaper5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center mt-36">
        <img
          src={Logo}
          alt="LogoSinFondo"
          className="h-40 object-contain mr-3"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mt-8 ml-2">
          Create Account
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-14 ml-2">
          Welcome !
        </h2>
      </div>
      <div className="flex flex-row pr-5 mt-1">
        <div className="text-gray-900 font-semibold text-5xl pr-5">Medi</div>
        <div className="text-[#9AC1F0] font-semibold text-5xl">Lock</div>
      </div>
      <form className="form mt-7">
        <input
          className="appearance-none rounded-2xl border-2 border-gray-700 py-3 px-14 pr-28 pl-4 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          type="email"
          placeholder="Enter email"
          onChange={(e)=>setEmailRegister(e.target.value)}
        />
      </form>
      <form className="form mt-8">
        <input
          className="appearance-none rounded-2xl border-2 border-gray-700 py-3 px-14 pr-28 pl-4 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          type="password"
          placeholder="Enter password"
          onChange={(e)=>setPasswordRegister(e.target.value)}
        />
      </form>
      <button  onClick={handleRegister} className="bg-[#9AC1F0] text-white rounded-full py-3 px-36 mt-20 text-xl">
        Create
        <Toaster/>
      </button>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row mt-auto mb-5">
          <p className="text-center pr-2">Already have an account?</p>
          <button className="font-bold">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
