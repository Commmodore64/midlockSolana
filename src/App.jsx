import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ApiComponent from "./components/apiComponent";
import Edit from "./pages/Edit"
import Account from "./pages/Account"
import Pincode from "./pages/Pincode"
import { AuthProvider } from "./context/authContext";
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/api/:id" element={<ApiComponent />} />
          <Route path="/api/" element={<ApiComponent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/account" element={<Account />} />
          <Route path="/pincode" element={<Pincode />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
