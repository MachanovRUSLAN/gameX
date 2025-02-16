import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

// Define the type for a product
interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
  category: string;
}

// Define the type for the cart state
interface CartState {
  cartItems: Product[];
  selectedCategory:string
}

const initialState: CartState = {
  cartItems: [],
  selectedCategory:''
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove item from cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase quantity
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    //filter by Category
    SetCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  SetCategory,
} = cartSlice.actions;

export default cartSlice.reducer;
