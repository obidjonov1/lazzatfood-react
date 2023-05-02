import React, { useState } from "react";
import "../css/App.css";
import "../css/footer.css";
import "../css/navbar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MarketPage } from "./screens/MarketPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarMarket } from "./components/header/market";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/markets") ? (
        <NavbarMarket setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}
      <Switch>
        <Route path="/markets">
          <MarketPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
