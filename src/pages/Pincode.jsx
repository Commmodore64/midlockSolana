import React, { useEffect, useState } from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/tabBar";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { database } from "../firebase/firebase.config";

function Pincode() {
  const [numericCode, setNumericCode] = useState(""); // Estado para almacenar el código numérico
  const storedUID = localStorage.getItem("uidToken"); // Obtener el UID almacenado en localStorage

  useEffect(() => {
    // Obtener el código numérico inicial desde la base de datos
    const db = getDatabase();
    const userRef = ref(db, `${storedUID}/pin`); // Construir la ruta completa con el UID del usuario

    onValue(userRef, (snapshot) => {
      const code = snapshot.val() || ""; // Obtener el valor de la snapshot o establecer un valor predeterminado
      setNumericCode(code); // Actualizar el estado con el código obtenido de la base de datos
    });
  }, []);

  function generateNumericCode(length) {
    let code = "";
    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Genera un dígito aleatorio del 0 al 9
    }
    return code;
  }

  function handleClick() {
    const code = generateNumericCode(4); // Genera un nuevo código numérico de 4 dígitos
    setNumericCode(code); // Actualiza el estado con el nuevo código generado

    const db = getDatabase();
    const userRef = ref(db, `${storedUID}/pin`); // Construir la ruta completa con el UID del usuario
    set(userRef, code); // Actualiza el código en la base de datos
  }

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
        Pincode
        <h2 className="flex flex-col items-center justify-between text-3xl font-semibold mt-10 mr-6">
          <span>Your unique PinCode:</span>
          <div className="flex items-center justify-center h-10 w-full">
            <span className="font-semibold">{numericCode}</span>
          </div>
        </h2>
      </div>

      <button
        onClick={handleClick}
        className="bg-[#9AC1F0] text-white rounded-lg py-3 px-20 text-xl sm:px-5 max-w-sm mt-14 mx-auto block"
      >
        Refresh Code
      </button>

      <TabBar />
    </div>
  );
}

export default Pincode;
