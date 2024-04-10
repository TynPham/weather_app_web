import React from "react";

const BgCard = ({ bg = "bg-primary", children }) => {
  return <section className={`${bg} relative h-full w-full transition rounded-2xl`}>{children}</section>;
};

export default BgCard;
