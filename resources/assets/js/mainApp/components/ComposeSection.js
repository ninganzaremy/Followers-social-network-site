import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {};
  }
  submitForm = async () => {
    try {
      const post = await axios.post("/api/post", {
        content: this.state.post_content,
        user_id: this.props.initialData.userInfo.id,
        type: "text",
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const name = event.target.name
    const value =
      event.target.type == 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <section className="compose-section">
        <textarea
          name="post_content"
          rows={8}
          cols={80}
          defaultValue={''}
          onChange={this.handleChange}
          value={this.state.post_content}
        />
        <div className="user-img"></div>
        <div className="buttons">
          <div className="button photo-btn">
            <i className="fas fa-camera-retro" />
          </div>
          <div className="button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className=" button send-btn" onClick={this.submitForm}>
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
