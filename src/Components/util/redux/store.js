import { configureStore } from "@reduxjs/toolkit";
import userslice from "./../redux/userslice";

const store=configureStore({
    reducer:{userslice}
})
export default store;