import React, { useEffect, useState } from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/tabBar";
import { storage, firestore } from "../firebase/firebase.config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getDatabase, ref as realtimeRef, set } from "firebase/database";

function Edit() {
  const [medList, setMedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestoreInstance = getFirestore();
        const medListRef = collection(firestoreInstance, "medlist");
        const querySnapshot = await getDocs(medListRef);
        const medListData = [];

        for (const doc of querySnapshot.docs) {
          const { medicamento, descripcion, imageName } = doc.data();
          const storageInstance = getStorage();
          const imageUrl = await getDownloadURL(
            ref(storageInstance, `images/${imageName}`)
          );

          medListData.push({
            id: doc.id,
            medicamento,
            descripcion,
            imageUrl,
          });
        }

        setMedList(medListData);
        console.log(medListData);
      } catch (error) {
        console.log("Error al obtener la lista de medicamentos: ", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async (medicamento) => {
    // Obtén el uidToken almacenado en el almacenamiento del navegador
    const uidToken = localStorage.getItem("uidToken");

    // Verifica si el uidToken existe
    if (uidToken) {
      try {
        // Crea una referencia a la base de datos en tiempo real
        const database = getDatabase();
        const userRef = realtimeRef(database, `users/${uidToken}`);

        // Agrega el medicamento seleccionado a la base de datos en tiempo real
        await set(userRef, {
          medicamento: medicamento,
        });

        console.log("Medicamento agregado a la base de datos en tiempo real");
      } catch (error) {
        console.log("Error al agregar el medicamento a la base de datos en tiempo real: ", error);
      }
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex font-semibold text-4xl mt-12 ml-4">Edit</div>
      <h2 className="flex items-center justify-between text-xl font-semibold mt-10 ml-4">
        <span className="mr-2">Med list</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-4">
        {medList.map((med) => (
          <button key={med.id} onClick={() => handleButtonClick(med.medicamento)}>
            <div className="bg-white rounded-2xl shadow-lg p-5 mx-5 mb-5 w-52 h-60">
              <img className="object-contain w-32 h-38" src={med.imageUrl} alt="Image" />
              <div className="text-center">
                <h2 className="text-xl font-semibold">{med.medicamento}</h2>
                <span className="text-sm">{med.descripcion}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <TabBar />
    </div>
  );
}

export default Edit;