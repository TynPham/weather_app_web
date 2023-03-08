import React, { useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";
import Details from "../components/details/Details";
import Info from "../components/infomation/Info";
import { createParams } from "../data";
import { setDataWeather } from "../reduxToolkit/dataWeatherSlice";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const params = createParams();
        const response = await weatherApi.get(params);
        dispatch(setDataWeather(response));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-rgba">
          <HashLoader color="#36d7b7" size={100} />
        </div>
      ) : (
        <div className="lg:h-screen lg:px-28 lg:py-1 lg:grid-cols-7_3 grid-cols-1fr grid px-0 py-0">
          <Details />
          <Info />
        </div>
      )}
    </>
  );
};

export default Home;
