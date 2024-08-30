import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
