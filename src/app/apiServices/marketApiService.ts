import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Market } from "../screens/types/user";

class RestaurantApiService {
  private readonly path: string;

  constructor() {
    this.path = serviceApi;
  }

  async getTopMarkets() {
    try {
      const url = "/markets?order=top&page=1&limit=3",
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result, Definer.general_err1);
      console.log("state:", result.data.state);
      const top_restaurants: Market[] = result.data.data; // result.data.data -> result.data(axios).data(backendagi data)
      return top_restaurants;
    } catch (err: any) {
      console.log(`ERROR:: getTopMarkets ${err.message}`);
      throw err;
    }
  }
}

export default RestaurantApiService;
