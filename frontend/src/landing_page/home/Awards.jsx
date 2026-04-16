import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/largestBroker.svg"
            alt="Awards img"
            className="mb-5"
          />
        </div>

        <div className="col-6 p-5 mt-3">
          <h1>Largest Broker in India</h1>
          <p className="mb-5">
            We are the largest broker in India with over 10 million clients and
            a strong presence in over 200 cities.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
               <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securuties</p>
                </li>
              </ul>
            </div>
            <img src='media/pressLogos.png' style={{width: "90%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
