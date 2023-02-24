import React from "react";
import "./Gigs.scss";

const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS > DESIGN</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artist
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Filter</button>
          </div>
          <div className="right">
            <span className="sortby">SortBy</span>
            <span className="sorttype">Best Selling</span>
            <img src="./img/down.png" alt="" />
            <div className="rightMenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
