import React, { useState } from "react";
import { Box, Checkbox, Container, Link, Stack } from "@mui/material";
import { AiFillLike } from "react-icons/ai";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";
import Favorite from "@mui/icons-material/Favorite";
import { BoArticle } from "../../screens/types/boArticle";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { verifyMemberData } from "../../apiServices/verify";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export function TargetArticles(props: any) {
  /** HANDLERS */

  return (
    <Stack>
      {/* targetBoArticles? - crashni oldidni olish ichida ma'lumot bo'lsa */}
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/article_img.svg";

        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={""}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box
                alignItems={"center"}
                display={"flex"}
                className="article_img"
              >
                <img src={"/images/default_user.svg"} alt="" />
                <span className={"all_article_author_user"}>
                  {article.member_data.mb_nick}
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "10px" }}
              >
                <span className={"all_article_title"}>{article?.bo_id}</span>
                <p className={"all_article_desc"}>{article?.art_subject}</p>
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
                      checked={
                        article?.me_liked && article.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
                    />
                    <span style={{ marginRight: "18px" }}>
                      {article?.art_likes}
                    </span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "8px" }}>
                      {article?.art_views}
                    </span>
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
