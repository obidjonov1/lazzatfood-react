import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../types/screen";

const initialState: HomePageState = {
  topMarkets: [],
  bestMarkets: [],
  trendProducts: [],
  recommendedProducts: [],
  trendBoArticles: [],
  healthProducts: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopMarkets: (state, action) => {
      state.topMarkets = action.payload;
    },
    setBestMarkets: (state, action) => {
      state.bestMarkets = action.payload;
    },
    setTrendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    setRecommendedProducts: (state, action) => {
      state.recommendedProducts = action.payload;
    },
    setTrendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    setHealthProducts: (state, action) => {
      state.healthProducts = action.payload;
    },
  },
});

export const {
  setTopMarkets,
  setBestMarkets,
  setTrendProducts,
  setRecommendedProducts,
  setTrendBoArticles,
  setHealthProducts,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;
