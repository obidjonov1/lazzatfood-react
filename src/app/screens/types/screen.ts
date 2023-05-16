import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Market } from "./user";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  marketPage: MarketPageState;
}

/* HOME PAGE INTERFACE */
export interface HomePageState {
  topMarkets: Market[];
  bestMarkets: Market[];
  trendProducts: Product[];
  recommendedProducts: Product[];
  trendBoArticles: BoArticle[];
}

/* Mareket PAGE INTERFACE */
export interface MarketPageState {
  targetMarkets: Market[];
  randomMarkets: Market[];
  chosenMarket: Market | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}
