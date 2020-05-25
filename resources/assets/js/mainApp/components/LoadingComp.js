import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LoadingComp extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
    };
  }
  clickedDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  };
  render() {
    return (
      <section
        id="loading-comp"
        className={this.props.initialData == "loading" ? "active" : ""}
      >
        <div className="loading-icon">
          <div className="loadingio-spinner-rolling-dfl8agvdqzv">
            <div className="ldio-vih25qal7v">
              <div></div>
            </div>
          </div>
        </div>
        <div className="loading-text">Loading...</div>
      </section>
    );
  }
}

const app = document.getElementById("app");
