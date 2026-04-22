import React from "react";

function Education() {
  return (
    <div className="container p-3">
      <div className="row p-5 align-items-center">

        {/* Left Image */}
        <div className="col-6 p-5 text-center">
          <img
            src="media/education.svg"
            alt="Varsity"
            style={{ width: "70%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-3">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&amp;A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;