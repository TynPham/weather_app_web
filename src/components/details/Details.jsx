import React from "react";
import CurrentTime from "../curentTime/CurrentTime";
import WeekDays from "../weekdays/WeekDays";
import CardLarge from "../card/CardLarge";
import BgCard from "../card/BgCard";
import SunStatus from "../sunStatus/SunStatus";
import { useSelector } from "react-redux";
import ChartWeather from "../chart/ChartWeather";
import TimeOfDay from "../curentTime/TimeOfDay";
import KeyInfo from "../keyInfo/KeyInfo";

const Details = () => {
  const dataWeather = useSelector((state) => state.weather);

  return (
    <section className="lg:order-1 lg:px-12 md:order-2 md:px-12 order-2 px-8 bg-details text-white transition">
      <div className="lg:block md:hidden hidden">
        <CurrentTime />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <TimeOfDay />
      </div>
      <WeekDays />
      <div className="lg:grid-cols-6_4 md:grid-cols-6_4 grid grid-cols-1fr gap-4 mt-3">
        <div className="flex flex-col gap-4">
          <BgCard>
            <SunStatus />
          </BgCard>
          <div className="flex-1">
            <BgCard>
              <ChartWeather />
            </BgCard>
          </div>
        </div>
        <BgCard bg="bg-primary">
          <KeyInfo />
        </BgCard>
      </div>
    </section>
  );
};

export default Details;