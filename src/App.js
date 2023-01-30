import Expenses from "./components/expenses/Expenses";

import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddUser from "./components/Users/AddUser";
import NewPro from "./components/Section_10/NewPro";
import { GlobalState } from "./components/Section_10/Store/GlobalContext";
import FoodOrderRoot from "./components/food_order/FoodOrderRoot";
import MovieRoot from "./components/movies/MovieRoot";

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Expenses />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="users" element={<AddUser />} />
          <Route path="dashboard" element={<NewPro />} />
          <Route path="food-order" element={<FoodOrderRoot />} />
          <Route path="movies" element={<MovieRoot />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
