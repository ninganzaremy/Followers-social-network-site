import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
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
      initialData:{
        name:'joe',
        initialData:{
          first_name :'Remy',
          last_name: 'N'
        }
      }
    };
  }
  componentWillMount(){
    const self = this;
    const getInitialdata = async function(){
      try {
        const initialData =await axios.get('/api/initialApp')

        self.setState({
          initialData: initialData.data
        }, () =>{
          console.log(self.state)

        })
        return initialData.data
      } catch (error) {
        console.log(error)
        }

    }
    getInitialdata()
  }





  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (<div className="app-container home-page">
        <LeftMenu initialData={this.state.initialData}/>
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
