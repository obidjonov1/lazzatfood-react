import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import { AiFillLike } from "react-icons/ai";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticle } from "../../screens/types/boArticle";
import { serverApi } from "../../../lib/config";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";

export function MemberPosts(props: any) {
  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild,
  } = props;

  /* HANDLERS */
  // Like Hanlde
  const targetLikeHandler = async (e: any) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box className={"post_content"}>
      {chosenMemberBoArticles.map((article: BoArticle) => {
        const image_path = article.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/article_img.svg";

        return (
          <Stack
            className={"all_article_box"}
            sx={{ cursor: "pointer" }}
            onClick={() => renderChosenArticleHandler(article?._id)}
          >
            <Box
              className={"all_article_img"}
              sx={{
                backgroundImage: `url(${image_path})`,
              }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box
                alignItems={"center"}
                display={"flex"}
                className="article_img"
              >
                <img
                  src={
                    article?.member_data?.mb_image
                      ? `${serverApi}/${article.member_data.mb_image}`
                      : "/images/default_user.svg"
                  }
                  alt=""
                />
                <span className={"all_article_author_user"}>
                  {article?.member_data?.mb_nick}
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
                    <span>
                      {moment(article?.createdAt).format("YY-MM-DD HH:mm")}
                    </span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<AiFillLike style={{ fontSize: "22px" }} />}
                      id={article?._id}
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
                      onClick={targetLikeHandler}
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
          </Stack>
        );
      })}
    </Box>
  );
}
