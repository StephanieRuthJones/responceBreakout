import React, { Component } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Content1 from "./components/Content1"
import Content2 from "./components/Content2"
import Content3 from "./components/Content3"

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="navBar">
            <Navbar /> 
         </div>
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
    )
  }
}

export default App
