import React from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/TabBar";
import { storage }  from "../firebase/firebase.config";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import react, { useEffect, useState } from 'react';

function Edit() {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const getImageUrl = async () => {
      try{
        const storage = getStorage();
        const url = await getDownloadURL(ref(storage, "images/Parecetamol750mg.png"));
        // Actualiza el estado con la URL de la imagen
        setImageUrl(url);
      } catch(error) { 
        console.log('Error al obtener la URL de la imagen: ',error);
      }
    };
    getImageUrl();
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
        Edit
        <h2 className="flex items-center justify-between text-xl font-semibold mt-10 ml-4">
          <span className="mr-2">Med list</span>
        </h2>
        <div>
          {imageUrl && <img src={imageUrl} alt="Image" />}
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default Edit;
