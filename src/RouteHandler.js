import React from "react";
import { Route, Routes } from "react-router-dom";
import YourCards from "./Components/YourCards";
import CreditCard from "./Components/CreditCard";

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<CreditCard />} />
      <Route path="/yourcards" element={<YourCards />} />
    </Routes>
  );
};

export default RouteHandler;
