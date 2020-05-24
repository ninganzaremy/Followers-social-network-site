import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ComposeSection extends Component {
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
      <section className="compose-section">
        <textarea name="name" rows={8} cols={80} defaultValue={""} />
        <div className="user-img"></div>
        <div className="buttons">
          <div className="button photo-btn">
            <i className="fas fa-camera-retro" />
          </div>
          <div className="button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className=" button send-btn">
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
