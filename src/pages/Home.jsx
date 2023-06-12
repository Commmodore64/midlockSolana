import React, { useEffect, useState } from "react";
import TabBar from "../components/TabBar";
import Wallpaper from "../assets/wallpaper.svg";
import { getDatabase, ref, onValue } from "firebase/database";
import { uid } from "uid";

const Home = () => {
  const [data, setData] = useState([]);
  const storedUID = localStorage.getItem("uidToken");

  const fetchData = async () => {
    try {
      const databaseRef = ref(getDatabase());
      const snapshot = await onValue(databaseRef, (snapshot) => {
        const dataFromDB = snapshot.val();
        const filteredData = Object.entries(dataFromDB)
          .map(([key, value]) => ({
            id: key,
            ...value,
          }))
          .filter((item) => item.id === storedUID);
        setData(filteredData);
      });
    } catch (error) {
      console.log("Error al obtener datos: ", error);
    }
  };

  useEffect(() => {
    if (storedUID) {
      console.log("UID del usuario:", storedUID);
      fetchData();
    } else {
      console.log("No hay usuario autenticado");
      window.location.href = "/home";
    }
  }, []);
  const storedUIDString = storedUID.toString();

  console.log(data[0]);
  return (
    <div
      className="w-screen h-screen flex"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col font-semibold text-4xl mt-12 ml-4">
        Home
        <h2 className="text-xl font-semibold mt-10 ml-1">Med list</h2>
      </div>
      <div className="flex flex-col mt-4">
    {data.map((item) => {
      const key = Object.keys(item)[0]; // Obtiene la clave dinámica
      const { med, des } = item[key]; // Obtiene las propiedades med y des

      return (
        <div key={key} className="bg-white rounded-xl shadow p-4 mb-4">
          <p>{med}</p>
          <p>{des}</p>
        </div>
      );
    })}
  </div>
      <TabBar />
    </div>
  );
};

export default Home;
