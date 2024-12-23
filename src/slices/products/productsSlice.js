import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isToast: false, // State to track if the toast should be shown for duplicate products
    successToast: false, // State for success toast when a product is added
  },
  reducers: {
    addProduct: (state, action) => {
      // Check if the product already exists in the cart
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true; // Set isToast to true if the product already exists
        state.successToast = false; // Reset successToast if product exists
      } else {
        state.items.push({ ...action.payload });
        state.isToast = false; // Reset isToast if the product is newly added
        state.successToast = true; // Set successToast to true for successful addition
      }
    },
    resetToast: (state) => {
      state.isToast = false; // Reset isToast to false after the toast is shown
      state.successToast = false; // Reset successToast after showing success toast
    },
  },
});

export const { addProduct, resetToast } = productSlice.actions;
export default productSlice.reducer;
