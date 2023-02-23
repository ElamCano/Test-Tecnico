import { configureStore } from "@reduxjs/toolkit";
import prices from "./slice/index";

export default configureStore({
  reducer: {
    prices,
  },
});
