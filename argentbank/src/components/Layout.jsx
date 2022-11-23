import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Home/Home";

function Layout() {
  return (
    <div className="Layout" >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div> 
  )
}

export default Layout;