import React, { useEffect, useState } from "react";
import TabBar from "../components/TabBar";
import Wallpaper from "../assets/wallpaper.svg";
import { getDatabase, ref, onValue } from "firebase/database";
import { database, auth } from "../firebase/firebase.config";
import {uid} from "uid";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => { //Obtener los datos de la realtime database
    try {
      const databaseRef = ref(getDatabase());
      const snapshot = await onValue(databaseRef, (snapshot) => {
        const dataFromDB = snapshot.val();
        setData(dataFromDB);
      });
    } catch (error) {
      console.log("Error al obtener datos: ", error);
    }
  };
  useEffect(() => { // Obtener el uid del usuario
    const getUserUID = () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        console.log("UID del usuario:", uid);
      } else {
        console.log("No hay usuario autenticado");
      }
    };

    getUserUID();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)
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
        {Array.isArray(data) &&
          data.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4 mb-4">
              <p>{data.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </div>

      <TabBar />
    </div>
  );
};

export default Home;
