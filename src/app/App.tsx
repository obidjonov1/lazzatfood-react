import React, { useState } from "react";
import "../css/App.css";
import "../css/footer.css";
import "../css/navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/market") ? (
        <NavbarMarket setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}
      {/*   <nav>
          <ul>
            <li>
              <Link to="/market">MarketPage</Link>
            </li>
            <li>
              <Link to="/community">CommunityPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">HelpPage</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </nav> */}

      <Switch>
        <Route path="/market">
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
    </Router>
  );
}

export default App;
