import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiHorseHead } from "react-icons/gi";
import { FaHorseHead } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import { RiArrowRightSLine } from "react-icons/ri";
import horseIcon from "./assets/hore.svg";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Slider from "@material-ui/core/Slider";
// import Tooltip from "@material-ui/core/Tooltip";

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };

// const PrettoSlider = withStyles({
//   root: {
//     color: "red",
//     height: 8,
//   },
//   thumb: {
//     height: 24,
//     width: 24,
//     backgroundColor: "#000",
//     border: "2px solid currentColor",
//     marginTop: -8,
//     marginLeft: -12,
//     "&:focus, &:hover, &$active": {
//       boxShadow: "inherit",
//     },
//     "&::before": {
//       content: "lol",
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: "calc(-50% + 4px)",
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//   },
// })(Slider);

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
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className="d-flex align-items-center w-100">
              <h6 className="me-3 mb-0 upperHeadings fw-bold">
                EDGE SETTINGS:
              </h6>
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
                <div className="ms-2">
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
            <div className="d-flex flex-row-reverse align-items-center w-100">
              <div className="sliderContainer mt-1">
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
              <h6 className="upperHeadings fw-bold mb-0 me-2">EDGE FILTER:</h6>
            </div>
          </div>
          {/* UPPER HEADER END */}

          {/* TABLE START */}
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th className="border-0 text-uppercase tableHeading">
                    start time
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-center">
                    meeting name
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-center">
                    edge%:
                  </th>
                  <th className="border-0 text-uppercase tableHeading text-end">
                    stake:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="height70 align-middle">
                    <div className="redTime align-middle">2m 54s</div>
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
                  </td>
                </tr>
                <tr>
                  <td className="height70 align-middle">
                    <div className="backTime">12m</div>
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
                    <div className="backTime">15m</div>
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
                    <div className="backTime">12m</div>
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
