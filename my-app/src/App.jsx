import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Feed from "./components/feed/Feed";

// import video from "./pages/video/video";
//  // ✅ Corrected path
import Video from "./pages/video/video";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />} />
           <Route path="/video/:categoryId/:videoId" element={<Video />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
