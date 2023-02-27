import React from "react";
import CardInfo from "./CardInfo";
import { BsCloudRain } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { GiThermometerScale } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Spinner } from "../../icon";
import Location from "../card/Location";

const KeyInfo = () => {
  const data = useSelector((state) => state.weather);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Spinner />
      ) : (
        <div className="p-5">
          <div className="flex justify-between">
            <h3>OverView</h3>
            <div className="flex gap-1">
              <Location name={data.name} down={false} color="text-blue_cf" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <CardInfo Icon={BsCloudRain} result={data.rain?.["1h"]} />
            <CardInfo
              Icon={AiOutlineCloud}
              property={"clouds"}
              result={data.clouds.all}
            />
            <CardInfo
              Icon={GiThermometerScale}
              property={"pressure"}
              result={data.main.pressure}
              unit="hpa"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default KeyInfo;
