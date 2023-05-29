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

export interface Reviews {
  _id: string;
  rating_ref_id: string;
  mb_id: string;
  cmt_content: string;
  cmt_status: string;
  rating_group: string;
  rating_stars: number;
  cmt_likes: number;
  cmt_images: [];
  createdAt: Date;
  updatedAt: Date;
  follow_member_data: Member;
  member_data: Member[];
}

export interface SearchReviewsObj {
  rating_ref_id: string;
  limit?: number;
  order?: string;
  page?: number;
}

export interface ReviewInput {
  rating_group?: string;
  rating_stars: number | null;
  cmt_content: string;
  rating_ref_id: string | undefined;
}
