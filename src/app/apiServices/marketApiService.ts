import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Market } from "../screens/types/user";
import { SearchObj } from "../screens/types/others";

class MarketApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTopMarkets() {
    try {
      const url = "/markets?order=top&page=1&limit=3",
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const top_markets: Market[] = result.data.data; // result.data.data -> result.data(axios).data(backendagi data)
      return top_markets;
    } catch (err: any) {
      console.log(`ERROR:: getTopMarkets ${err.message}`);
      throw err;
    }
  }

  async getMarkets(data: SearchObj) {
    try {
      const url = `/markets?order=${data.order}&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const markets: Market[] = result.data.data; // result.data.data -> result.data(axios).data(backendagi data)
      return markets;
    } catch (err: any) {
      console.log(`ERROR:: getMarkets ${err.message}`);
      throw err;
    }
  }

  async getChosenMarket(id: string) {
    try {
      const url = `/markets/${id}`,
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const market: Market = result.data.data; // 1st is from axios  2nd is from backend
      return market;
    } catch (err: any) {
      console.log(`ERROR::: getChosenMarket ${err.message}`);
      throw err;
    }
  }
}

export default MarketApiService;
