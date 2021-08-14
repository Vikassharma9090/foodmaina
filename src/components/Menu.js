import React from 'react';
import img from "../img/about.jpg";

const Menu = () => {
    return (
        <>
            <div className="about">
            <div className="container">
          <div className="row">
           
            <div className="col-6">
              <div className="about_img">
                <img src={img} alt="About" />
              </div>
            </div>
            <div className="col-6 p-25">
              <h3> Menu </h3>
              <h1> Welcome To MAESTRO PIZZINI </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                vel numquam rerum. Dolorem voluptates quae asperiores,
                assumenda, eaque eveniet ducimus molestiae et ipsam corporis
                quis minima sint. Ullam, minima non?
              </p>
              <div className="about_btn">
                <a href="!#" className="btn btn_smart">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
            </div>
        </>
    )
}

export default Menu;
