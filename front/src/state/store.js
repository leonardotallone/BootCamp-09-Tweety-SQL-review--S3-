import { configureStore } from "@reduxjs/toolkit";
import logs from "./logs";
import tweetsReducer from "./tweets";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    logs: logs,
  },
});

export default store;
