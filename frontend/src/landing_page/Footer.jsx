import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-muted pt-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-primary">ZERODHA</h5>
            <p className="small">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mb-3">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>

            {/* App Buttons */}
            <div className="d-flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                width="120"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width="120"
              />
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-dark">Account</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Open demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Minor demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  NRI demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  HUF demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Commodity
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Dematerialisation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  MTF
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-dark">Support</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Status of complaints
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Bulletin
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Circular
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-dark">Company</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Open source
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-dark">Quick links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Upcoming IPOs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Brokerage charges
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Market holidays
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Economic calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Calculators
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Sectors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Gift Nifty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-top pt-3 pb-4 small">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet "Prevent unauthorised transactions in your account. Update
            your mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
      {/* Bottom Links Row */}
<div className="border-top pt-3 pb-2">
  <div className="d-flex flex-wrap justify-content-center gap-3 small">
    <a href="#" className="text-muted text-decoration-none">NSE</a>
    <a href="#" className="text-muted text-decoration-none">BSE</a>
    <a href="#" className="text-muted text-decoration-none">MCX</a>
    <a href="#" className="text-muted text-decoration-none">Terms & conditions</a>
    <a href="#" className="text-muted text-decoration-none">Policies & procedures</a>
    <a href="#" className="text-muted text-decoration-none">Privacy policy</a>
    <a href="#" className="text-muted text-decoration-none">Disclosure</a>
    <a href="#" className="text-muted text-decoration-none">For investor's attention</a>
    <a href="#" className="text-muted text-decoration-none">Investor charter</a>
  </div>
</div>
    </footer>
  );
}

export default Footer;
