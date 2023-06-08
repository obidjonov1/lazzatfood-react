import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BoArticle, SearchArticlesObj } from "../../screens/types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { NavbarOthersBanner } from "./banner";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetBoArticles } from "./slice";
import { retriveTargetBoArticles } from "./selector";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetBoArticles: (data: BoArticle[]) =>
    dispatch(setTargetBoArticles(data)),
});

/** REDUX SELECTOR */
const targetBoArticlesRetriver = createSelector(
  retriveTargetBoArticles,
  (targetBoArticles) => ({
    targetBoArticles,
  })
);

export function CommunityPage(props: any) {
  /** INITIALIZATIONS **/
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { targetBoArticles } = useSelector(targetBoArticlesRetriver);
  const [value, setValue] = React.useState("1");
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticlesObj>(
    {
      bo_id: "all",
      page: 1,
      limit: 8,
    }
  );

  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => {
        setTargetBoArticles(data);
      })
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articlesRebuild]);

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "all";
        break;
      case "2":
        searchArticlesObj.bo_id = "evaluation";
        break;
      case "3":
        searchArticlesObj.bo_id = "review";
        break;
      case "4":
        searchArticlesObj.bo_id = "story";
        break;
    }
    setSearchArticlesObj({ ...searchArticlesObj }); //backendan data chaqiryapti
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj }); //backendan data chaqiryapti
  };

  return (
    <div>
      <NavbarOthersBanner />
      <div className={"community_page"}>
        <div className={"community_frame"}>
          <Container sx={{ mt: "80px", mb: "80px" }}>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              {/* <CommunityChats /> */}
              <Stack className={"community_all_frame"} inputMode={"text"}>
                <TabContext value={value}>
                  <Box className={"article_tabs"}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        value={value}
                        TabIndicatorProps={{ style: { background: "#284578" } }}
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        style={{ borderColor: "blue" }}
                      >
                        <Tab
                          label="All articles"
                          value="1"
                          style={{ color: "#172b4d", fontWeight: "600" }}
                        />
                        <Tab
                          label="evaluate market"
                          value="2"
                          style={{ color: "#172b4d", fontWeight: "600" }}
                        />
                        <Tab
                          label="review product"
                          value="3"
                          style={{ color: "#172b4d", fontWeight: "600" }}
                        />
                        <Tab
                          label="stories"
                          value="4"
                          style={{ color: "#172b4d", fontWeight: "600" }}
                        />
                      </TabList>
                    </Box>
                  </Box>

                  <Box className={"article_main"}>
                    <TabPanel value="1">
                      {/* parentga target qilyabmiz childga yuborish uchun [targetArticl.tsx[9]] */}
                      <TargetArticles
                        targetBoArticles={targetBoArticles}
                        setArticlesRebuild={setArticlesRebuild}
                      />
                    </TabPanel>
                    <TabPanel value="2">
                      <TargetArticles
                        targetBoArticles={targetBoArticles}
                        setArticlesRebuild={setArticlesRebuild}
                      />
                    </TabPanel>
                    <TabPanel value="3">
                      <TargetArticles
                        targetBoArticles={targetBoArticles}
                        setArticlesRebuild={setArticlesRebuild}
                      />
                    </TabPanel>
                    <TabPanel value="4">
                      <TargetArticles
                        targetBoArticles={targetBoArticles}
                        setArticlesRebuild={setArticlesRebuild}
                      />
                    </TabPanel>
                  </Box>

                  <Box className={"article_bott"}>
                    <Pagination
                      count={
                        searchArticlesObj.page >= 3
                          ? searchArticlesObj.page + 1
                          : 3
                      }
                      page={searchArticlesObj.page}
                      renderItem={(item) => (
                        <PaginationItem
                          components={{
                            previous: ArrowBackIcon,
                            next: ArrowForwardIcon,
                          }}
                          {...item}
                          color="standard"
                          sx={{ color: "#424242" }}
                        />
                      )}
                      onChange={handlePaginationChange}
                    />
                  </Box>
                </TabContext>
              </Stack>
            </Stack>
          </Container>
        </div>
      </div>
    </div>
  );
}
