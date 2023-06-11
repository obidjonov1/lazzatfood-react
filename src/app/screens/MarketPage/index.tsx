import React from "react";
import { Container } from "@mui/system";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenProduct } from "./chosenProduct";
import { OneMarket } from "./oneMarket";
import { AllMarkets } from "./allMarkets";
import { NavbarOthersBanner } from "./banner";
import "../../../css/market.css";

export function MarketPage(props: any) {
  let market = useRouteMatch();
  console.log(market);

  return (
    <div>
      <NavbarOthersBanner />
      <Switch>
        <Route path={`${market.path}/product/:product_id`}>
          <ChosenProduct onAdd={props.onAdd} />
        </Route>
        <Route path={`${market.path}/:market_id`}>
          <OneMarket onAdd={props.onAdd} />
        </Route>
        <Route path={`${market.path}`}>
          <AllMarkets />
        </Route>
      </Switch>
    </div>
  );
}
