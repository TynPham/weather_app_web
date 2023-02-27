import React, { useEffect, useState } from "react";
import Status from "../status/Status";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const CurrentTime = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      timeStyle: "short",
    })
  );
  const today = new Date().toLocaleDateString("en-US", options);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          timeStyle: "short",
        })
      );
    }, 1000 * 60);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [time]);

  return (
    <div className="flex justify-between items-center text-white transition">
      <div>
        <h3 className="-mt-2 w-max text-2.75">{time}</h3>
        <p className="-mt-2 text-sm">{today}</p>
      </div>
      <Status />
    </div>
  );
};

export default CurrentTime;
