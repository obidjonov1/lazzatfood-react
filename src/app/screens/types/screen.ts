import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Member, Market } from "./user";
import { Follower, Following } from "./follow";
import { Order } from "./order";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  marketPage: MarketPageState;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
  memberPage: MemberPageState;
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

/* MEMBER PAGE INTERFACE */
export interface MemberPageState {
  chosenMember: Member | null;
  chosenMemberBoArticles: BoArticle[];
  chosenSingleBoArticle: BoArticle | null;
  memberFollowers: Follower[];
  memberFollowings: Following[];
}
