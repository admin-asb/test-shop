import { Product } from "@/entities/product/model/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log("Добавляем товар:", action.payload);
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      console.log("Найден ли уже такой товар:", existing);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
