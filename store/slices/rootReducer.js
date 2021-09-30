import { combineReducers } from "@reduxjs/toolkit";

import homeSlice from "./home/homeSlice";

const rootReducer = combineReducers({
    homePage: homeSlice
});

export default rootReducer;
