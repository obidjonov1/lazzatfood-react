import React, { useState } from "react";
import { Container } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiShoppingBag } from "react-icons/bi";

export function ActualProducts(props: any) {
  const [value, setValue] = useState("1");

  /**Handlers */
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className="product-container">
        <div className="container">
          <div className="product-box actual_products">
            <div
              className="product-main"
              style={{ margin: "0px 10px 30px 60px" }}
            >
              <h1 className="title title_sale title_title">
                Actual <span>Products</span>
              </h1>
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="Basic tabs"
                  className="actual-product_tablist"
                >
                  <Tab label="meat" value="1" />
                  <Tab label="food" value="2" />
                  <Tab label="fresh & fast" value="3" />
                  <Tab label="drink" value="4" />
                </TabList>

                <TabPanel value="1" sx={{ p: 2 }}>
                  <div className="aktual-products">
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="2" sx={{ p: 2 }}>
                  <div className="aktual-products">
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="3" sx={{ p: 2 }}>
                  <div className="aktual-products">
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="4" sx={{ p: 2 }}>
                  <div className="aktual-products">
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                    <div className="aktual-product meal">
                      <img
                        className="aktual-img"
                        src="./images/food2.jpeg"
                        alt="mayanez"
                      />
                      <div className="aktual-body">
                        <p className="aktual-title">meal</p>
                        <h1 className="aktual-price">₩ 2500</h1>
                      </div>
                      <div className="actual_cart">
                        <button className="actual-cart_btn">
                          <BiShoppingBag className="actual_btn" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
