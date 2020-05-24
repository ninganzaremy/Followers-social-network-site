import React, { Component } from "react";
import ReactDOM from "react-dom";
import LeftMenu from './components/LeftMenu'
import Messenger from './components/Messenger'
import SearchHeader from './components/SearchHeader'
import ComposeSection from './components/ComposeSection'
import Posts from './components/Posts'

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
    return (<div className="app-container home-page">
        <LeftMenu />
        <section id="content-container">
        <SearchHeader />
          <div className="content-area">
          <ComposeSection />
          <Posts />


          </div>
        </section>
      <Messenger />
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
