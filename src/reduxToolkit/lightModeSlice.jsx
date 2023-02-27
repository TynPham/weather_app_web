import { createSlice } from "@reduxjs/toolkit";

const lightModeSlice = createSlice({
  name: "light_mode",
  initialState: false,
  reducers: {
    setLightMode: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = lightModeSlice;
export const { setLightMode } = actions;
export default reducer;
