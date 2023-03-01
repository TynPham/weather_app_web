import React from "react";
import { BsThreeDotsVertical, BsSun, BsMoonStars } from "react-icons/bs";
import { useSelector } from "react-redux";
import Location from "../card/Location";

const CardSun = () => {
  const data = useSelector((state) => state.weather);

  const convertTimer = (time) => {
    return new Date(time * 1000).toLocaleTimeString([], {
      timeStyle: "short",
    });
  };

  return (
    <section className="p-4 transition bg-sunStatus rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <Location name={data.name} down={false} color="text-blue_cf" />
        </div>
        <BsThreeDotsVertical className="text-orange_cf" />
      </div>
      <div className="lg:gap-36 md:gap-36 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BsSun className="text-orange_cf text-3xl" />
          <div className="flex flex-col text-sm">
            <span>Sunrise</span>
            <span className="text-base text-blue_cf w-max">
              {convertTimer(data.sys?.sunrise)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsMoonStars className="text-orange_cf text-3xl" />
          <div className="flex flex-col text-sm">
            <span>Sunset</span>
            <span className="text-base text-blue_cf w-max">
              {convertTimer(data.sys?.sunset)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSun;
