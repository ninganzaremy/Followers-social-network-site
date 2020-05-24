import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "Remy",
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (

        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name">Test</div>
            <div className="icon">
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="groups">
            <a href="/logout" className="logout">
              Logout
            </a>
            <div className="group">
              <div className="title">
                title
                <ul>
                  <li>link</li>
                  <li>link</li>
                  <li>link</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

    );
  }
}

const app = document.getElementById("app");
