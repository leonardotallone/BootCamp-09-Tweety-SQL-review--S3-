import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const logsSlice = createSlice({
  name: "request list",
  initialState,
  reducers: {
    newLog(state, action) {
      state.unshift(action.payload);
    },
  },
});

const { newLog } = logsSlice.actions;
export default logsSlice.reducer;

export const formatLog = (promise, dispatch) =>
  promise
    .then((r) => {
      const msg = {
        status: r.status,
        url: r.config.url,
        method: r.config.method,
      };
      dispatch(newLog(msg));
      return r.data;
    })
    .catch((err) => {
      const msg = {
        status: err.response.request.status,
        url: err.response.config.url,
        method: err.response.config.method,
      };
      dispatch(newLog(msg));
      throw err;
    });
