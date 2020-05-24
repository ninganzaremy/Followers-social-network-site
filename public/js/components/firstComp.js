webpackJsonp([0],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(100);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "app-container home-page" },
        _react2.default.createElement(
          "section",
          { id: "left-menu" },
          _react2.default.createElement(
            "div",
            { className: "account-dropdown" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              _react2.default.createElement("i", { className: "fab fa-typo3" })
            ),
            _react2.default.createElement(
              "div",
              { className: "name" },
              "Remy N"
            ),
            _react2.default.createElement(
              "div",
              { className: "icon" },
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups" },
            _react2.default.createElement(
              "a",
              { href: "/logout", className: "logout" },
              "Logout"
            ),
            _react2.default.createElement(
              "div",
              { className: "group" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "title",
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "link"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    "link"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    "link"
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "content-container" },
          _react2.default.createElement(
            "div",
            { className: "search-header" },
            _react2.default.createElement(
              "div",
              { className: "search-box" },
              _react2.default.createElement("input", { type: "text", name: true, defaultValue: true }),
              _react2.default.createElement(
                "div",
                { className: "icon-section" },
                _react2.default.createElement(
                  "div",
                  { className: "noti" },
                  _react2.default.createElement("i", { className: "fas fa-bell" }),
                  _react2.default.createElement(
                    "div",
                    { className: "noti-number active" },
                    "9+"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "comments" },
                  _react2.default.createElement("i", { className: "fas fa-comment" }),
                  _react2.default.createElement(
                    "div",
                    { className: "noti-number active" },
                    "9"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "user" },
                  _react2.default.createElement("i", { className: "fas fa-user" }),
                  _react2.default.createElement(
                    "div",
                    { className: "noti-number active" },
                    "9+"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "content-area" },
            _react2.default.createElement(
              "section",
              { className: "compose-section" },
              _react2.default.createElement("textarea", { name: "name", rows: 8, cols: 80, defaultValue: "" }),
              _react2.default.createElement("div", { className: "user-img" }),
              _react2.default.createElement(
                "div",
                { className: "buttons" },
                _react2.default.createElement(
                  "div",
                  { className: "button photo-btn" },
                  _react2.default.createElement("i", { className: "fas fa-camera-retro" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "button video-btn" },
                  _react2.default.createElement("i", { className: "fas fa-video" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: " button send-btn" },
                  _react2.default.createElement("i", { className: "fas fa-paper-plane" })
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { id: "updates" },
              _react2.default.createElement(
                "div",
                { className: "update-container" },
                _react2.default.createElement(
                  "div",
                  { className: "author-info" },
                  _react2.default.createElement("a", { href: "#", className: "user-img" }),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "James Doe "
                    ),
                    " shared a ",
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      " story"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "media" },
                  _react2.default.createElement("div", {
                    className: "image",
                    style: {
                      background: 'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "padding-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "grey-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "update-info" },
                      _react2.default.createElement(
                        "h3",
                        null,
                        " How to become a developer?"
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "update-stats" },
                      _react2.default.createElement(
                        "div",
                        { className: "icon-section" },
                        _react2.default.createElement(
                          "div",
                          { className: "like-circle" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "other-users" },
                        "Mike and 40 others liked Update"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "comment-stats" },
                        "5 Comments"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "compose-comment" },
                      _react2.default.createElement("i", { className: "fas fa-comment" }),
                      _react2.default.createElement("textarea", {
                        name: "name",
                        rows: 8,
                        cols: 80,
                        defaultValue: ""
                      }),
                      _react2.default.createElement(
                        "div",
                        { className: "buttons" },
                        _react2.default.createElement(
                          "div",
                          { className: "repost-btn" },
                          _react2.default.createElement("i", { className: "fas fa-redo" })
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "like-btn" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "update-container" },
                _react2.default.createElement(
                  "div",
                  { className: "author-info" },
                  _react2.default.createElement("a", { href: "#", className: "user-img" }),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "James Doe "
                    ),
                    " shared a ",
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      " story"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "media" },
                  _react2.default.createElement("div", {
                    className: "image",
                    style: {
                      background: 'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "padding-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "grey-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "update-info" },
                      _react2.default.createElement(
                        "h3",
                        null,
                        " How to become a developer?"
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "update-stats" },
                      _react2.default.createElement(
                        "div",
                        { className: "icon-section" },
                        _react2.default.createElement(
                          "div",
                          { className: "like-circle" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "other-users" },
                        "Mike and 40 others liked Update"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "comment-stats" },
                        "5 Comments"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "compose-comment" },
                      _react2.default.createElement("i", { className: "fas fa-comment" }),
                      _react2.default.createElement("textarea", {
                        name: "name",
                        rows: 8,
                        cols: 80,
                        defaultValue: ""
                      }),
                      _react2.default.createElement(
                        "div",
                        { className: "buttons" },
                        _react2.default.createElement(
                          "div",
                          { className: "repost-btn" },
                          _react2.default.createElement("i", { className: "fas fa-redo" })
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "like-btn" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "update-container" },
                _react2.default.createElement(
                  "div",
                  { className: "author-info" },
                  _react2.default.createElement("a", { href: "#", className: "user-img" }),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "James Doe "
                    ),
                    " shared a ",
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      " story"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "media" },
                  _react2.default.createElement("div", {
                    className: "image",
                    style: {
                      background: 'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "padding-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "grey-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "update-info" },
                      _react2.default.createElement(
                        "h3",
                        null,
                        " How to become a developer?"
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "update-stats" },
                      _react2.default.createElement(
                        "div",
                        { className: "icon-section" },
                        _react2.default.createElement(
                          "div",
                          { className: "like-circle" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "other-users" },
                        "Mike and 40 others liked Update"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "comment-stats" },
                        "5 Comments"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "compose-comment" },
                      _react2.default.createElement("i", { className: "fas fa-comment" }),
                      _react2.default.createElement("textarea", {
                        name: "name",
                        rows: 8,
                        cols: 80,
                        defaultValue: ""
                      }),
                      _react2.default.createElement(
                        "div",
                        { className: "buttons" },
                        _react2.default.createElement(
                          "div",
                          { className: "repost-btn" },
                          _react2.default.createElement("i", { className: "fas fa-redo" })
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "like-btn" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "messenger" },
          _react2.default.createElement(
            "div",
            { className: "messenger-header" },
            _react2.default.createElement(
              "div",
              { className: "messenger-icon" },
              _react2.default.createElement("i", { className: "fas fa-comments" })
            ),
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Messenger"
            ),
            _react2.default.createElement(
              "div",
              { className: "options-icon" },
              _react2.default.createElement("i", { className: "fas fa-ellipsis-v" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "users" },
            _react2.default.createElement(
              "div",
              { className: "users-container" },
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "far fa-comment-smile" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user " },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "user active" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: 'url("https://randomuser.me/api/portraits/women/56.jpg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "username" },
                  "James Doe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation" },
                  _react2.default.createElement("i", { className: "fas fa-comment-dots" })
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "search" },
            _react2.default.createElement("input", { type: "text", name: true, defaultValue: true, placeholder: "Search" })
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[233]);