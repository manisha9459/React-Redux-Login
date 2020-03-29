import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import alertReducer from "./alert-reducer";
import dashboardReducer from "./dashboard-reducer";
import userListReducer from "./user-listReducer"

export default combineReducers({
  login: userReducer,
  alert: alertReducer,
  dashboard: dashboardReducer,
  todoList: userListReducer
});
