import { createSlice } from "@reduxjs/toolkit";

export const dataWeatherSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
    setDataWeather: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = dataWeatherSlice;
export const { setDataWeather } = actions;
export default reducer;
