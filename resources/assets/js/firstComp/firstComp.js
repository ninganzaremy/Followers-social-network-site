import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Remy'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div className='home'>
        this is my first component
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
