import "./App.css";
import tradeLogo from "./assets/trade-logo.png";
import axios from "axios";



function App() {  
  const [trades, setTrades] = useState([]); 

  return (
    <div className="theme-dark">
      {/* Header  */}
      <div className="App">
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

            <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
              <div className="btn-group">
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

              <div className="btn-group">
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

              <div className="btn-group">
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
                </div>
                <a className="color-white" href="/connect/telegram">
                  <div className="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white">
                    <div className="d-inline-block">
                      <img
                        src="data:image/png"
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
              <div className="average-header-subHeading">5 Mins</div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">1.78 %</div>
              <div className="average-header-subHeading">1 Hour</div>
            </div>
            <div style={{ maxWidth: "40%" }}>
              <div className="text-center font-32 average-block">
                <div className="average-subText">
                  <span className="subText-heading">Best Price to Trade</span>
                </div>
                <div
                  className="average-heading"
                  style={{ paddingBottom: "10px" }}
                >
                  ₹ 35,97,911
                </div>
                <div className="average-subText">
                  Average BTC/INR net price including commission
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">8.83 %</div>
              <div className="average-header-subHeading">1 Day</div>
            </div>
            <div className="text-center">
              <div className="average-header-maintext color-green">10.45 %</div>
              <div className="average-header-subHeading">7 Days</div>
            </div>
          </div>


          {/* Responsive Data Fetching */}
          <div
            className="fiat-crypto-table table-responsive"
            style={{ margin: "0px auto" }}
          >
            <table className="table table-borderless text-center">
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
              <tbody>{/* Your table rows */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
