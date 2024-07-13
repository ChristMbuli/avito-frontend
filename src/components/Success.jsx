import React from "react";
import FINANCE from "../images/finance.jpeg";

const Success = () => {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mt-5 text-center font-bold text-gray-800 mb-8">
        Obtention d’un financement !
      </h1>
      <img src={FINANCE} alt="Success Image" className="w-1/2 h-auto" />
    </div>
  );
};

export default Success;
