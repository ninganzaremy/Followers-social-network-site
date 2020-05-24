import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component {
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
      <section id="messenger">
        <div className="messenger-header">
          <div className="messenger-icon">
            <i className="fas fa-comments" />
          </div>
          <div className="title">Messenger</div>
          <div className="options-icon">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="far fa-comment-smile" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user ">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">Remy N</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/women/56.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="username">James Doe</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input type="text" name defaultValue placeholder="Search" />
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
