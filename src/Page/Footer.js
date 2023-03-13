import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  const textStyle = "font-poppins hover:text-yellow-500";
  return (
    <div className="bg-black py-10">
      <div className="">
        <h1 className="text-yellow-500 font-bold text-5xl uppercase text-center font-crimson">
          Barbers
        </h1>
        <nav className="text-white font-poppins  hidden sm:flex justify-center   ">
          <ul className="flex gap-20">
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
      <div className="flex justify-center p-3 gap-5">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7 13"
          width="7"
          height="13"
        >
          <defs>
            <image
              width="7"
              height="13"
              id="img1"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAMAAABSF4SHAAAAAXNSR0IB2cksfwAAAGZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgdCtPDAAAACJ0Uk5TAE/Q8faUD/+5M7hLLRlaZ7zWrqNMmb1/LAxjMnw2hi/ydlOv21MAAABHSURBVHicbck1AoAwAMXQoB8v7lLuf0nanSxvCBCEUZxAKlcGuVSUFdRSA5hW6npD6LcGxkmalxU2aXefQzr/vKTb+1j7wgea5wOH3hSuAAAAAABJRU5ErkJggg=="
            />
          </defs>
          <style></style>
          <use href="#img1" x="0" y="0" />
        </svg>
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 10"
          width="13"
          height="10"
        >
          <defs>
            <image
              width="13"
              height="10"
              id="img2"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAMAAABYMCT2AAAAAXNSR0IB2cksfwAAAIdQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUggdwpkAAAAC10Uk5TAAIVnjgXlS7K/80nA8uXJO5mz8aBJRr+hIePH7f8ThExUR6c6lRTodbjtG8OUOgZTAAAAGFJREFUeJwtiu0aQmAQRLe8YooKEer1HaL7vz67m/mxe84zQ3QgydEx+t2Tx9fH+SIWhLjSDcBdywiIEzY8UrbsiT25lMUu5Uu3bxXLZKq6+VvL1vVWefjojMZp/i7rT3ADFx4FhEky2DwAAAAASUVORK5CYII="
            />
          </defs>
          <style></style>
          <use href="#img2" x="0" y="0" />
        </svg>
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 13"
          width="13"
          height="13"
        >
          <defs>
            <image
              width="13"
              height="13"
              id="img3"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAAXNSR0IB2cksfwAAAJZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgvnIzMwAAADJ0Uk5TSq5pAP8kvNwRBn6OjUmqpi950sdl7GDL6Gv3ZIdX1PVEuvRsTsDybela3ZC2pLU3iKyYJqq0AAAAbUlEQVR4nE3MWQ6CUBQE0atdiOCsqCgqDjg/p/1vjgQCWH8n6bRZq606A7xGHfxuIwX6W4a9vgbD0XgynUWyOSikbGFLYq1gnWzAr7SVdqSV9tKBY6ETZNKZS6FrrVv5eZceYE/3UubeH+nrfjnoOwgRaxO+NwAAAABJRU5ErkJggg=="
            />
          </defs>
          <style></style>
          <use href="#img3" x="0" y="0" />
        </svg>
      </div>
      <h3 className="text-white text-center font-crimson font-semibold">
        {" "}
        BARBERS © 2018. All rights Reserved.
      </h3>
    </div>
  );
}

export default Footer;
