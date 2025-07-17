import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartslice";

const reducers = combineReducers({
  cart: cartSlice.reducer,
});
const store = configureStore({
  reducer: reducers,
});
export default store;
