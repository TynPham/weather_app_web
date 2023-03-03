import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";
import { useSelector } from "react-redux";

const TimeOfDay = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const time = new Date().getHours();
    let currentTime = "";
    if (time >= 0 && time < 12) {
      currentTime = "Morning";
    } else if (time >= 12 && time < 17) {
      currentTime = "Afternoon";
    } else {
      currentTime = "Evening";
    }
    setTimeOfDay(currentTime);
  }, []);

  return (
    <>
      {timeOfDay === "Morning" && <WiSunrise className="text-2xl" />}
      {timeOfDay === "Afternoon" && <FiSun className="text-2xl" />}
      {timeOfDay === "Evening" && <BsMoonStars className="text-2xl" />}
      <h4 className="flex text-xl font-medium">
        Good&nbsp;
        {timeOfDay},&nbsp;<span>{user.displayName || user.email}</span>
      </h4>
    </>
  );
};

export default TimeOfDay;
