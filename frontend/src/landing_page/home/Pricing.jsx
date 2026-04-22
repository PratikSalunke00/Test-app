import React from "react";

function Pricing() {
  return (
    <div className="container p-3">
      <div className="row p-5 align-items-center">

        {/* Left Content */}
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Right Pricing */}
        <div className="col-6  p-5">
          <div className="row text-center">

            <div className="col-4">
              <h1 style={{ color: "#f5a623" }}>₹0</h1>
              <p className="text-muted">
                Free account <br /> opening
              </p>
            </div>

            <div className="col-4">
              <h1 style={{ color: "#f5a623" }}>₹0</h1>
              <p className="text-muted">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            <div className="col-4">
              <h1 style={{ color: "#f5a623" }}>₹20</h1>
              <p className="text-muted">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;