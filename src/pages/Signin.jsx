import React, { useState, useEffect } from "react";
import Logo from "../assets/LogoSinFondo.png";
import Wallpaper5 from "../assets/wallpaper5.svg";
import { useAuth } from "../context/authContext";
import { Link, NavLink } from "react-router-dom";

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
        <button
          type="button"
          className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={(e) => handleGoogle(e)}
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div></div>
        </button>
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
