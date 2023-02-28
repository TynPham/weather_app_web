import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import weatherApi from "./api/weatherApi";
import "./App.css";
import { createParams } from "./data";
import Home from "./pages/Home";
import LogIn from "./pages/logIn/LogIn";
import { setDataWeather } from "./reduxToolkit/dataWeatherSlice";

function App() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user);
  const isHaveUser = Object.keys(dataUser).length;

  useEffect(() => {
    if (isHaveUser !== 0) {
      const fetchData = async () => {
        try {
          const params = createParams();
          const response = await weatherApi.get(params);
          dispatch(setDataWeather(response));
        } catch (error) {}
      };
      fetchData();
    }
  }, [isHaveUser]);

  return (
    <BrowserRouter>
      <div className="App lg:h-screen lg:px-28 lg:py-1 px-0 py-0">
        <Routes>
          <Route path="/" element={<Navigate to="/LogIn" />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
