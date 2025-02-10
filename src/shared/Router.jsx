import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
        {/* 지정하지 않은 모든 경로는 Home으로 (새로고침 오류) */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
