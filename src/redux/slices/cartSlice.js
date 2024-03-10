import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      return { ...state };
    },
    removeFromCart: (state, action) => {
      return { ...state };
    },
    incQty: (state, action) => {
      return { ...state };
    },
    decQty: (state, action) => {
      return { ...state };
    },
  },
});

export const getCartSelector = createSelector((state) => state.cart);
export const { addToCart, removeFromCart, incQty, decQty } = cartSlice.actions;
export default cartSlice.reducer;
