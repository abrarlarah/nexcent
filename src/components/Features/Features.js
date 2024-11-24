import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h1>Manage your entire community <br /> in a single system</h1>
      <p>Who is Nextcent suitable for ?</p>
      <div className="features-list">
        <div className="feature">
          <img src="/images/logo14.png" alt="" />
          <h2>Membership <br /> Organizations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>
        <div className="feature">
          <img src="/images/logo15.png" alt="" />
          <h2>National <br /> Associations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>
        <div className="feature">
          <img src="/images/logo16.png" alt="" />
          <h2>Clubs And <br /> Groups</h2>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>
      </div>
      <div className="info-section">
        <img src="/images/logo17.png" alt="" className="info-image" />
        <div className="info-text">
          <h2>The unseen of spending three  <br/>years at Pixelgrade</h2>
          <p>Nextcent is the ultimate solution for community management, offering seamless integration, advanced features, and a user-friendly interface.Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
