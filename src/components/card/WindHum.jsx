import React from "react";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";

const WindHum = ({ wind, hum }) => {
  return (
    <>
      <div className="flex flex-col gap-3 mr-4">
        <div className="flex items-center gap-1 bar">
          <BiWind className="text-xl" />
          <span>Wind</span>
        </div>
        <div className="flex items-center gap-1 bar">
          <WiHumidity className="text-xl" />
          <span>Hum</span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        <span>{wind} km/h</span>
        <span>{hum} %</span>
      </div>
    </>
  );
};

export default WindHum;
