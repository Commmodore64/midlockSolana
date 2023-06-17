import React, { useEffect, useState } from "react";
import TabBar from "../components/TabBar";
import Wallpaper from "../assets/wallpaper.svg";
import { getDatabase, ref, onValue } from "firebase/database";
import { uid } from "uid";
import { MdModeEditOutline } from "react-icons/md";

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
      window.location.href = "/";
    }
  }, []);
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
        Home
        <h2 className="flex items-center justify-between text-xl font-semibold mt-10 ml-4">
          <span className="mr-2">Med list</span>
          <button className="flex items-center text-blue-500 hover:text-blue-700 focus:outline-none">
            <span className="mr-5">
              <MdModeEditOutline size={27} />
            </span>
          </button>
        </h2>
      </div>
      <div className="flex flex-col flex-grow px-4 mt-5">
        {data.map((item) => {
          const keys = Object.keys(item);
          return keys
            .filter((key) => key !== "id")
            .map((key) => (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-lg p-3.5 mb-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold">{item[key].med}</p>
                    <p className="text-lg font-bold">{item[key].des}</p>
                  </div>
                  <p className="text-lg font-bold">x{item[key].cant}</p>
                </div>
              </div>
            ));
        })}
      </div>

      <TabBar />
    </div>
  );
};

export default Home;
