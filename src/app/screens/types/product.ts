import { Review } from "./review";
import { Member } from "./user";

export interface MeLiked {
  mb_id: string;
  like_ref_id: string;
  my_favorite: boolean;
}

export interface Product {
  _id: string;
  product_name: string;
  product_collection: string;
  product_status: string;
  product_price: number;
  product_discount: number;
  product_left_cnt: number;
  product_size: string;
  product_weight: number;
  product_family: number;
  product_volume: number;
  product_description: string;
  product_images: string[];
  product_likes: number;
  product_views: number;
  market_mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  me_liked: MeLiked[]; // Me liked
  member_data: Member[];
  reviews?: Review[];
}
