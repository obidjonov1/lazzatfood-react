import { createSelector } from "reselect";
import { AppRootState } from "../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopMarkets = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topMarkets
);

export const retrieveBestMarkets = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestMarkets
);

export const retrieveTrendProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);

export const retrieveRecommendedProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recommendedProducts
);

export const retrieveTrendBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendBoArticles
);
