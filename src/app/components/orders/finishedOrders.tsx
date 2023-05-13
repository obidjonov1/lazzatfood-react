import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

const finishedOrders = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3],
];

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/images/food2.jpeg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} alt="" />
                      <p className={"titleDish"}>Product</p>
                      <Box className={"priceBox"}>
                        <p>30$</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>90$</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box
                className={"total_price_box red_solid"}
                sx={{ bgcolor: "#43BB59" }}
              >
                <Box className={"boxTotal red_solid"}>
                  <p>Price</p>
                  <p>$90</p>
                  <img
                    // src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <span className="price_total_icon">+</span>
                  <p>Delivery</p>
                  <p>$2</p>
                  <img
                    // src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <span className="price_total_icon">=</span>
                  <p>Total:</p>
                  <p>$92</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
