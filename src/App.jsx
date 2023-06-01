import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin";
import Signup from './pages/Signup';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;
