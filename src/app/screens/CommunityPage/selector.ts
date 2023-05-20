import { createSelector } from "reselect";
import { AppRootState } from "../../screens/types/screen";

const selectCommunityPage = (state: AppRootState) => state.communityPage;
export const retriveTargetBoArticles = createSelector(
  selectCommunityPage,
  (CommunityPage) => CommunityPage.targetBoArticles
);
