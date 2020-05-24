import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Posts extends Component {
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
      <section id="posts">
        {/*single update */}
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"></a>
            <div className="info">
              <a href="#">James Doe </a> shared a <a href="#"> story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3> How to become a developer?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Mike and 40 others liked Update
                </div>
                <div className="comment-stats">5 Comments</div>
              </div>
              <div className="compose-comment">
                <i className="fas fa-comment" />
                <textarea
                  name="name"
                  rows={8}
                  cols={80}
                  defaultValue={""}
                />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"></a>
            <div className="info">
              <a href="#">James Doe </a> shared a <a href="#"> story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3> How to become a developer?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Mike and 40 others liked Update
                </div>
                <div className="comment-stats">5 Comments</div>
              </div>
              <div className="compose-comment">
                <i className="fas fa-comment" />
                <textarea
                  name="name"
                  rows={8}
                  cols={80}
                  defaultValue={""}
                />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"></a>
            <div className="info">
              <a href="#">James Doe </a> shared a <a href="#"> story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3> How to become a developer?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Mike and 40 others liked Update
                </div>
                <div className="comment-stats">5 Comments</div>
              </div>
              <div className="compose-comment">
                <i className="fas fa-comment" />
                <textarea
                  name="name"
                  rows={8}
                  cols={80}
                  defaultValue={""}
                />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
