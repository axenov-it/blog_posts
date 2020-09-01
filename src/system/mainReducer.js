import { combineReducers } from "redux";

import posts from "../components/pages/Posts/redux/reducer";
import postEdit from "../components/pages/PostEdit/redux/reducer";

export default combineReducers({
  posts,
  postEdit,
});
