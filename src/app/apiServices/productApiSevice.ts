import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../screens/types/others";
import { Product } from "../screens/types/product";
import {
  ReviewInput,
  Reviews,
  SearchReviewsObj,
} from "../screens/types/review";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "/products";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR:: getTargetProducts ${err.message}`);
      throw err;
    }
  }

  async getChosenProduct(product_id: string) {
    try {
      const url = `/products/${product_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR:: getChosenProduct ${err.message}`);
      throw err;
    }
  }

  async getReviewsChosenItem(data: SearchReviewsObj) {
    try {
      const url = `/reviews/?limit=${data.limit}&rating_ref_id=${data.rating_ref_id}&order=${data.order}&page=${data.page}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const reviews: Reviews = result.data.data;
      return reviews;
    } catch (err: any) {
      console.log(`ERROR ::: getReviewsChosenItem ${err.message}`);
      throw err;
    }
  }

  public async deleteReview(review_id: string) {
    try {
      const url = `/delete-review/${review_id}`;
      const result = await axios.post(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data.message);
      console.log("state:", result.data.state);

      return true;
    } catch (err: any) {
      console.log(`ERROR ::: deleteReview ${err.message}`);
      throw err;
    }
  }

  async createReview(data: ReviewInput) {
    try {
      const result = await axios.post(this.path + "/create-review", data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const review: Reviews = result.data.data;
      return review;
    } catch (err: any) {
      console.log(`createReview, ERROR: ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
