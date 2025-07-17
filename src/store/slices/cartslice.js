import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  totalPrice: 0,
  itemsNumber: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
        toast.success(`${action.payload.title} quantity updated in cart`);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.itemsNumber += 1;
        state.totalPrice += action.payload.price;
        toast.success(`${action.payload.title} added to cart`);
      }
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.itemsNumber -= 1;
        toast.info(`${item.title} removed from cart`);
      }
    },

    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.itemsNumber -= 1;
        state.totalPrice -= existingItem.price;
        toast.info(`${existingItem.title} removed from cart`);
      } else {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
        toast.info(`Reduced quantity of ${existingItem.title}`);
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice=0
      state.itemsNumber=0
      toast.info('Cart cleared');
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity,clearCart } =
  cartSlice.actions;

export const cartitem = (state) => state.cart.items;
export const cartquantity = (state) => state.cart.itemsNumber;
export const cartprice = (state) => state.cart.totalPrice;

export default cartSlice;
