import React from "react";
import "./BlogSection.css";

const Card = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header-container">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nextcent blog is the best place to read about the latest membership insights,
          <br /> trends and more. See who's joining the community, read about how our community
          <br /> are increasing their membership income and lots more.​
        </p>
      </div>

      {/* Cards Section */}
      <div className="cards-wrapper">
        {/* First Card */}
        <div className="card-container">
          <div className="image-wrapper">
            <img
              src="/images/logo30.png"
              alt="Person working on a laptop"
              className="card-image"
            />
          </div>
          <div className="card-overlay">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="read-more">
              Read more →
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="card-container">
          <div className="image-wrapper">
            <img
              src="/images/logo31.png"
              alt="Person working on a laptop"
              className="card-image"
            />
          </div>
          <div className="card-overlay">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="read-more">
              Read more →
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="card-container">
          <div className="image-wrapper">
            <img
              src="/images/logo32.png"
              alt="Person working on a laptop"
              className="card-image"
            />
          </div>
          <div className="card-overlay">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="read-more">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
