import React, { useState } from "react";
import { Box, Checkbox, Container, Link, Stack } from "@mui/material";
import { AiFillLike } from "react-icons/ai";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {/* targetBoArticles? - crashni oldidni olish ichida ma'lumot bo'lsa */}
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/images/burak.jpeg";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={""}
          >
            <Box
              className={"all_article_img"}
              sx={{
                backgroundImage: `url('/images/burak.jpeg')`,
              }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box
                alignItems={"center"}
                display={"flex"}
                className="article_img"
              >
                <img src={"/images/default_user.svg"} alt="" />
                <span className={"all_article_author_user"}>Steve</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "10px" }}
              >
                <span className={"all_article_title"}>Evaluate markets</span>
                <p className={"all_article_desc"}>Good market</p>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"article_share_main article_share_main_box"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<AiFillLike style={{ fontSize: "22px" }} />}
                      checkedIcon={
                        <AiFillLike
                          style={{ color: "primary", fontSize: "22px" }}
                        />
                      }
                      checked={false}
                    />
                    <span style={{ marginRight: "18px" }}>100</span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "8px" }}>100</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}