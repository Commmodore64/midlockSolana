import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const ApiComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const databaseRef = ref(getDatabase());
        const snapshot = await onValue(databaseRef, (snapshot) => {
          const dataFromDB = snapshot.val();
          const jsonData = JSON.stringify(dataFromDB);
          setData(jsonData);
          console.log(jsonData);
        });
      } catch (error) {
        console.log("Error al obtener datos: ", error);
      }
    };

    fetchData();
  }, []);

  return <p>{data}</p>;
};

export default ApiComponent;
