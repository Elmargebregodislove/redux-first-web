import Setting from "./setting";
import Posts from "./posts";
import {combineReducers} from "redux";
const all =combineReducers({
  userinfo:Setting,
  posts:Posts
});
export default all;
