import React from "react";

const Field = ({ name, setName, type, placeholder }) => {
  return (
    <div className="relative h-12 w-full mt-5 rounded-md">
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        className="w-full h-full text-base font-normal py-0 px-4 border border-input outline-none rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Field;
