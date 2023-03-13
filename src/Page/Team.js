import React from "react";
import T1 from "../img/b2.png";
import T2 from "../img/b3.png";
import T3 from "../img/b4.png";

function Team() {
  const textStyle = "font-bold text-2xl font-crimson uppercase";
  const textStyle1 = "font-thin font-poppins uppercase text-2xl";
  const borderStyle =
    "bg-white border-2 rounded text-center flex flex-col item-center hover:shadow-2xl ";
  return (
    <div id="team" className="bg-white-500 flex flex-col items-center  py-5  ">
      <h2 class="font-thin text-2xl font-poppins py-1">Professional</h2>
      <h1 class="font-poppins text-4xl py-1 text-yellow-500 font-bold">
        Our Team
      </h1>
      <div className="flex flex-col gap-10 sm:flex-row py-5 ">
        <div className={borderStyle}>
          <img className="h-96 " src={T1}></img>
          <h3 class={textStyle}>Paul Narch</h3>
          <p class={textStyle1}>Barber</p>
        </div>
        <div className={borderStyle}>
          <img className="h-96" src={T2}></img>
          <h3 class={textStyle}>Steven Joseph</h3>
          <p class={textStyle1}>Barber</p>
        </div>
        <div className={borderStyle}>
          <img className="h-96" src={T3}></img>
          <h3 class={textStyle}>Alexander Darvid</h3>
          <p class={textStyle1}>Shaver</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
