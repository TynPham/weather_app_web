import React, { useEffect, useRef, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setLightMode } from "../../reduxToolkit/lightModeSlice";

const Status = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const dispatch = useDispatch();
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  const handleToggle = (a, b) => {
    if (a === sunRef) {
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
    }
    dispatch(setLightMode(!isLightMode));
    a.current.classList.add("activeBg");
    b.current.classList.remove("activeBg");
  };

  return (
    <div className="bg-status transition p-1 rounded-[3rem]">
      <button
        ref={sunRef}
        className="sun p-2 rounded-full mr-2 transition-all duration-300 ease-in"
        onClick={() => handleToggle(sunRef, moonRef)}
      >
        <BsSun />
      </button>
      <button
        ref={moonRef}
        className="moon p-2 rounded-full activeBg transition-all duration-300 ease-in"
        onClick={() => handleToggle(moonRef, sunRef)}
      >
        <BsMoonStars />
      </button>
    </div>
  );
};

export default Status;
