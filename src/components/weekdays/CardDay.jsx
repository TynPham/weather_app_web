import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../api/weatherApi";
import { createParamsForeCast, DEFAULT_CITY } from "../../data";
import { listWeatherImg } from "../../data";

const CardDay = () => {
  const [forecastData, setForecastData] = useState([]);
  const CITY = useSelector((state) => state.search);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const params = createParamsForeCast(CITY);
        const response = await weatherApi.getforecast(params);
        setForecastData(response.list);
      } catch (error) {}
    };

    fetchForecastData();
  }, [CITY]);

  const today = new Date().toLocaleString("default", { weekday: "long" });
  const getDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };
  const getHour = (time) => {
    return new Date(time * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      hour12: false,
    });
  };

  const getTemperature = (temp) => {
    return temp.toFixed(1);
  };

  const groupDataByDay = (data) => {
    const groups = {};
    data.forEach((item) => {
      const day = getDay(item.dt);
      if (!groups[day]) {
        groups[day] = {
          temperatures: [item.main.temp],
          icon: item.weather[0].icon,
        };
      } else {
        groups[day].temperatures.push(item.main.temp);
        if (getHour(item.dt) === "10") {
          groups[day].icon = item.weather[0].icon;
        }
      }
    });
    return groups;
  };

  const renderCard = (day, temperature, icon, isActive) => {
    return (
      <button
        className={`${
          isActive ? "bg-sky text-white-always" : "bg-primary"
        } flex flex-col justify-center items-center p-4 rounded-2xl transition`}
      >
        <img
          className="md:w-20 w-16 -mt-4"
          src={`/assets/image/${listWeatherImg[icon]}`}
          alt=""
        />
        <div className="flex flex-col gap-2 font-medium text-sm w-min m-auto">
          <span className="md:block hidden">{day}</span>
          <span className="md:hidden block">{day.slice(0, 3)}</span>
          <span className="relative mr-1">
            {temperature}
            <span className="absolute -top-1">°C</span>
          </span>
        </div>
      </button>
    );
  };

  const groupedData = groupDataByDay(forecastData);

  return (
    <div className="mt-1">
      <h2 className="capitalize">{CITY || DEFAULT_CITY} Weather Forecast</h2>
      <div className="row flex justify-between mt-2">
        {Object.keys(groupedData).map((day) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={day}>
            {renderCard(
              day,
              getTemperature(
                groupedData[day].temperatures.reduce((a, b) => a + b, 0) /
                  groupedData[day].temperatures.length
              ),
              groupedData[day].icon,
              day === today
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDay;
