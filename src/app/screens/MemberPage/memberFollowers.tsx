import React, { useEffect, useState } from "react";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setMemberFollowers } from "./slice";
import { retriveMemberFollowers } from "./selector";
import { FollowSearchObj, Follower } from "../../screens/types/follow";
import FollowApiService from "../../apiServices/followApiService";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data)),
});

/** REDUX SELECTOR */
const memberFollowersRetriver = createSelector(
  retriveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

export function MemberFollowers(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const { followRebuild, setFollowRebuild, mb_id } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriver);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    {
      page: 1,
      limit: 5,
      mb_id: mb_id,
    }
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);

  /* HANDLERS */
  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };

  const subscriberHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      followService.subscribe(id);

      await sweetTopSmallSuccessAlert("Subscribed successfully!", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload();
  };

  return (
    <Stack>
      {memberFollowers.map((follower: Follower) => {
        const image_url = follower?.subscriber_member_data?.mb_image
          ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
          : "/images/default_user.svg";
        return (
          <Box className={"follow_box"}>
            <Avatar
              alt={""}
              src={image_url}
              sx={{ width: 89, height: 89 }}
              style={{ cursor: "pointer" }}
              onClick={() => visitMemberHandler(follower?.subscriber_id)}
            />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>
                {follower?.subscriber_member_data?.mb_type}
              </span>
              <span
                className={"name_text"}
                style={{ cursor: "pointer" }}
                onClick={() => visitMemberHandler(follower?.subscriber_id)}
              >
                {follower?.subscriber_member_data?.mb_nick}
              </span>
            </div>
            {props.actions_enabled &&
              (follower.me_followed && follower.me_followed[0]?.my_following ? (
                <Button
                  variant={"contained"}
                  className={"following_already"}
                  disabled
                >
                  following
                </Button>
              ) : (
                <Button
                  variant={"contained"}
                  startIcon={
                    <img
                      src={"/icons/follow_icon.svg"}
                      style={{ width: "40px" }}
                      alt=""
                    />
                  }
                  className={"follow_btn"}
                  onClick={(e) => subscriberHandler(e, follower?.subscriber_id)}
                >
                  Follow Back
                </Button>
              ))}
          </Box>
        );
      })}
      <Stack
        sx={{ my: "40px" }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box className={"bottom_box"}>
          <Pagination
            count={
              followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3
            }
            page={followersSearchObj.page}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="primary"
                sx={{ color: "#43bb59" }}
              />
            )}
            onChange={handlePaginationChange}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
