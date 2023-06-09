import React from "react";
import Email from "./Email";
import Sched from "./Sched";
import M1 from "../img/map.jpg";

function Contact() {
  const T1 = "text-center font-poppins text-grey-100 uppercase py-3";
  const T2 = "text-center font-poppins text-yellow-500 uppercase font-semibold";
  return (
    <div id="contact" className="py-10 ">
      <h3 class={T1}>CONTACT US</h3>
      <h1 class={T2}>MAKE AN APPOINTMENT NOW</h1>

      <div className="sm:flex sm:flex-row ">
        <div className="py-10 px-8 sm:w-1/2 ">
          <p className="font-crimson  ">
            lorem ipsum dolor sit amet consectetuer adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            alisquip ex ea commando consequat.
          </p>
          <Sched />
        </div>

        <Email />
      </div>
      <div
        className="p-40 sm:p-96"
        style={{ backgroundImage: `url(${M1})` }}
      ></div>
    </div>
  );
}

export default Contact;
