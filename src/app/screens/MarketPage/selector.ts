import { createSelector } from "reselect";
import { AppRootState } from "../types/screen";

const selectMarketPage = (state: AppRootState) => state.marketPage;

export const retrieveTargetMarkets = createSelector(
  selectMarketPage,
  (MarketPage) => MarketPage.targetMarkets
);
export const retrieveRandomMarkets = createSelector(
  selectMarketPage,
  (MarketPage) => MarketPage.randomMarkets
);
export const retrieveChosenMarket = createSelector(
  selectMarketPage,
  (MarketPage) => MarketPage.chosenMarket
);
export const retrieveTargetProducts = createSelector(
  selectMarketPage,
  (MarketPage) => MarketPage.targetProducts
);
export const retrieveChosenProduct = createSelector(
  selectMarketPage,
  (MarketPage) => MarketPage.chosenProduct
);
