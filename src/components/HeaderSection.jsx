import React from "react";
import "./HeaderSection.css";


const HeaderSection = () => {
  return (
    <div className="header-section" id="blogss">
      <div className="logo-section">
        <img src="/images/logo23.png" alt="Tesla Logo" className="tesla-logo" />
      </div>
     <div className="content-section">
        <p>
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        {/* <p>
          Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
          cursus tellus sed augue ultricies, quis tristique nulla sodales.
        </p> */}
        <h3 className="name">Tim Smith</h3>
        <p className="association">British Dragon Boat Racing Association</p>
      
       <div className="icons-section">
        <img src="/images/logo24.png" alt="Icon 1" className="icon" />
        <img src="/images/logo25.png" alt="Icon 1" className="icon" />
        <img src="/images/logo26.png" alt="Icon 1" className="icon" />
        <img src="/images/logo27.png" alt="Icon 1" className="icon" />
        <img src="/images/logo28.png" alt="Icon 1" className="icon" />
        <img src="/images/logo29.png" alt="Icon 1" className="icon" />
       
        <a href="#" className="customer-link">
          Meet all customers →
        </a>
      </div>
      </div>
    </div>
  );
};

    export default HeaderSection;