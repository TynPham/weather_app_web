import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch } from "react-redux";
import weatherApi from "../../api/weatherApi";
import { setDataWeather } from "../../reduxToolkit/dataWeatherSlice";
import { setSearchValue } from "../../reduxToolkit/SearchSlice";

import { toast } from "react-toastify";
import { createParams } from "../../data";
import axios from "axios";
import { Spinner } from "../../icon";

const Search = () => {
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country) {
      return;
    }
    const fetchData = async () => {
      try {
        const params = createParams(country);
        const response = await weatherApi.get(params);
        dispatch(setDataWeather(response));
        dispatch(setSearchValue(country));
      } catch (error) {
        toast.error("Wrong city or country name!", {
          autoClose: 2000,
        });
      }
    };
    fetchData();
    setCountry("");
  };

  const handleClickLocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const result = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`
          );
          const params = createParams(result.data.address.city);
          const response = await weatherApi.get(params);
          dispatch(setDataWeather(response));
          dispatch(setSearchValue(result.data.address.city));
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        toast.info("Please accept to share your location!");
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center justify-around bg-search w-3/5 p-2 rounded-2xl transition">
        <FiSearch onClick={handleSubmit} className="text-2xl text-white cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="inputField placeholder:italic w-4/6 p-1 border-none outline-0 bg-transparent text-white"
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <button onClick={handleClickLocation} type="button" className="p-2 bg-status rounded-full shadow-location transition">
            <HiOutlineLocationMarker className="text-base text-white transition" />
          </button>
        )}
      </form>
    </>
  );
};

export default Search;
