import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";

const Location = ({ name, down = true, color = "text-white" }) => {
  return (
    <>
      <CiLocationOn className={`text-2xl ${color} transition`} />
      <span className="capitalize">{name}</span>
      {down && <GoChevronDown className="mt-[2px]" />}
    </>
  );
};

export default Location;
