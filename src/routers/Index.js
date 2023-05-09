import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "../components/common/scrollTop";
import Index1 from "../themes/index1";
import Index2 from "../themes/Index2";

function Index() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route  path="/" element={<Index1 />} />
        <Route  path="/home-2" element={<Index2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
