import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiHorseHead } from "react-icons/gi";
import { FaHorseHead } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FcLock } from "react-icons/fc";
import { RiArrowRightSLine } from "react-icons/ri";
import horseIcon from "./assets/hore.svg";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      horizontal: 10,
    };
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value,
    });
  };

  render() {
    const { horizontal } = this.state;
    const horizontalLabels = {
      0: "Low",
      50: "Medium",
      100: "High",
    };

    const formatPercent = (value) => value + "%";

    return (
      <div className="page_container mt-5">
        <div className="container-fluid">
          {/* UPPER HEADER START */}
          <div className="d-flex flex-column flex-xl-row justify-content-xl-between align-items-xl-center py-2">
            <div className="d-flex flex-column flex-md-row align-items-md-center w-100">
              <h6 className="me-3 mb-0 upperHeadings fw-bold">
                EDGE SETTINGS:
              </h6>
              <div className="d-flex flex-column flex-sm-row mt-3 mt-md-0">
                <div className="d-flex">
                  <div>
                    <label className="d-flex align-items-center container-checkbox">
                      <GiHorseHead fontSize="1.4rem" />
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="ms-2">
                    <label className="d-flex align-items-center container-checkbox">
                      <FaHorseHead fontSize="1.4rem" />
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="ms-2">
                    <label className="d-flex align-items-center container-checkbox">
                      <img className="horseIcon" src={horseIcon} alt="" />
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="d-flex mt-3 mt-sm-0">
                  <div className="ms-0 ms-sm-2">
                    <label className="d-flex align-items-center container-checkbox fontChange">
                      Aus/NZ
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="ms-2">
                    <label className="d-flex align-items-center container-checkbox fontChange">
                      Int'l
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column-reverse flex-md-row-reverse justify-content-end justify-content-xl-start align-items-start align-items-md-center w-100">
              <div className="sliderContainer mt-0 mt-md-1">
                <Slider
                  min={0}
                  max={100}
                  value={horizontal}
                  labels={horizontalLabels}
                  format={formatPercent}
                  handleLabel={horizontal}
                  onChange={this.handleChangeHorizontal}
                />
              </div>
              <h6 className="upperHeadings fw-bold mb-0 me-3 me-xl-1 mt-4 mt-md-0">
                EDGE FILTER:
              </h6>
            </div>
          </div>
          {/* UPPER HEADER END */}

          {/* TABLE START */}
          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th className="border-0 text-uppercase tableHeading">
                    <div className="d-flex align-items-center">
                      start time
                      <div className="upDownIcon d-flex flex-column ms-1">
                        <TiArrowSortedUp className="icon" />
                        <TiArrowSortedDown className="icon" color="#ccc" />
                      </div>
                    </div>
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      meeting name
                      <div className="upDownIcon d-flex flex-column ms-1">
                        <TiArrowSortedUp className="icon" />
                        <TiArrowSortedDown className="icon" color="#ccc" />
                      </div>
                    </div>
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      edge%:
                      <div className="upDownIcon d-flex flex-column ms-1">
                        <TiArrowSortedUp className="icon" />
                        <TiArrowSortedDown className="icon" color="#ccc" />
                      </div>
                    </div>
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-end">
                    <div className="d-flex justify-content-end align-items-center">
                      stake:
                      <div className="upDownIcon d-flex flex-column ms-1">
                        <TiArrowSortedUp className="icon" />
                        <TiArrowSortedDown className="icon" color="#ccc" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="height70 align-middle">
                    <div className="redTime align-middle ms-3">2m 54s</div>
                  </td>
                  <td className="height70 align-middle meetingTime text-center position-relative">
                    <div>
                      <strong className="normalSpacing">Hawksberry</strong>
                      <div>
                        <small className="normalSpacing boldText boldText">
                          <span className="text-uppercase">race 5#</span>
                          athitri
                        </small>
                      </div>
                      <div>
                        <small className="fw-bold text-uppercase">
                          ap: $2.00
                        </small>
                      </div>
                    </div>
                    <div className="tableIcon position-absolute">
                      <GiHorseHead fontSize="2rem" color="#000" />
                    </div>
                  </td>
                  <td className="height70 align-middle text-center textOrange">
                    +10.5%
                  </td>
                  <td className="height70 align-middle text-end position-relative">
                    <div className="orangeBg px-2 py-1 d-flex flex-row-reverse align-items-center">
                      <div className="arrowCont">
                        <RiArrowRightSLine color="#fff" />
                      </div>
                      <div>
                        <h6 className="text-uppercase mb-0 text-start">
                          bet now
                        </h6>
                        <p className="normalSpacing meetingTime mb-0 text-start">
                          1.5U @ 2.50
                        </p>
                      </div>
                    </div>
                    <div className="tableLogoCont position-absolute">
                      <img
                        src="https://www.sportsbetting.com.au/assets/images/logonew.jpg"
                        alt="logo"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="height70 align-middle">
                    <div className="backTime ms-3">12m</div>
                  </td>
                  <td className="height70 align-middle meetingTime text-center position-relative">
                    <div>
                      <strong className="normalSpacing">Hawksberry</strong>
                      <div>
                        <small className="normalSpacing boldText boldText">
                          <span className="text-uppercase">race 5#</span>
                          athitri
                        </small>
                      </div>
                      <div>
                        <small className="fw-bold text-uppercase">
                          ap: $2.00
                        </small>
                      </div>
                    </div>
                    <div className="tableIcon position-absolute">
                      <FaHorseHead fontSize="2rem" color="#000" />
                    </div>
                  </td>
                  <td className="height70 align-middle text-center textGreen">
                    +5.5%
                  </td>
                  <td className="height70 align-middle text-end">
                    <div className="greenBg px-2 py-1 flex-row-reverse d-flex align-items-center">
                      <div className="arrowCont">
                        <RiArrowRightSLine color="#fff" />
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <FcLock fontSize="1.8rem" />
                        </div>
                        <div>
                          <h6 className="text-uppercase mb-0 text-start">
                            bet now
                          </h6>
                          <p className="normalSpacing meetingTime mb-0 text-start">
                            1.5U @ 2.50
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="height70 align-middle">
                    <div className="backTime ms-3">15m</div>
                  </td>
                  <td className="height70 align-middle meetingTime text-center position-relative">
                    <div>
                      <strong className="normalSpacing">Hawksberry</strong>
                      <div>
                        <small className="normalSpacing boldText boldText">
                          <span className="text-uppercase">race 5#</span>
                          athitri
                        </small>
                      </div>
                      <div>
                        <small className="fw-bold text-uppercase">
                          ap: $2.00
                        </small>
                      </div>
                    </div>
                    <div className="tableIcon position-absolute">
                      <img className="horseIcon2" src={horseIcon} alt="" />
                    </div>
                  </td>
                  <td className="height70 align-middle text-center textBlue">
                    +10.5%
                  </td>
                  <td className="height70 align-middle text-end">
                    <div className="blueBg px-2 py-1 flex-row-reverse d-flex align-items-center">
                      <div className="arrowCont">
                        <RiArrowRightSLine color="#fff" />
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <FcLock fontSize="1.8rem" />
                        </div>
                        <div>
                          <h6 className="text-uppercase mb-0 text-start">
                            bet now
                          </h6>
                          <p className="normalSpacing meetingTime mb-0 text-start">
                            1.5U @ 2.50
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="height70 align-middle height70 align-middle">
                    <div className="backTime ms-3">12m</div>
                  </td>
                  <td className="height70 align-middle meetingTime text-center position-relative">
                    <div>
                      <strong className="normalSpacing">Hawksberry</strong>
                      <div>
                        <small className="normalSpacing boldText boldText">
                          <span className="text-uppercase">race 5#</span>
                          athitri
                        </small>
                      </div>
                      <div>
                        <small className="fw-bold text-uppercase">
                          ap: $2.00
                        </small>
                      </div>
                    </div>
                    <div className="tableIcon position-absolute">
                      <GiHorseHead fontSize="2rem" color="#000" />
                    </div>
                  </td>
                  <td className="height70 align-middle text-center textOrange">
                    +10.5%
                  </td>
                  <td className="height70 align-middle text-end">
                    <div className="orangeBg py-1 px-2 flex-row-reverse d-flex align-items-center">
                      <div className="arrowCont">
                        <RiArrowRightSLine color="#fff" />
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <FcLock fontSize="1.8rem" />
                        </div>
                        <div>
                          <h6 className="text-uppercase mb-0 text-start">
                            bet now
                          </h6>
                          <p className="normalSpacing meetingTime mb-0 text-start">
                            1.5U @ 2.50
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* TABLE END */}
        </div>
      </div>
    );
  }
}

export default App;
