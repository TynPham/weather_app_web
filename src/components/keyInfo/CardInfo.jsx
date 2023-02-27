import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const options = {
  rain: "Rain Percentage",
  clouds: "Clouds Percentage",
  pressure: "Pressure",
};

const CardInfo = ({ Icon, property = "rain", result, unit = "%" }) => {
  const title = options[property];

  return (
    <div className="bg-sunStatus flex justify-between items-center p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="text-3xl text-orange_cf">
          <Icon />
        </div>
        <div className="flex flex-col gap-1">
          <span>{title}</span>
          <h2 className="text-blue_cf text-2xl font-medium">
            {result || 0} <span>{unit}</span>
          </h2>
        </div>
      </div>
      <BsThreeDotsVertical className="text-orange_cf" />
    </div>
  );
};

export default CardInfo;
