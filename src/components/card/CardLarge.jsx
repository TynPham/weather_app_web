import React from "react";
import { listWeatherImg } from "../../data";
import { Spinner } from "../../icon";
import Location from "./Location";
import WindHum from "./WindHum";
import IMG from "../../assets/image/sun.png";

const options = {
  month: "long",
  day: "numeric",
};

const CardLarge = ({ data }) => {
  const handleDay = (data) => {
    const today = new Date(data.dt * 1000).toLocaleDateString("en-US", options);
    return today.split(" ").reverse().join(" ");
  };

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <Spinner />
      ) : (
        <>
          <img
            className="absolute right-0 rounded-tr-2xl"
            src={IMG}
            alt="img"
          />
          <section className="md:min-h-430 min-h-500 relative flex flex-col items-center text-center text-white-always">
            <div className="flex items-center gap-1 absolute top-4 left-4">
              <Location name={data.name} />
            </div>
            <div className="md:gap-0 mt-4 flex flex-col gap-2">
              <img
                className="w-48"
                src={`src/assets/image/${listWeatherImg[data.weather[0].icon]}`}
                alt=""
              />
              <p className="lg:text-base text-xl font-semibold">
                Today, <span>{handleDay(data)}</span>
              </p>
              <span className="lg:text-7xl md:text-8xl text-7xl relative block mt-4 font-semibold">
                {Math.round(data.main.temp - 273)}
                <span className="absolute -top-2">°</span>
              </span>
              <span className="md:text-2xl text-[1.35rem] font-semibold">
                {data.weather[0].main}
              </span>
              <div className="flex justify-center mt-4">
                <WindHum wind={data.wind.speed} hum={data.main.humidity} />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CardLarge;
