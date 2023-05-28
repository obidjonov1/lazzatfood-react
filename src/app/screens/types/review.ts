import { MeLiked } from "./product";
import { Member } from "./user";

export interface Review {
  reviews_cnt: number;
  ratingByValue?: {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
  };
  average_rating?: number;
}
