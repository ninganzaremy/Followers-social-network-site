import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
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
      <div className="app-container home-page">
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name">Remy N</div>
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
        <section id="content-container">
          <div className="search-header">
            <div className="search-box">
              <input type="text" name defaultValue />
              <div className="icon-section">
                <div className="noti">
                  <i className="fas fa-bell" />
                  <div className="noti-number active">9+</div>
                </div>
                <div className="comments">
                  <i className="fas fa-comment" />
                  <div className="noti-number active">9</div>
                </div>
                <div className="user">
                  <i className="fas fa-user" />
                  <div className="noti-number active">9+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-area">
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
            <section id="updates">
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
          </div>
        </section>
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
            </div>
          </div>
          <div className="search">
            <input type="text" name defaultValue placeholder="Search" />
          </div>
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
