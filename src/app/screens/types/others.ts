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
