import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.types = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
  }
  render() {
    const listItems = this.types.map((item, index) => (
      <li className="nav-item" key={index}>
        <Link className="nav-link" to={`/${item.toLowerCase()}`}>
          {item}
        </Link>
      </li>
    ));

    return (
      <div
        className="navbar navbar-expand-lg bg-body-tertiary" /*data-bs-theme={props.mode}*/
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/general">
                  Home
                </Link>
              </li>
              {listItems}
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} `}> */}
            <div className="form-check form-switch">
              {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"Light"} Mode</label> */}
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
