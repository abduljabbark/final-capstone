import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isToast: false,
    successToast: false,
  },
  reducers: {
    addProduct: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true;
        state.successToast = false;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.isToast = false;
        state.successToast = true;
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    resetToast: (state) => {
      state.isToast = false;
      state.successToast = false;
    },
  },
});

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  resetToast,
} = productSlice.actions;
export default productSlice.reducer;
