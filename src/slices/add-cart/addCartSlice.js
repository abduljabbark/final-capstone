
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
//   cart: [], // Store cart items here
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.cart.find((product) => product.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item already in cart
//       } else {
//         state.cart.push({ ...item, quantity: 1 }); // Add new item with quantity
//       }
//       state.value += 1; // Increment total items count
//     },
//   },
// });

// export const { addToCart } = counterSlice.actions;
// export default counterSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [], // Cart items
//   value: 0, // Total number of items
// };

// const addCartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.cart.find((product) => product.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item already in cart
//       } else {
//         state.cart.push({ ...item, quantity: 1 }); // Add new item with quantity
//       }
//       state.value += 1; // Increment total items count
//     },
//     incrementItem: (state, action) => {
//       const itemId = action.payload;
//       const item = state.cart.find((product) => product.id === itemId);
//       if (item) {
//         item.quantity += 1;
//         state.value += 1; // Increment total count
//       }
//     },
//     decrementItem: (state, action) => {
//       const itemId = action.payload;
//       const item = state.cart.find((product) => product.id === itemId);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//         state.value -= 1; // Decrement total count
//       } else {
//         state.cart = state.cart.filter((product) => product.id !== itemId);
//         state.value -= 1; // Remove item and update total count
//       }
//     },
//     deleteItem: (state, action) => {
//       const itemId = action.payload;
//       const itemIndex = state.cart.findIndex((product) => product.id === itemId);
//       if (itemIndex !== -1) {
//         state.value -= state.cart[itemIndex].quantity; // Subtract total count
//         state.cart.splice(itemIndex, 1); // Remove item from cart
//       }
//     },
//   },
// });

// export const { addToCart, incrementItem, decrementItem, deleteItem } =
//   addCartSlice.actions;
// export default addCartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Cart should be an array
  value: 0, // Total number of items in the cart
};

const addCartSlice = createSlice({
  name: "cart", // This should be named "cart" to match the state slice in the store
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((product) => product.id === item.id);
     
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
        console.log(action);
      }
      state.value += 1;
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((product) => product.id === itemId);
      if (item) {
        item.quantity += 1;
        state.value += 1;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((product) => product.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.value -= 1;
      } else {
        state.cart = state.cart.filter((product) => product.id !== itemId);
        state.value -= 1;
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((product) => product.id === itemId);
      if (itemIndex !== -1) {
        state.value -= state.cart[itemIndex].quantity;
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, incrementItem, decrementItem, deleteItem } = addCartSlice.actions;
export default addCartSlice.reducer;
