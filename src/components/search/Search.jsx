import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch } from "react-redux";
import weatherApi from "../../api/weatherApi";
import { API_KEY } from "../../data";
import { setDataWeather } from "../../reduxToolkit/dataWeatherSlice";
import { setSearchValue } from "../../reduxToolkit/SearchSlice";

import { ToastContainer, toast } from "react-toastify";

const Search = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(country));
    const fetchData = async () => {
      try {
        const params = {
          q: country,
          appid: API_KEY,
        };
        const response = await weatherApi.get(params);
        dispatch(setDataWeather(response));
      } catch (error) {
        toast.error("Wrong city or country name!", {
          autoClose: 2000,
        });
      }
    };
    fetchData();
    setCountry("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-around bg-search transition w-3/5 p-2 rounded-2xl"
    >
      <FiSearch
        onClick={handleSubmit}
        className="text-white text-2xl cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="inputField placeholder:italic w-4/6 border-none outline-0 p-1 bg-transparent text-white"
      />
      <button
        type="button"
        className="p-2 bg-status transition rounded-full shadow-location"
      >
        <HiOutlineLocationMarker className="text-white text-base transition" />
      </button>
      <ToastContainer />
    </form>
  );
};

export default Search;
