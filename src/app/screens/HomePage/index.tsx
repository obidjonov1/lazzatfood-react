import React from "react";
import { Container } from "@mui/system";
import { TopMarkets } from "./topMarkets";
import { BestMarkets } from "./bestMarkets";
import { ActualProducts } from "./actualProducts";
import { RecommendedProducts } from "./recommendedProducts";
import { RecommendedArticles } from "./recommendedArticles";

import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="home_page">
      <TopMarkets />
      <BestMarkets />
      <ActualProducts />
      <RecommendedProducts />
      <RecommendedArticles />
    </div>
  );
}
