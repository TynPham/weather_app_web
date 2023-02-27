import React from "react";
import Search from "../search/Search";
import { IoNotificationsOutline } from "react-icons/io5";
import BgCard from "../card/BgCard";
import CardLarge from "../card/CardLarge";
import CardSmall from "../card/CardSmall";
import { useSelector } from "react-redux";
import CurrentTime from "../curentTime/CurrentTime";

const Info = () => {
  const dataWeather = useSelector((state) => state.weather);

  return (
    <section className="lg:py-2 lg:px-8 lg:order-2 md:order-1 md:py-6 md:px-16 order-1 bg-info py-6 px-8 transition">
      <div className="flex items-center justify-between">
        <Search />
        <div className="flex items-center">
          <IoNotificationsOutline className="text-white text-2xl mr-4 cursor-pointer transition" />
          <img
            src="src/assets/image/Tyn.jpg"
            alt="avatar"
            className="w-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:hidden mt-4">
        <CurrentTime />
      </div>
      <div className="mt-4">
        <BgCard bg="bg-sky">
          <CardLarge data={dataWeather} />
        </BgCard>
      </div>
      <div className="lg:gap-3 lg:grid-cols-1fr md:grid-cols-2fr grid grid-cols-1fr gap-4 mt-6">
        <div>
          <BgCard bg="bg-orange">
            <CardSmall name={"Tokyo"} />
          </BgCard>
        </div>
        <div>
          <BgCard bg="bg-pink">
            <CardSmall name={"America"} />
          </BgCard>
        </div>
      </div>
    </section>
  );
};

export default Info;
