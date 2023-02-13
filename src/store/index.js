//import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";
import cartUiReducer from "./cartui";

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    auth: authReducer,
    cartUi: cartUiReducer,
  },
});

export default store;
