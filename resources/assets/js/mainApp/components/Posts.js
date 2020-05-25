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
  showLatestPosts = () => {
    if (this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map((item) => {
        let post = item.posts
        let user = item.users
        return (<div className="update-container">
            <div className="author-info">
              <a href="#" className="user-img" style={{backgroundImage:
              `url('${user.profile_img}')`}} />
              <div className="info">
                <a href="/profile">{`${user.first_name} ${user.last_name}`} </a> shared a <a href="#"> {(post.type == 'text') ? 'story' : 'image'}</a>
              </div>
            </div>
            <div className="media">
              <div
                className={`${(post.type == 'text') ? 'story' : 'image'}`}
                style={{
                  background:
                    'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              />
            </div>
            <div className="padding-container">
              <div className="grey-container">
                <div className="update-info">
                  <h3> How to become a developer?</h3>
                  <p>
                  {post.content}
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
                  <textarea name="name" rows={8} cols={80} defaultValue={""} />
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
        );
      });
    }
  };
  render() {
    return (
      <section id="posts">
      {this.showLatestPosts()}
      </section>
    )
  }
}

const app = document.getElementById("app");
