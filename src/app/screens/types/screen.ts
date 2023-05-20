import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Market } from "./user";
import { Order } from "./order";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  marketPage: MarketPageState;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
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

/* ORDER PAGE INTERFACE */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}

/* COMMUNITY PAGE INTERFACE */
export interface CommunityPageState {
  targetBoArticles: BoArticle[];
}
