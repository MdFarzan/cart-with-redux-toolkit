import { createSelector, createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          price: action.payload.price,
          qty: 1,
        },
      ];
    },
    removeFromCart: (state, action) => {
      var restItems = current(state).filter(
        (item) => item.id != action.payload.id
      );
      return restItems;
    },
    incQty: (state, action) => {
      var cart = current(state).map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return cart;
    },
    decQty: (state, action) => {
      var cart = current(state).map((item) => {
        if (item.id == action.payload.id && item.qty != 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return cart;
    },
  },
});

export const getCartSelector = createSelector(
  (state) => state.cart,
  (state) => state
);
export const { addToCart, removeFromCart, incQty, decQty } = cartSlice.actions;
export default cartSlice.reducer;
