import "./App.css";
import { useState, useEffect } from "react";
import tradeLogo from "./assets/trade-logo.png";
import telegramLogo from "./assets/telegram-logo.png";
import axios from "axios";
import logo_1 from "./assets/logo-1.png";
import logo_2 from "./assets/log-2.png";
import logo_3 from "./assets/logo-3.png";

function App() {
  const [trades, setTrades] = useState([]);

  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch data from the /trades endpoint
    axios.get("http://localhost:5000/trades").then((response) => {
      setTrades(response.data);
    });
  }, []);

  return (
    <div className="theme-dark">
      {/* Header  */}
      <div className="">
        <div style={{ padding: "20px 30px 0px" }}>
          <div className="align-items-center justify-content-sm-center row">
            <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
              <a href="/">
                <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                  <img
                    src={tradeLogo}
                    className="fiat-logo"
                    style={{ padding: "10px" }}
                    alt="Logo"
                  />
                </div>
              </a>
            </div>

            <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4 ">
              <div className="btn-group px-2">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="header-button dropdown-toggle btn btn-secondary"
                >
                  INR
                </button>
                <div
                  tabIndex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu"
                >
                  <a
                    value="INR"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                    href="/BTC-INR"
                  >
                    INR
                  </a>
                </div>
              </div>

              <div className="btn-group px-2">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="header-button dropdown-toggle btn btn-secondary"
                >
                  BTC
                </button>
                <div
                  tabIndex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu"
                >
                  <a
                    value="BTC"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                    href="/BTC-INR"
                  >
                    BTC
                  </a>
                  {/* Additional dropdown items */}
                </div>
              </div>

              <div className="btn-group px-2">
                <a
                  target="_blank"
                  href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="header-button btn btn-secondary"
                >
                  BUY BTC
                </a>
              </div>
            </div>

            <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
              <div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                <div className="progress-bar-wrapper">
                  {/* Your circular progress bar SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="100"
                    height="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="50" cy="50" r="48" stroke="#f8f9fa" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="40"
                      fill="#f8f9fa"
                    >
                      {countdown}
                    </text>
                  </svg>
                </div>
                <a
                  className="color-white text-decoration-none"
                  href="/connect/telegram"
                >
                  <div
                    className="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white "
                    style={{ backgroundColor: "skyblue" }}
                  >
                    <div className="d-inline-block">
                      <img
                        src={telegramLogo}
                        className="telegram-logo"
                        alt="Telegram Logo"
                      />
                    </div>
                    <div className="text-nowrap d-inline-block color-white">
                      Connect Telegram
                    </div>
                  </div>
                </a>
                <div className="margin-10 d-inline-block">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="padding-bottom-50">
        <div className="Container-fluid" style={{ padding: "0px 30px" }}>
          <div
            className="d-flex justify-content-around align-items-center average-header"
            style={{ padding: "10px 0px" }}
          >
            <div className="text-center">
              <div className="average-header-maintext color-green">0.9 %</div>
              <div className="average-header-subHeading" style={{ color: "grey" }}>5 Mins</div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">1.78 %</div>
              <div className="average-header-subHeading" style={{ color: "grey" }}>1 Hour</div>
            </div>
            <div style={{ maxWidth: "40%" }}>
              <div className="text-center font-32 average-block">
                <div className="average-subText">
                  <span
                    className="subText-heading"
                    style={{ fontSize: "25px", color: "grey" }}
                  >
                    Best Price to Trade
                  </span>
                </div>
                <div
                  className="average-heading"
                  style={{ paddingBottom: "10px" }}
                >
                  ₹ 35,97,911
                </div>
                <div className="average-subText" style={{ color: "grey" }}>
                  Average BTC/INR net price including commission
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">8.83 %</div>
              <div className="average-header-subHeading" style={{ color: "grey" }}>1 Day</div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">10.45 %</div>
              <div className="average-header-subHeading" style={{ color: "grey" }}>7 Days</div>
            </div>
          </div>

          {/* Responsive Data Fetching */}
          <div
            className="fiat-crypto-table table-responsive"
            style={{ margin: "0px auto" }}
          >
            <table className="table-borderless text-center">
              <thead>
                <tr>
                  <th>
                    <h4>
                      <span className="pointer">#</span>
                    </h4>
                  </th>
                  <th>
                    <h4>
                      <span className="pointer">Platform</span>
                    </h4>
                  </th>
                  <th>
                    <h4>
                      <span className="pointer">Last Traded Price</span>
                    </h4>
                  </th>
                  <th>
                    <h4>
                      <span className="pointer">Buy / Sell Price</span>
                    </h4>
                  </th>
                  <th>
                    <h4>
                      <span className="pointer">Volume</span>
                    </h4>
                  </th>
                  <th>
                    <h4>
                      <span className="pointer">Unit</span>
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, index) => (
                  <tr key={index}>
                    <td className="">{index + 1}</td>
                    <td>
                      {/* <a href={} target="_blank"> */}
                      <img
                        className="exchange-logo"
                        src={logo_1}
                        alt="Exchange Logo"
                      />
                      <span className="exchange-name">{trade.name}</span>
                      {/* </a> */}
                    </td>
                    <td>₹ {trade.last}</td>
                    <td>
                      <span>
                        ₹ {trade.buy} / ₹ {trade.sell}
                      </span>
                    </td>
                    <td>{trade.volume}</td>
                    <td>{trade.base_unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="footer">
      <div class="d-flex align-items-center text-center">
          <div class="footer-text">Copyright © 2019</div>
          <div class="footer-text">HodlInfo.com</div>
          <div class="footer-text pointer">
            <a href="mailto:support@hodlinfo.com" class="footer-text-link">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
