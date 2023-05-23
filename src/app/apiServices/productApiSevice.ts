import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../screens/types/others";
import { Product } from "../screens/types/product";

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

  async getChosenDish(product_id: string) {
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
      console.log(`ERROR:: getChosenDish ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
