import React, { Component } from "react";
import ReactDOM from "react-dom";
import{
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import axios from "axios";
import ComposeSection from "./ComposeSection";
import Posts from "./Posts";


export default class Profile extends Component {
    constructor() {
      super();
      this.state = {
        name: "Remy",
      };
    }
  componentWillMount() {
        this.setState({
                initialData: this.props.initialData
              },() => {
                console.log(this.props);
              });

   }

    render() {
          return (
            <div className="content-area">
              This is the user profile
              </div>
          );
    };
  }
