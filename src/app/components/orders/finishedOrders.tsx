import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import { Order } from "../../screens/types/order";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "../../screens/OrdersPage/selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../screens/types/product";

/** REDUX SELECTOR */
const finishedOrdersRetriver = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

export default function FinishedOrders(props: any) {
  /* INITIALIZATIONS */
  const { finishedOrders } = useSelector(finishedOrdersRetriver);

  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;

                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} alt="" />
                      <p className={"titleDish"}>{product.product_name}</p>
                      <Box className={"priceBox"}>
                        <p>₩{item.item_price.toLocaleString()}</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>{item.item_quantity}</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ₩
                          {(
                            item.item_price * item.item_quantity
                          ).toLocaleString()}
                        </p>
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
                  <p>
                    ₩
                    {(
                      order.order_total_amount - order.order_delivery_cost
                    ).toLocaleString()}
                  </p>
                  <img
                    // src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <span className="price_total_icon">+</span>
                  <p>Delivery</p>
                  <p>₩{order.order_delivery_cost.toLocaleString()}</p>
                  <img
                    // src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <span className="price_total_icon">=</span>
                  <p>Total:</p>
                  <p>₩{order.order_total_amount.toLocaleString()}</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
