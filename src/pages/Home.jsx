import React from 'react'
import TabBar from '../components/TabBar';
import Wallpaper from '../assets/wallpaper.svg';
function Home() {
  return (
    <div
    className="w-screen h-screen"
    style={{
      backgroundImage: `url(${Wallpaper})`,
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
    }}>
        Home
        <TabBar/>
    </div>
  )
}

export default Home