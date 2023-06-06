import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { HiArrowPath } from "react-icons/hi2";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export function HeroSection(props: any) {
  /* INITIALIZATION */
  const history = useHistory();

  const goShopHandler = () => history.push("/shop");

  return (
    <Container>
      <div className="hero-top">
        <div className="hero-top_box">
          <TbTruckDelivery className="hero_icon" />
          <div className="hero-item_txt">
            <h4>FREE SHIPPING</h4>
            <p>Free shipping on all orders up to 5km or orders over ₩99,000</p>
          </div>
        </div>
        <div className="hero-top_box">
          <BiSupport className="hero_icon" />
          <div className="hero-item_txt">
            <h4>SUPPORT 24/7</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="hero-top_box">
          <HiArrowPath className="hero_icon" />
          <div className="hero-item_txt">
            <h4>3 DAYS RETURN</h4>
            <p>Simply return it within 3 days for an exchange</p>
          </div>
        </div>
        <div className="hero-top_box">
          <RiSecurePaymentLine className="hero_icon" />
          <div className="hero-item_txt">
            <h4>100% PAYMENT SECURE</h4>
            <p>We ensure secure payment with PEV</p>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-bottom_item1">
          <div className="hero-item_desc">
            <h3>Fruits & Dried Fruits</h3>
            <button className="hero-btn" onClick={goShopHandler}>
              <p>Shop Now</p>
              <BsFillArrowRightCircleFill className="hero-btn_icon" />
            </button>
          </div>
        </div>
        <div className="hero-bottom_item2">
          <div className="hero-item_desc">
            <h3>Fresh Vegetables</h3>
            <button className="hero-btn" onClick={goShopHandler}>
              <p>Shop Now</p>
              <BsFillArrowRightCircleFill className="hero-btn_icon" />
            </button>
          </div>
        </div>
        <div className="hero-bottom_item3">
          <div className="hero-bottom_item_box1">
            <div className="hero-item_desc">
              <h3>Fresh Bread</h3>
              <button className="hero-btn" onClick={goShopHandler}>
                <p>Shop Now</p>
                <BsFillArrowRightCircleFill className="hero-btn_icon" />
              </button>
            </div>
          </div>
          <div className="hero-bottom_item_box2">
            <div className="hero-item_desc">
              <h3>Fish & Seafood</h3>
              <button className="hero-btn" onClick={goShopHandler}>
                <p>Shop Now</p>
                <BsFillArrowRightCircleFill className="hero-btn_icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
