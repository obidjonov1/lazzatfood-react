import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { MemberPosts } from "./memberPost";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TViewer } from "../../components/tuiEditor/tuiViewer";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import {
  retriveChosenMember,
  retriveChosenMemberBoArticles,
  retriveChosenSingleBoArticle,
} from "./selector";
import { Member } from "../../screens/types/user";
import { BoArticle } from "../../screens/types/boArticle";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenMember: (data: Member) => dispatch(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispatch(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispatch(setChosenSingleBoArticle(data)),
});

/** REDUX SELECTOR */
const chosenMemberRetriver = createSelector(
  retriveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriver = createSelector(
  retriveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticleRetriver = createSelector(
  retriveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);

export function VisitOtherPage(props: any) {
  /** INITIALIZATIONS **/
  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriver);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriver
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriver);

  const [value, setValue] = useState("4");

  /** HANDLER **/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"my_page"}>
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className={"my_page_frame"}>
          <TabContext value={value}>
            <Stack className={"my_page_left"}>
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value={"1"}>
                  <Box className={"menu_name"}>Articles</Box>
                  <Box className={"menu_content"}>
                    <MemberPosts />
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    {/* "following", "follow back" btn chiqmaydi -> */}
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>

                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Chosen Article</Box>
                  <Box className={"menu_content"}>
                    <TViewer text={`<h3>Hello</h3>`} />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className={"my_page_right"}>
              <Box className={"order_info_box"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className={"order_user_img"}>
                    <img
                      src={"/images/default_user.svg"}
                      className={"order_user_avatar"}
                      alt=""
                    />
                    <div className={"order_user_icon_box"}>
                      <img src={"/icons/user_icon.svg"} alt="" />
                    </div>
                  </div>
                  <span className={"order_user_name"}>Steve</span>
                  <span className={"order_user_prof"}>USER</span>
                </Box>
                <Box className={"user_media_box"}>
                  <p className={"follows"}>Followers: 5</p>
                  <p className={"follows"}>Followings: 7</p>
                </Box>
                <p className={"user_desc"}>No additional information</p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    {true ? (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={(e) => (
                          <Button
                            variant={"contained"}
                            style={{ backgroundColor: "#f70909b8" }}
                          >
                            un follow
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={(e) => (
                          <Button
                            variant={"contained"}
                            style={{ backgroundColor: "#30945e" }}
                            // @ts-ignore
                          >
                            follow
                          </Button>
                        )}
                      />
                    )}
                  </TabList>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"1"}
                    component={(e) => (
                      <div
                        className={`menu_box ${e} `}
                        onClick={() => setValue("1")}
                      >
                        <img src={"/icons/newspaper.png"} alt="" />
                        <span>Article</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <div
                        className={`menu_box ${value} `}
                        onClick={() => setValue("2")}
                      >
                        <img src={"/icons/follower.svg"} alt="" />
                        <span>Followers</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"3"}
                    component={() => (
                      <div
                        className={`menu_box ${value} `}
                        onClick={() => setValue("3")}
                      >
                        <img src={"/icons/following.svg"} alt="" />
                        <span>Following</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
