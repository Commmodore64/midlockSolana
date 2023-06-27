import React from "react";
import Wallpaper from "../assets/wallpaper.svg";
import TabBar from "../components/TabBar";

function Edit() {
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
      </div>
      <TabBar />
    </div>
  );
}

export default Edit;
