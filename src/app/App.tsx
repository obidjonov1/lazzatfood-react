import React, { useState } from "react";
import "../css/App.css";
import "../css/footer.css";
import "../css/navbar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MarketPage } from "./screens/MarketPage";
import { ShopPage } from "./screens/ShopPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { NewsPage } from "./screens/NewsPage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarMarket } from "./components/header/market";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
import { CertificatePage } from "./screens/CertificatePage";
import { TermsOfServicePage } from "./screens/TermsOfServicePage";
import { PrivacyPage } from "./screens/PrivacyPage";
import { DeliveryPolicyPage } from "./screens/DeliveryPolicyPage";
import { PartnershipPage } from "./screens/PartnershipPage";
import AuthenticationModal from "./components/auth";

function App() {
  /* INITIALIZATIONS */
  const [path, setPath] = useState();
  const main_path = window.location.pathname;

  const [loginOpen, setLoginOpen] = useState(false);

  /* HABDLERS */
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
        />
      ) : main_path.includes("/markets") ? (
        <NavbarMarket
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
        />
      )}

      <Switch>
        <Route path="/certificates">
          <CertificatePage />
        </Route>
        <Route path="/markets">
          <MarketPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
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
        <Route path="/news">
          <NewsPage />
        </Route>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/terms">
          <TermsOfServicePage />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
        <Route path="/delivery-policy">
          <DeliveryPolicyPage />
        </Route>
        <Route path="/partners">
          <PartnershipPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer setPath={setPath} />

      <AuthenticationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
      />
    </Router>
  );
}

export default App;
