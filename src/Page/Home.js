import React from "react";
import B1 from "../img/b.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  const buttonStyle =
    "uppercase bg-transparent hover:bg-yellow-500 text-white font-bold border-2 border-white py-2 px-4 rounded-full w-40 h-25 font-poppins";
  const textStyle = "font-poppins hover:text-yellow-500";
  return (
    <div
      id="home"
      className="bg-top "
      style={{ backgroundImage: `url(${B1})` }}
    >
      <div className="pt-5 pb-40">
        <div className="flex justify-between gap-4 px-6 font-poppins sm:px-36">
          <div className="inline-flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 0 24 24"
              width="12px"
              fill="#d9a520"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a className="text-white text-xs" href="mailto:youremail@gmail.com">
              youremail@gmail.com
            </a>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 0 24 24"
              width="12px"
              fill="#d9a520"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
            </svg>
            <a className="text-white text-xs" href="tel:+046123467">
              {" "}
              (046) 123 - 4567
            </a>
          </div>
        </div>

        <div className="bg-white bg-opacity-5 py-1 px-2 sm:px-3 ">
          <nav className=" flex justify-between py-6 px-4 sm:px-32">
            <p className="text-yellow-400 text-4xl font-bold font-poppins">
              Barbers
            </p>
            <svg
              className="sm:hidden   "
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <ul className="text-white  justify-between hidden  font-crimson sm:flex gap-5 px-1">
              <li>
                <AnchorLink href="#home" className={textStyle}>
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about" className={textStyle}>
                  About Us
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#service" className={textStyle}>
                  Services
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#testimonials" className={textStyle}>
                  Testimonials
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#team" className={textStyle}>
                  Our Team
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact" className={textStyle}>
                  Contact Us
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-40 pb-20 px-9 sm:px-32 ">
          <h1 className="text-white text-4xl  font-poppins  pt-5 pb-5 sm:pt-12">
            Quality Barber Shop
          </h1>
          <div className="text-white pb-3 font-crimson text-sm sm:px-1 ">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              minus atque iure ipsa eligendinemo excepturi <br></br> aperiam
              possimus cupiditate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 py-5">
            <div className="pb-5">
              <button type="button " className={buttonStyle}>
                Learn More
              </button>
            </div>
            <div>
              <button type="button" className={buttonStyle}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
