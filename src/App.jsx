import { useEffect } from "react";
import { useDispatch } from "react-redux";
import weatherApi from "./api/weatherApi";
import "./App.css";
import { createParams } from "./data";
import Home from "./pages/Home";
import { setDataWeather } from "./reduxToolkit/dataWeatherSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = createParams();
        const response = await weatherApi.get(params);
        dispatch(setDataWeather(response));
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="App lg:h-screen lg:px-28 lg:py-1 md:px-0 md:py-0 py-0">
      <Home />
    </div>
  );
}

export default App;
