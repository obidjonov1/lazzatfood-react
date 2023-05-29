import { Review } from "./review";

export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}

export interface ProductSearchObj {
  page: number;
  limit: number;
  order: string;
  market_mb_id?: string;
  mb_nick?: string;
  product_collection?: string;
  product_discount?: number;
  reviews?: Review[];
  product_storage?: string;
}

export interface ProductSearchByCategoryObj {
  types: string;
}

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}

export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

//  Socket.io
export interface ChatMessage {
  msg: string;
  mb_id: string;
  mb_nick: string;
  mb_image: string;
}

export interface ChatGreetMsg {
  text: string;
}

export interface ChatInfoMsg {
  total: number;
}
