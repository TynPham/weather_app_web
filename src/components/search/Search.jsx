import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch } from "react-redux";
import weatherApi from "../../api/weatherApi";
import { setDataWeather } from "../../reduxToolkit/dataWeatherSlice";
import { setSearchValue } from "../../reduxToolkit/SearchSlice";

import { ToastContainer, toast } from "react-toastify";
import { createParams } from "../../data";

const Search = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(country));
    const fetchData = async () => {
      try {
        const params = createParams(country);
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
      className="flex items-center justify-around bg-search w-3/5 p-2 rounded-2xl transition"
    >
      <FiSearch
        onClick={handleSubmit}
        className="text-2xl text-white cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="inputField placeholder:italic w-4/6 p-1 border-none outline-0 bg-transparent text-white"
      />
      <button
        type="button"
        className="p-2 bg-status rounded-full shadow-location transition"
      >
        <HiOutlineLocationMarker className="text-base text-white transition" />
      </button>
      <ToastContainer />
    </form>
  );
};

export default Search;
