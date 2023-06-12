import React, { useState } from "react";
import { Box, Checkbox, Container, Link, Stack } from "@mui/material";
import { AiFillLike } from "react-icons/ai";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";
import { BoArticle } from "../../screens/types/boArticle";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";
import { url } from "inspector";
import { MdDateRange } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

export function TargetArticles(props: any) {
  /** HANDLERS */

  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild,
  } = props;

  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 800, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="community_container">
      {/* targetBoArticles? - crashni oldidni olish ichida ma'lumot bo'lsa */}
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/article_img.svg";

        const user_image = article?.member_data.mb_image
          ? `${serverApi}/${article?.member_data.mb_image}`
          : "/images/default_user.svg";

        return (
          <div className="community_box">
            <div className="community_image">
              <img src={art_image_url} alt="" />
            </div>
            <div className="community_body">
              <div className="community_user">
                <img src={user_image} alt="" />
                <span>{article?.member_data.mb_nick}</span>
               
              </div>
              <p className="community_title">
                {article?.art_subject.length > 33
                  ? article?.art_subject.slice(0, 30) + "..."
                  : article?.art_subject}
              </p>

              <div className="like_vs_view">
                <span className="community_date">
                  <MdDateRange
                    style={{ fontSize: "16px", marginRight: "5px" }}
                  />
                  {moment(article?.createdAt).format("LL")}
                </span>
                <Checkbox
                  icon={
                    <AiFillLike
                      style={{ fontSize: "19px", color: "#4c4a4a" }}
                    />
                  }
                  checkedIcon={
                    <AiFillLike
                      style={{ color: "primary", fontSize: "19px" }}
                    />
                  }
                  id={article?._id}
                  onClick={targetLikeHandler}
                  checked={
                    article?.me_liked && article.me_liked[0]?.my_favorite
                      ? true
                      : false
                  }
                />
                <span style={{ marginRight: "18px" }}>
                  {article?.art_likes}
                </span>
                <RemoveRedEyeIcon
                  style={{ fontSize: "19px", color: "#4c4a4a" }}
                />
                <span style={{ marginLeft: "8px" }}>{article?.art_views}</span>
              </div>
              <a
                style={{ display: "inline-block" }}
                href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
              >
                <button className="community-read_btn">
                  read more <RiArrowRightSLine style={{ fontSize: "15px" }} />
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
