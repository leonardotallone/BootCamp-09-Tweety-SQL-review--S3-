import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { formatLog } from "./logs";

export const getTweetsRequest = createAsyncThunk("TWEETS", (arg, thunk) =>
  formatLog(axios.get("/api/tweets"), thunk.dispatch)
);

export const getSingleTweetRequest = createAsyncThunk("TWEET", (id, thunk) =>
  formatLog(axios.get(`/api/tweets/${id}`), thunk.dispatch)
);

export const getUserTweetsRequest = createAsyncThunk(
  "USER_TWEETS",
  (name, thunk) => formatLog(axios.get(`/api/users/${name}`), thunk.dispatch)
);

export const postTweetRequest = createAsyncThunk(
  "CREATE_TWEET",
  (args, thunk) => formatLog(axios.post("/api/tweets", args), thunk.dispatch)
);

export const deleteTweetRequest = createAsyncThunk(
  "DELETE_TWEET",
  (id, thunk) => formatLog(axios.delete(`/api/tweets/${id}`), thunk.dispatch)
);

const tweetsReducer = createReducer([], {
  [getTweetsRequest.fulfilled]: (state, action) => action.payload,
  [getSingleTweetRequest.fulfilled]: (state, action) => [action.payload],
  [getSingleTweetRequest.rejected]: (state, action) => [],
  [getUserTweetsRequest.fulfilled]: (state, action) => action.payload,
  [getUserTweetsRequest.rejected]: (state, action) => [],
  [postTweetRequest.fulfilled]: (state, action) => [...state, action.payload],
  [deleteTweetRequest.fulfilled]: (state, action) =>
    state.filter((tweet) => tweet.tid !== action.payload.tid),
});

export default tweetsReducer;
