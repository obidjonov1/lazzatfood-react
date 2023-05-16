import React from "react";
import { Container } from "@mui/system";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenProduct } from "./chosenProduct";
import { OneMarket } from "./oneMarket";
import { AllMarkets } from "./allMarkets";
import { NavbarMarketBanner } from "./banner";
import "../../../css/market.css";

export function MarketPage() {
  let market = useRouteMatch();
  console.log(market);

  return (
    <div>
      <NavbarMarketBanner />
      <Switch>
        <Route path={`${market.path}/product/:product_id`}>
          <ChosenProduct />
        </Route>
        <Route path={`${market.path}/:product`}>
          <OneMarket />
        </Route>
        <Route path={`${market.path}`}>
          <AllMarkets />
        </Route>
      </Switch>
    </div>
  );
}
