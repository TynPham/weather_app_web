import { createSlice } from "@reduxjs/toolkit";

const dataUserSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {},
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = dataUserSlice;
export const { setUserData } = actions;
export default reducer;
