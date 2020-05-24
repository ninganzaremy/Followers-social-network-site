import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }
  clickedDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  };
  render() {
    return (

        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name" onClick={this.clickedDropdown}>Remy N</div>
            <div className="icon" onClick={this.clickedDropdown}>
              <i className="fas fa-chevron-down" />
            </div>
            <div className={`dropdown ${this.state.dropdown ? 'active' : ''}`}>
             <nav>
               <a href="/account">Account</a>
               <a href="/logout">Logout</a>
             </nav>
            </div>
          </div>
          <div className="groups">
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
