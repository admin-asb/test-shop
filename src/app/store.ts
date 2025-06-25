import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";

const isClient = typeof window !== "undefined";

const loadState = () => {
  if (!isClient) return undefined;

  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) };
  } catch (e) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch {}
};

export const makeStore = () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: loadState(),
  });

  store.subscribe(() => saveState(store.getState()));

  return store;
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
