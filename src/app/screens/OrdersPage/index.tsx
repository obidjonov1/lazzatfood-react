import React, { useEffect, useState } from "react";
import { Box, Stack, Container } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";

// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
} from "../../screens/OrdersPage/slice";
import { Order } from "../types/order";
import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";
import { NavbarOthersBanner } from "./banner";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrdersPage(props: any) {
  // INITIALIZATIONS **/

  // har doim 1 page, valu ochilichi uchun
  const [value, setValue] = useState("1");

  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [
    props.orderRebuild,
    setFinishedOrders,
    setPausedOrders,
    setProcessOrders,
  ]);

  // HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavbarOthersBanner />
      <div className={"order_page"}>
        <Container
          maxWidth="lg"
          style={{ display: "flex", flexDirection: "row" }}
          sx={{ mt: "50px", mb: "50px" }}
        >
          <Stack className={"order_left"}>
            {/* ochilishi kerak bo'lgan value(page) */}
            <TabContext value={value}>
              <Box className={"order_nav_frame"}>
                <Box sx={{ width: "73%" }} className="order-frame_box">
                  <TabList
                    TabIndicatorProps={{ style: { background: "#43bb59" } }}
                    onChange={handleChange}
                    value={value}
                    aria-label="basic tabs example"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      background: "#f4f4f4",
                      borderRadius: "16px",
                    }}
                  >
                    <Tab
                      label="my orders"
                      value="1"
                      style={{
                        marginRight: "15px",
                        marginLeft: "115px",
                      }}
                    />
                    <Tab
                      label="process"
                      value="2"
                      style={{ marginRight: "15px" }}
                    />
                    <Tab
                      label="delivered"
                      value="3"
                      // style={{ marginRight: "15px" }}
                    />
                  </TabList>
                </Box>
              </Box>
              <Stack className={"order_main_content"}>
                <PausedOrders setOrderRebuild={props.setOrderRebuild} />
                <ProcessOrders setOrderRebuild={props.setOrderRebuild} />
                <FinishedOrders setOrderRebuild={props.setOrderRebuild} />
              </Stack>
            </TabContext>
          </Stack>
          <Stack className={"order_right"}>
            <Box className={"order_info_box"}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className={"order_user_img"}>
                  <img
                    className={"order_user_avatar"}
                    src={verifiedMemberData?.mb_image}
                    alt=""
                  />
                  <div className={"order_user_icon_box"}>
                    <img src="/icons/user_icon.svg" alt="" />
                  </div>
                </div>
                <span className={"order_user_name"}>
                  {verifiedMemberData?.mb_nick}
                </span>
                <span className={"order_user_prof"}>
                  {verifiedMemberData?.mb_type ?? "USER"}
                </span>
              </Box>
              <div
                style={{
                  border: `1px solid rgb(221, 221, 221)`,
                  marginTop: "40px",
                  width: "100%",
                }}
              ></div>
              <Box className={"order_user_address"}>
                <div style={{ display: "flex" }}>
                  <LocationOnIcon />
                </div>
                <div className={"spec_address_txt"}>
                  {verifiedMemberData?.mb_address ?? "No address"}
                </div>
              </Box>
            </Box>
            <Box className={"order_info_box"} marginTop={"15px"}>
              <input
                type={"text"}
                name={"card_number"}
                placeholder={"Card number: 0000 1111 2222 3333"}
                className={"card_input"}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type={"text"}
                  name={"card_period"}
                  placeholder={"07 / 25"}
                  className={"card_half_input"}
                />
                <input
                  type={"text"}
                  name={"card_period"}
                  placeholder={"CVV : 007"}
                  className={"card_half_input"}
                />
              </div>
              <input
                type={"text"}
                name={"card_creator"}
                placeholder={"Steve Sb"}
                className={"card_input"}
              />
              <div className={"cards_box"}>
                <img src="/icons/western.svg" alt="" />
                <img src="/icons/master.svg" alt="" />
                <img src="/icons/paypal.svg" alt="" />
                <img src="/icons/visa.svg" alt="" />
              </div>
            </Box>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
