import React, { useState } from "react";

function CreateTicket() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF)",
        "Charts and orders",
        "General",
      ],
    },
    {
      title: "Funds",
      items: ["Add funds", "Withdraw funds", "Fund limits"],
    },
    {
      title: "Console",
      items: ["Reports", "Tax P&L", "Ledger"],
    },
    {
      title: "Coin",
      items: ["Mutual funds", "SIP", "Portfolio"],
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <div className="row">

        {/* LEFT SIDE - ACCORDION */}
        <div className="col-md-8">

          {data.map((section, index) => (
            <div className="mb-3 border rounded" key={index}>

              {/* Header */}
              <div
                className="p-3 d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer", background: "#f8f9fa" }}
                onClick={() => toggle(index)}
              >
                <span>
                  <i className="fa fa-plus-circle me-2"></i>
                  {section.title}
                </span>
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>

              {/* Body */}
              {activeIndex === index && (
                <div className="p-3">
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        <a href="" className="text-decoration-none">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4">

          {/* Featured */}
          <div
            className="p-3 mb-4"
            style={{
              background: "#fff3cd",
              borderLeft: "4px solid orange",
            }}
          >
            <ul>
              <li>
                <a href="">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href="">
                  Rights Entitlements listing in April 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="card p-3">
            <h5>Quick links</h5>
            <ol className="ps-3">
              <li><a href="">Track account opening</a></li>
              <li><a href="">Track segment activation</a></li>
              <li><a href="">Intraday margins</a></li>
              <li><a href="">Kite user manual</a></li>
              <li><a href="">Learn how to create a ticket</a></li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;