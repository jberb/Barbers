import React from "react";
import Bg2 from "../img/bb2.png";

function Testimonials() {
  const textStyle = "text-sm text-white leading-5 py-3 sm:pr-96";
  const headStyle = "text-yellow-400 text-4xl font-crimson py-1";
  const headStyle1 = "text-gray-300 text-lg font-crimson gap-2 py-10";
  return (
    <div
      id="testimonials"
      className="bg-top-right p-5 bg-black sm:px-40 "
      style={{ backgroundImage: `url(${Bg2})` }}
    >
      <h3 className={headStyle1}>100+ HAPPY CLIENTS</h3>
      <h1 className={headStyle}>TESTIMONIALS</h1>
      <p className={textStyle}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat Duis aute irure dolor in reprehenderit in voluptate"
      </p>
      <p className={textStyle}>
        <strong>
          <i>John Doe, CEO Microsoft</i>
        </strong>
      </p>
      <p className={textStyle}>July 27, 2018</p>
      <div className="flex py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#d9a520"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
