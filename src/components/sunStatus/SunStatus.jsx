import React from "react";
import CardSun from "./CardSun";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SunStatus = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        <h4>Sunrise & Sunset</h4>
        <AiOutlinePlusCircle className="text-xl" />
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <CardSun name="Dhaka" />
      </div>
    </div>
  );
};

export default SunStatus;
