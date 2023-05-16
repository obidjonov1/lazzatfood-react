import { createSlice } from "@reduxjs/toolkit";
import { MarketPageState } from "../types/screen";

// SLICE= boshlang'ich qiymatlarnini "store"ga "SET" qilish uchun hizmat qiladi -->
const initialState: MarketPageState = {
  targetMarkets: [],
  randomMarkets: [],
  chosenMarket: null,
  targetProducts: [],
  chosenProduct: null,
};

const marketPageSlice = createSlice({
  name: "marketPage",
  initialState,
  reducers: {
    setTargetMarkets: (state, action) => {
      state.targetMarkets = action.payload;
    },
    setRandomMarkets: (state, action) => {
      state.randomMarkets = action.payload;
    },
    setChosenMarket: (state, action) => {
      state.chosenMarket = action.payload;
    },
    setTargetProducts: (state, action) => {
      state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
  },
});

export const {
  setTargetMarkets,
  setRandomMarkets,
  setChosenMarket,
  setTargetProducts,
  setChosenProduct,
} = marketPageSlice.actions;

const MarketPageReducer = marketPageSlice.reducer;

export default MarketPageReducer;
