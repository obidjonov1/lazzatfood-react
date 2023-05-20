import React, { useEffect, useState } from "react";
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
import { Member } from "./screens/types/user";
import { serverApi } from "../lib/config";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import MemberApiService from "./apiServices/memberApiService";
import "../app/apiServices/verify";
import { CartItem } from "./screens/types/others";
import { Product } from "./screens/types/product";

function App() {
  /* INITIALIZATIONS */
  const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(
    null
  );
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);

  useEffect(() => {
    console.log("==== useEffect: App ====");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    //    ->  JSON.parse (memberDataJson) data bo'lsa obj ga aylantiryapti ->
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      // agar mbni img bo'lmasa dafault imgni yuklaydi ->
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/profile.svg";
      setVerifiedMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]); // <- ComponentDidUpdate

  /* HABDLERS */
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  // LOGOUT handles ->
  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApiService();
      await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  // Order(basket) handle
  const onAdd = (product: Product) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === product._id
    );
    if (exist) {
      const cart_updated = cartItems.map((item: CartItem) =>
        item._id === product._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const new_item: CartItem = {
        _id: product._id,
        quantity: 1,
        name: product.product_name,
        price: product.product_price,
        image: product.product_images[0],
      };
      const cart_updated = [...cartItems, { ...new_item }];
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onRemove = (item: CartItem) => {
    const item_data: any = cartItems.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const cart_updated = cartItems.filter(
        (ele: CartItem) => ele._id !== item._id
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const cart_updated = cartItems.map((ele: CartItem) =>
        ele._id === item._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onDelete = (item: CartItem) => {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  };
  const onDeleteAll = () => {};

  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          // logout->
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          // logout <-
          verifiedMemberData={verifiedMemberData}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ) : main_path.includes("/market") ? (
        <NavbarMarket
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          // logout->
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          // logout <-
          verifiedMemberData={verifiedMemberData}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          // logout->
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          // logout <-
          verifiedMemberData={verifiedMemberData}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      )}

      <Switch>
        <Route path="/certificates">
          <CertificatePage />
        </Route>
        <Route path="/market">
          <MarketPage onAdd={onAdd} />
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
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
    </Router>
  );
}

export default App;
