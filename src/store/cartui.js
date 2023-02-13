import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false };
const cartUiSlice = createSlice({
  name: "cartui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const catUiAction = cartUiSlice.actions;
export default cartUiSlice.reducer;
