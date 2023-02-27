import React from "react";
import Details from "../components/details/Details";
import Info from "../components/infomation/Info";

const Home = () => {
  return (
    <div className="lg:grid-cols-7_3 md:grid-cols-1fr grid-cols-1fr grid">
      <Details />
      <Info />
    </div>
  );
};

export default Home;
