import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import moment from "moment";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrdersPage/selector";
import { Order } from "../../screens/types/order";
import { Product } from "../../screens/types/product";
import { serverApi } from "../../../lib/config";
import OrderApiService from "../../apiServices/orderApiService";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";

/** REDUX SELECTOR */
const processOrdersRetriver = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

export default function ProcessOrders(props: any) {
  /* INITIALIZATIONS */
  const { processOrders } = useSelector(processOrdersRetriver);

  /* HANDLES */
  const finishOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Can you confirm that you have received the order?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
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
                        <p>₩{item.item_price}</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>{item.item_quantity}</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ₩{item.item_price * item.item_quantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box"}>
                <Box className={"boxTotal"}>
                  <p>Price</p>
                  <p>₩{order.order_total_amount - order.order_delivery_cost}</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Delivery</p>
                  <p>₩{order.order_delivery_cost}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "6px" }}
                    alt=""
                  />
                  <p>Total:</p>
                  <p>₩{order.order_total_amount}</p>
                </Box>
                <p className="data_compl">
                  {moment(order.createdAt).format("YY-MM-DD hh:mm")}
                </p>
                <Button
                  value={order._id}
                  onClick={finishOrderHandler}
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
