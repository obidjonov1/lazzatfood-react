import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Market } from "./user";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  //   restaurantPage: RestaurantPageState;
}

export interface HomePageState {
  topMarkets: Market[];
  bestMarkets: Market[];
  trendProducts: Product[];
  recommendedProducts: Product[];
  trendBoArticles: BoArticle[];
}

// export interface RestaurantPageState {}
