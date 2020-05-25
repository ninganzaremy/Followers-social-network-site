webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComposeSection = function (_Component) {
  _inherits(ComposeSection, _Component);

  function ComposeSection() {
    var _this2 = this;

    _classCallCheck(this, ComposeSection);

    var _this = _possibleConstructorReturn(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.submitForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var post;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post("/api/post", {
                content: _this.state.post_content,
                user_id: _this.props.initialData.userInfo.id,
                type: "text"
              });

            case 3:
              post = _context.sent;

              console.log(post);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(ComposeSection, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "compose-section" },
        _react2.default.createElement("textarea", {
          name: "post_content",
          rows: 8,
          cols: 80,
          defaultValue: '',
          onChange: this.handleChange,
          value: this.state.post_content
        }),
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
            { className: " button send-btn", onClick: this.submitForm },
            _react2.default.createElement("i", { className: "fas fa-paper-plane" })
          )
        )
      );
    }
  }]);

  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;


var app = document.getElementById("app");

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.showLatestPosts = function () {
      if (_this.props.initialData.latestPosts != undefined) {
        return _this.props.initialData.latestPosts.map(function (item, index) {
          var post = item.posts;
          var user = item.users;
          return _react2.default.createElement(
            "div",
            { className: "update-container", key: index },
            _react2.default.createElement(
              "div",
              { className: "author-info" },
              _react2.default.createElement("a", { href: "#", className: "user-img", style: { backgroundImage: "url('" + user.profile_img + "')" } }),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "a",
                  { href: "/profile" },
                  user.first_name + " " + user.last_name,
                  " "
                ),
                " shared a ",
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  " ",
                  post.type == 'text' ? 'story' : 'image'
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "media" },
              _react2.default.createElement("div", {
                className: "" + (post.type == 'text' ? 'story' : 'image'),
                style: {
                  background: 'url("https://t3.ftcdn.net/jpg/01/52/17/06/240_F_152170627_nD1vV4VzKURo8O9kU3XdNdvT6qA4ascE.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
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
                    post.content
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
                  _react2.default.createElement("textarea", { name: "name", rows: 8, cols: 80, defaultValue: "" }),
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
          );
        });
      }
    };

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Posts, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "posts" },
        this.showLatestPosts()
      );
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;


var app = document.getElementById("app");

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(111);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(109);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(110);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        initialData: this.props.initialData
      }, function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content-area" },
        _react2.default.createElement(_ComposeSection2.default, {
          initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
        }),
        _react2.default.createElement(_Posts2.default, { initialData: this.state.initialData == undefined ? "loading" : this.state.initialData })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_Component) {
  _inherits(LeftMenu, _Component);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    var _this = _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  _createClass(LeftMenu, [{
    key: "render",
    value: function render() {
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      } else {
        var _props$initialData$us = this.props.initialData.userInfo,
            first_name = _props$initialData$us.first_name,
            last_name = _props$initialData$us.last_name;

        return _react2.default.createElement(
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
              { className: "name", onClick: this.clickedDropdown },
              first_name + " " + last_name
            ),
            _react2.default.createElement(
              "div",
              { className: "icon", onClick: this.clickedDropdown },
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown " + (this.state.dropdown ? "active" : "") },
              _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/account" },
                  "Account"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "/logout" },
                  "Logout"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups" },
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
        );
      }
    }
  }]);

  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;


var app = document.getElementById("app");

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingComp = function (_Component) {
  _inherits(LoadingComp, _Component);

  function LoadingComp() {
    _classCallCheck(this, LoadingComp);

    var _this = _possibleConstructorReturn(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  _createClass(LoadingComp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        {
          id: "loading-comp",
          className: this.props.initialData == "loading" ? "active" : ""
        },
        _react2.default.createElement(
          "div",
          { className: "loading-icon" },
          _react2.default.createElement(
            "div",
            { className: "loadingio-spinner-rolling-dfl8agvdqzv" },
            _react2.default.createElement(
              "div",
              { className: "ldio-vih25qal7v" },
              _react2.default.createElement("div", null)
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "loading-text" },
          "Loading..."
        )
      );
    }
  }]);

  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;


var app = document.getElementById("app");

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messenger = function (_Component) {
  _inherits(Messenger, _Component);

  function Messenger() {
    _classCallCheck(this, Messenger);

    var _this = _possibleConstructorReturn(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
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
                "Remy N"
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
      );
    }
  }]);

  return Messenger;
}(_react.Component);

exports.default = Messenger;


var app = document.getElementById("app");

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(111);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(109);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(110);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        initialData: this.props.initialData
      }, function () {
        console.log(_this2.props);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content-area" },
        "This is the user profile"
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messenger = function (_Component) {
  _inherits(Messenger, _Component);

  function Messenger() {
    _classCallCheck(this, Messenger);

    var _this = _possibleConstructorReturn(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Remy"
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
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
      );
    }
  }]);

  return Messenger;
}(_react.Component);

exports.default = Messenger;


var app = document.getElementById("app");

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(111);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(248);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(252);

var _Profile2 = _interopRequireDefault(_Profile);

var _LeftMenu = __webpack_require__(249);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Messenger = __webpack_require__(251);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(253);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(109);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(110);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(250);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var initialData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get("/api/initialApp");

                case 3:
                  initialData = _context.sent;


                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });
                  return _context.abrupt("return", initialData.data);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);

                  console.log(_context.t0);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          { className: "app-container home-page" },
          _react2.default.createElement(_LoadingComp2.default, {
            initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
          }),
          _react2.default.createElement(_LeftMenu2.default, {
            initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
          }),
          _react2.default.createElement(
            "section",
            { id: "content-container" },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: function component(props) {
                return _react2.default.createElement(_Home2.default, { routeProps: props,
                  initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/profile", component: function component(props) {
                return _react2.default.createElement(_Profile2.default, { routeProps: props,
                  initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } })
          ),
          _react2.default.createElement(_Messenger2.default, null)
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[273]);