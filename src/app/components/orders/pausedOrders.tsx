import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "../../screens/OrdersPage/selector";

/** REDUX SELECTOR */
const pausedOrdersRetriver = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const pausedOrders = [
  [1, 2, 3, 4],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  /* INITIALIZATIONS */
  // const { pausedOrders } = useSelector(pausedOrdersRetriver);

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
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
                        <p>7$</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>21$</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box"}>
                <Box className={"boxTotal"}>
                  <p>Price</p>
                  <p>$21</p>
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
                  <p>$89</p>
                </Box>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#c40909",
                    borderRadius: "10px",
                    marginRight: "26px",
                  }}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ borderRadius: "10px", background: "#43BB59" }}
                >
                  pay
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
