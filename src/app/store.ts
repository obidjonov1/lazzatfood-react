import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import HomePageReducer from "./screens/HomePage/slice";
import MarketPageReducer from "./screens/MarketPage/slice";
import OrdersPageReducer from "./screens/OrdersPage/slice";


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    marketPage: MarketPageReducer,
    ordersPage: OrdersPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
