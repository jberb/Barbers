import React from "react";
import B3 from "../img/bb1.png";

function Discount() {
  return (
    <div
      className="px-10 py-12  bg-black text-center"
      style={{ backgroundImage: `url(${B3})` }}
    >
      <h1 className="text-yellow-500 font-bold text-2xl font-poppins py-4">
        GET FLAT 25% DISCOUNT!
      </h1>
      <p className="text-white font-thin font-crimson py-5">
        Get Flat 25% Discount on every sunday of December. Use the promo code
        below.
      </p>
      <h2 className="text-white font-poppins font-bold text-4xl py-5">
        #BARBEARDS
      </h2>

      <button
        type="button"
        className="uppercase bg-transparent hover:bg-yellow-500 text-white font-thin border-2 border-white  rounded-full w-60 h-10 font-poppins"
      >
        Make an appointment now
      </button>
    </div>
  );
}

export default Discount;
