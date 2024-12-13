import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/Auth/authSlice";
import productSlice from "@/reducers/Product/productSlice";
import categorySlice from "@/reducers/Category/categorySlice";


const rootReducer = combineReducers({
  auth: authReducer,
  product:productSlice,
  category:categorySlice
  
});

export default rootReducer;
