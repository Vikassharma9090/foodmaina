import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="banner">
      <Navbar/>
        <div className="banner_content">
          <div className="container">
            <div className="banner_text">
              <h3>Pizza Devlivery </h3>
              <h1> Maestro Pizza </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam iure laboriosam autem , 
              </p>
              <div className="banner_btn">
                <a href="!#" className="btn btn_smart">DELIVERY NOW </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
