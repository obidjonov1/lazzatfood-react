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
}

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}
