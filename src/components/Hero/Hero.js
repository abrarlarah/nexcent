

import React, { useState } from "react";
import "./Hero.css";

const Carousel = () => {
  const [activePage, setActivePage] = useState(0);

  const handleDotClick = (index) => {
    setActivePage(index);
  };

  const pages = [
    {
      content: (
        <>
          <h1>Lessons and insights <br /><span className="green-text">from 8 years</span></h1>
          <p className="left-aligned-text">Where to grow your business as a photographer: site or social media?</p>
          <button className="hero-button">Register</button>
        </>
      ),
      image: "/logo193.png",
    },
    {
      content: <h1>Learn And Progress   <span className="green-text">More</span></h1>,
      image: "/images/logo3.png",
    },
    {
      content: <h1>Achieve and Work <span className="green-text">More</span> </h1>,
      image: "/images/logo4.png",
    },
  ];

  return (
    <section className="hero"id="Home" >
      <div className="hero-content">
        <div className="hero-text">
          {pages[activePage].content}
        </div>

        {pages[activePage].image && (
          <div className="hero-image">
            <img src={pages[activePage].image} alt="Hero" />
          </div>
        )}
      </div>

      <div className="carousel-dots">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${activePage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;

