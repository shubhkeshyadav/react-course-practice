//import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";
import cartUiReducer from "./cartui";
import cart from "./cart";

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    auth: authReducer,
    cartUi: cartUiReducer,
    cart: cart,
  },
});

export default store;
