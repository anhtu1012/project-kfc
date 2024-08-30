import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../models/food";
import { RootState } from "../RootReducer";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state: Food[], action: PayloadAction<Food>) => {
      //Kiểm tra xem có trong cart chưa
      //nhiệm vụ của some là trả về true false
      //findIndex là tìm vị trí
      const index = state.findIndex((food) => food.id === action.payload.id);
      if (index == -1) {
        state.push({
          ...action.payload, //food
          quantity: 1,
        });
      } else {
        //đã tồn tại
        state[index].quantity++;
      }
    },
    reset: () => [],
    remove: (state: Food[], action: PayloadAction<Food>) => {
      const index = state.findIndex((food) => food.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1); // Loại bỏ mục tại vị trí index
      }
    },
    changeQuantity: (state: Food[], action: PayloadAction<Food>) => {
      const index = state.findIndex((food) => food.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity = action.payload.quantity;
      }
    },
  },
});
export const { addToCart, reset, remove, changeQuantity } = cartSlice.actions;
export const selectCart = (store: RootState) => store.cart;
export default cartSlice.reducer;
