import React, { useEffect } from "react";
import { HeroSection } from "./heroSection";
import { ActualProducts } from "./actualProducts";
import { RecommendedProducts } from "./recommendedProducts";
import { RecommendedArticles } from "./recommendedArticles";
import { NavbarHomeBanner } from "./banner";
import { Advertisements } from "./advertisements";
import { TopMarkets } from "./topMarkets";


import "../../../css/home.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTopMarkets, setBestMarkets } from "../../screens/HomePage/slice";

import { Market } from "../types/user";
import MarketApiService from "../../apiServices/marketApiService";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopMarkets: (data: Market[]) => dispatch(setTopMarkets(data)),
  setBestMarkets: (data: Market[]) => dispatch(setBestMarkets(data)),
});

export function HomePage(props: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { setTopMarkets, setBestMarkets } = actionDispatch(useDispatch());

  // selector : takes data from store
  useEffect(() => {
    const restaurantService = new MarketApiService();
    restaurantService
      .getTopMarkets()
      .then((data) => {
        setTopMarkets(data);
      })
      .catch((err) => console.log(err));

    restaurantService
      .getMarkets({ page: 1, limit: 3, order: "mb_point" })
      .then((data) => {
        setBestMarkets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="home_page">
      <NavbarHomeBanner />
      <HeroSection />
      <Advertisements />
      <TopMarkets />
      <ActualProducts onAdd={props.onAdd} />
      <RecommendedProducts onAdd={props.onAdd} />
      <RecommendedArticles />
    </div>
  );
}
