import React, { useState } from "react";
import { Box, Container, Link, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AiFillEye, AiFillLike } from "react-icons/ai";

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
                backgroundImage: `url(${art_image_url})`,
              }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box
                alignItems={"center"}
                display={"flex"}
                className="article_img"
              >
                <img src="/images/default_user.svg" alt="" />
                <span className={"all_article_author_user"}>Steve</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                }}
              >
                <span className={"all_article_title"}>celebrity</span>
                <span className={"all_article_desc"}>start</span>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "rgb(255, 255, 255)",
                      marginLeft: "150px",
                      display: "flex",
                    }}
                  >
                    <span style={{ marginRight: "18px" }}>23-03-02 11:00</span>
                    <AiFillLike
                      className="view_btn"
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ marginRight: "18px" }}>2</span>
                    <AiFillEye className="view_btn" />
                    <span style={{ marginLeft: "6px" }}>10</span>
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
