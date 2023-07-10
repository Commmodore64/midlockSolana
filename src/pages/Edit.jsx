import React, { useEffect, useState } from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/TabBar";
import { storage, firestore } from "../firebase/firebase.config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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
                                 <button>
            <div
              key={med.id}
              className="bg-white rounded-2xl shadow-lg p-5 mx-5 mb-5 w-52 h-60"
            >
              <img
                className="object-contain w-32 h-38"
                src={med.imageUrl}
                alt="Image"
              />
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
