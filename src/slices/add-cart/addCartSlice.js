// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
//     products:[{id:"1", name:"apple  "}]
//   }


// export const counterSlice = createSlice({

//     name: 'counter',
//     initialState,
// reducers:{
// addToCart: (state)=>{
//   state.value +=1
// }
// }

// })

// export const {addToCart } = counterSlice.actions;
// export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cart: [], // Store cart items here
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((product) => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already in cart
      } else {
        state.cart.push({ ...item, quantity: 1 }); // Add new item with quantity
      }
      state.value += 1; // Increment total items count
    },
  },
});

export const { addToCart } = counterSlice.actions;
export default counterSlice.reducer;
