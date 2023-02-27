import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchValue: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;
export const { setSearchValue } = actions;
export default reducer;
