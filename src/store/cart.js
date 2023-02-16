import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;

      console.log(newitem);

      const existingItem = state.items.find((item) => item.id === newitem.id);
      if (existingItem) {
        existingItem.qty = existingItem.qty + newitem.qty;
      } else {
        state.items.push(newitem);
      }
      state.totalAmount = state.totalAmount + newitem.price * newitem.qty;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.qty === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.qty--;
        }
        state.totalAmount = state.totalAmount - existingItem.price;
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
