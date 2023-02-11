import Expenses from "./components/expenses/Expenses";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddUser from "./components/Users/AddUser";
import NewPro from "./components/Section_10/NewPro";
import { GlobalState } from "./components/Section_10/Store/GlobalContext";
import FoodOrderRoot from "./components/food_order/FoodOrderRoot";
import MovieRoot from "./components/movies/MovieRoot";
import Welcome from "./components/router/pages/Welcome";
import Products from "./components/router/pages/Products";
import ProductDetail from "./components/router/pages/ProductDetail";
import MainHeader from "./components/router/components/MainHeader";
import Root from "./components/custom_hook/Root";

const App = () => {
  return (
    <GlobalState>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Expenses />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="users" element={<AddUser />} />
          <Route path="dashboard" element={<NewPro />} />
          <Route path="food-order" element={<FoodOrderRoot />} />
          <Route path="movies" element={<MovieRoot />} />

          {/* Route Section */}
          <Route path="router" element={<MainHeader />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:pid" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<p>Error Here</p>} />
          <Route path="custom-hook" element={<Root />} />
        </Routes>
      </Router>
    </GlobalState>
  );
};

export default App;
