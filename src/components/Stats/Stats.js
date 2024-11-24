


import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats"   id="featuress">
      {/* Left section with heading and description */}
      <div className="stats-left">
        <h3 className="stats-heading">
          Helping a local<br />
          <span className="highlight-green">business reinvent itself</span>
        </h3>
        <p className="stats-description">
          We reached here with our hard work and dedication.
        </p>
      </div>

      {/* Right section with stats grid */}
      <div className="stats-grid">
        <div className="stat-item">
          <img src="/images/logo18.png" alt="Logo" className="stat-logo" />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/images/logo19.png" alt="Logo" className="stat-logo" />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/images/logo20.png" alt="Logo" className="stat-logo" />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/images/logo21.png" alt="Logo" className="stat-logo" />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>

 
    </section>
  );
};

export default Stats;
