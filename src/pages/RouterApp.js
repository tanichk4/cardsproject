import React from "react";
import { Route, Routes } from "react-router-dom";
import YourCards from "../Components/YourCards";
import CreditCard from "../Components/CreditCard";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/newuser" element={<CreditCard />} />
      <Route path="/" element={<YourCards />} />
    </Routes>
  );
};

export default RouterApp;
