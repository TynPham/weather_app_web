import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reduxToolkit/SearchSlice";
import weatherReducer from "./reduxToolkit/dataWeatherSlice";
import lightModeReducer from "./reduxToolkit/lightModeSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
    lightMode: lightModeReducer,
  },
});

export default store;
