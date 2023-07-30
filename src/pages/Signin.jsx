import React, { useState, useEffect } from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";
import { useAuth } from "../context/authContext";
import { Link, NavLink } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react";

function Signin() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.login(email, password);
    window.location.href = "/home";
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  useEffect(() => {
    const getUserUID = () => {
      const storedUID = localStorage.getItem("uidToken"); // Obtener el UID almacenado en el almacenamiento local

      if (storedUID) {
        console.log("UID del usuario:", storedUID);
        window.location.href = "/home";
      } else {
        console.log("No hay usuario autenticado");
      }
    };

    getUserUID();
  }, []);

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
          Login Account
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-14 ml-2">
          Welcome back!
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <form className="form mt-8">
        <input
          className="appearance-none rounded-2xl border-2 border-gray-700 py-3 px-14 pr-28 pl-4 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        onClick={(e) => handleLogin(e)}
        className="bg-[#9AC1F0] text-white rounded-full py-3 px-36 mt-20 text-xl"
      >
        Login
      </button>
      <div className="px-6 sm:px-0 max-w-sm mt-6">
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Conectar Wallet
          </button>
          <WalletMultiButton />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row mt-auto mb-5">
          <p className="text-center pr-2">Not register yet?</p>
          <Link to="/signup" className="font-bold">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
