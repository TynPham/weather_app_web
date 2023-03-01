import React from "react";
import CardSun from "./CardSun";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SunStatus = () => {
  return (
    <div className="md:px-6 md:py-4 p-3">
      <div className="flex justify-between items-center">
        <h4>Sunrise & Sunset</h4>
        <AiOutlinePlusCircle className="text-xl" />
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <CardSun />
      </div>
    </div>
  );
};

export default SunStatus;
