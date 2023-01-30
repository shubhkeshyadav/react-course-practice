import React, { useContext } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import { GlobalState } from "./Store/GlobalContaxt";
import GlobalContext from "./Store/GlobalContaxt";
function FoodOrderRoot() {
  return (
    <GlobalState>
      <Header />
      <Meals />
    </GlobalState>
  );
}

export default FoodOrderRoot;
