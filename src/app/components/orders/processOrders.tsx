import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";

// let dt = new Date();

const processOrders = [
  [1, 2, 3, 4],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
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
                        <p>$10</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>$30</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box"}>
                <Box className={"boxTotal"}>
                  <p>Price</p>
                  <p>$30</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Delivery</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "6px" }}
                    alt=""
                  />
                  <p>Total:</p>
                  <p>$32</p>
                </Box>
                <p className="data_compl">2023-03-02 23:19</p>
                <Button
                  variant="contained"
                  style={{ borderRadius: "10px", marginLeft: "15px" }}
                >
                  checkout
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
