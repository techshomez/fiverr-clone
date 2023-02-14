import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect freelance services for your business in one place
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Featured;
