import { configureStore } from "@reduxjs/toolkit";
import formReducers from "../features/FormData/Data.js";
const store = configureStore({
  reducer: {
    formdata: formReducers,
  },
});

export default store;
