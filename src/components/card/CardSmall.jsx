import React, { useEffect, useState } from "react";
import weatherApi from "../../api/weatherApi";
import { createParams } from "../../data";
import { Spinner } from "../../icon";
import Location from "./Location";
import WindHum from "./WindHum";

const CardSmall = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = createParams(name);
        const response = await weatherApi.get(params);
        setData(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="relative flex py-5 px-4 text-white-always">
          <WindHum wind={data.wind.speed} hum={data.main.humidity} />
          <div className="flex items-center gap-1 absolute top-4 right-4">
            <Location name={name} />
          </div>
          <span className="absolute bottom-4 right-4 text-2xl">
            {Math.round(data.main.temp - 273)}{" "}
            <span className="absolute -top-2 -right-2">°</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default CardSmall;
